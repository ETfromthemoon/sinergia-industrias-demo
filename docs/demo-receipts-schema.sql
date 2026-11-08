-- Dedicated preview database only. No submitted names, emails or messages are stored.
CREATE SCHEMA demo;
CREATE TABLE demo.receipts (
  id uuid PRIMARY KEY,
  flow text NOT NULL CHECK (flow IN ('contact', 'newsletter')),
  created_at timestamptz NOT NULL DEFAULT now(),
  email_sent boolean NOT NULL DEFAULT false CHECK (email_sent = false),
  field_count smallint NOT NULL CHECK (field_count BETWEEN 1 AND 6),
  input_bytes integer NOT NULL CHECK (input_bytes BETWEEN 0 AND 16384)
);
CREATE INDEX receipts_created_at_idx ON demo.receipts (created_at);

CREATE FUNCTION demo.limit_receipts() RETURNS trigger LANGUAGE plpgsql
SECURITY DEFINER SET search_path = pg_catalog AS $fn$
BEGIN
  PERFORM pg_advisory_xact_lock(81003213);
  IF (SELECT count(*) FROM demo.receipts) >= 5000 OR
    (SELECT count(*) FROM demo.receipts WHERE created_at > statement_timestamp() - interval '1 minute') >= 30 THEN
    RAISE EXCEPTION 'Demo receipt limit reached' USING ERRCODE = 'P0001';
  END IF;
  RETURN NEW;
END;
$fn$;
CREATE TRIGGER limit_demo_receipts BEFORE INSERT ON demo.receipts
FOR EACH ROW EXECUTE FUNCTION demo.limit_receipts();
REVOKE ALL ON FUNCTION demo.limit_receipts() FROM PUBLIC;

-- Provision sinergia_demo_writer as a non-admin role through the Neon control plane.
-- Narrow its initial scoped grants before giving its connection string to the preview.
REVOKE ALL ON TABLE demo.receipts FROM sinergia_demo_writer;
GRANT INSERT (id, flow, field_count, input_bytes), SELECT (id)
  ON TABLE demo.receipts TO sinergia_demo_writer;
REVOKE ALL ON SCHEMA demo FROM sinergia_demo_writer;
GRANT USAGE ON SCHEMA demo TO sinergia_demo_writer;
ALTER DEFAULT PRIVILEGES FOR ROLE sinergia_demo_owner IN SCHEMA demo
  REVOKE ALL ON TABLES FROM sinergia_demo_writer;
