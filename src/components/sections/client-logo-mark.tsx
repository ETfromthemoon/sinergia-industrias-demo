import type { ReactNode } from "react";

export const CLIENTS = [
  "Arriendo Legal",
  "Aramark",
  "Asalvo",
  "CIAL",
  "CV Trading",
  "Corona",
  "Dimerc",
  "Easy",
  "Ecostandard",
  "Iansa",
  "Inacap",
  "Jumbo",
  "MB Chemicals",
  "Moriah",
  "Paris",
  "Podas Chile",
  "Red Circular",
  "Ripley",
  "Tottus",
  "Tresmontes Lucchetti",
  "Vinderchile",
] as const;

export type ClientName = (typeof CLIENTS)[number];

type ClientLogoMarkProps = {
  client: ClientName;
  className?: string;
};

type WordmarkProps = {
  children: ReactNode;
  label: string;
  mark?: ReactNode;
  small?: string;
  color?: string;
};

function Wordmark({ children, label, mark, small, color = "#1b2a3a" }: WordmarkProps) {
  return (
    <svg aria-label={label} className="h-auto w-full overflow-visible" role="img" viewBox="0 0 220 64">
      <title>{label}</title>
      {mark ? <g transform="translate(8 9)">{mark}</g> : null}
      <text
        fill={color}
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize={small ? "22" : "28"}
        fontWeight="800"
        letterSpacing={small ? "0.4" : "-1"}
        x={mark ? "63" : "110"}
        y={small ? "29" : "38"}
        textAnchor={mark ? "start" : "middle"}
      >
        {children}
      </text>
      {small ? (
        <text fill={color} fontFamily="Arial, Helvetica, sans-serif" fontSize="10" fontWeight="700" letterSpacing="1.7" x="65" y="45">
          {small}
        </text>
      ) : null}
    </svg>
  );
}

export function ClientLogoMark({ client, className }: ClientLogoMarkProps) {
  const logo = (() => {
    switch (client) {
      case "Arriendo Legal":
        return <Wordmark label="Arriendo Legal" color="#183c71" small="LEGAL"><path d="M4 24 24 7l20 17v20H4Z" fill="#183c71" /><path d="M14 42V27h20v15" fill="none" stroke="#fff" strokeWidth="4" /></Wordmark>;
      case "Aramark":
        return <Wordmark label="Aramark" color="#d71920" mark={<><path d="M20 0 25 14 40 14 28 23 33 38 20 29 7 38 12 23 0 14 15 14Z" fill="#d71920" /><circle cx="20" cy="20" r="6" fill="#fff" /></>}>aramark</Wordmark>;
      case "Asalvo":
        return <Wordmark label="Asalvo" color="#354d2c" mark={<><path d="M4 29 18 4l14 25Z" fill="#7ca54b" /><path d="M20 6 39 39H1Z" fill="#d84845" opacity=".92" /></>}>asalvo</Wordmark>;
      case "CIAL":
        return <Wordmark label="CIAL" color="#174d91" mark={<><circle cx="20" cy="20" r="19" fill="#174d91" /><path d="M10 20h20" stroke="#ffd400" strokeWidth="6" /></>}>CIAL</Wordmark>;
      case "CV Trading":
        return <Wordmark label="CV Trading" color="#192f5a" small="TRADING" mark={<><path d="M2 9 19 0l17 9v22L19 40 2 31Z" fill="#192f5a" /><path d="M12 11h15l-8 17H5Z" fill="#df9f39" /></>}>CV</Wordmark>;
      case "Corona":
        return <Wordmark label="Corona" color="#d71f2b" mark={<><circle cx="20" cy="20" r="18" fill="none" stroke="#d71f2b" strokeWidth="5" /><path d="m8 24 7-12 5 8 6-10 6 14" fill="none" stroke="#d71f2b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" /></>}>corona</Wordmark>;
      case "Dimerc":
        return <Wordmark label="Dimerc" color="#164c97" mark={<><path d="M1 7h17c12 0 20 7 20 17S30 41 18 41H1Z" fill="#164c97" /><circle cx="15" cy="24" r="7" fill="#50ad47" /></>}>DIMERC</Wordmark>;
      case "Easy":
        return <Wordmark label="Easy" color="#f28b00" mark={<><circle cx="20" cy="20" r="19" fill="#f28b00" /><path d="M29 14c-8-5-18 0-18 10s11 15 19 8" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="5" /></>}>easy</Wordmark>;
      case "Ecostandard":
        return <Wordmark label="Ecostandard" color="#247d68" mark={<><path d="M4 35C5 13 21 3 40 4 39 26 27 40 4 35Z" fill="#2f987c" /><path d="M10 31 31 11" stroke="#fff" strokeLinecap="round" strokeWidth="3" /></>}>ecostandard</Wordmark>;
      case "Iansa":
        return <Wordmark label="Iansa" color="#e66522" mark={<><circle cx="20" cy="20" r="9" fill="#e66522" /><path d="M20 0v8M20 32v8M0 20h8M32 20h8M6 6l6 6M28 28l6 6M34 6l-6 6M12 28l-6 6" stroke="#f5a329" strokeLinecap="round" strokeWidth="4" /></>}>iansa</Wordmark>;
      case "Inacap":
        return <Wordmark label="INACAP" color="#0055a5" mark={<><rect width="40" height="40" rx="4" fill="#0055a5" /><path d="M9 30 20 8l11 22" fill="none" stroke="#fff" strokeWidth="5" /><path d="M14 22h12" stroke="#5dc0e7" strokeWidth="4" /></>}>INACAP</Wordmark>;
      case "Jumbo":
        return <Wordmark label="Jumbo" color="#222222" mark={<><circle cx="20" cy="20" r="19" fill="#222" /><path d="M10 16c6-8 17-4 18 3M11 26c4 7 14 9 20 1" fill="none" stroke="#ffd100" strokeLinecap="round" strokeWidth="4" /></>}>jumbo</Wordmark>;
      case "MB Chemicals":
        return <Wordmark label="MB Chemicals" color="#205a9f" small="CHEMICALS" mark={<><path d="m20 1 17 10v19L20 40 3 30V11Z" fill="#205a9f" /><text fill="#fff" fontFamily="Arial, Helvetica, sans-serif" fontSize="16" fontWeight="800" textAnchor="middle" x="20" y="26">MB</text></>}>MB</Wordmark>;
      case "Moriah":
        return <Wordmark label="Moriah" color="#34475e" mark={<><path d="M2 34 12 6l8 17L29 6l9 28-9-6-9 8-8-8Z" fill="#34475e" /><path d="m12 6 8 17L29 6" fill="none" stroke="#d5964f" strokeWidth="3" /></>}>MORIAH</Wordmark>;
      case "Paris":
        return <Wordmark label="Paris" color="#202020" mark={<><circle cx="20" cy="20" r="18" fill="none" stroke="#202020" strokeWidth="3" /><path d="M20 8v24M10 20h20" stroke="#202020" strokeWidth="3" /></>}>paris</Wordmark>;
      case "Podas Chile":
        return <Wordmark label="Podas Chile" color="#356a44" small="CHILE" mark={<><path d="M20 2C9 11 4 22 5 37c15 1 26-4 35-15C35 10 27 4 20 2Z" fill="#356a44" /><path d="M10 32 31 11" stroke="#fff" strokeLinecap="round" strokeWidth="3" /></>}>PODAS</Wordmark>;
      case "Red Circular":
        return <Wordmark label="Red Circular" color="#167c5b" small="CIRCULAR" mark={<><path d="M31 12a16 16 0 0 0-23 3" fill="none" stroke="#167c5b" strokeLinecap="round" strokeWidth="5" /><path d="m5 13 5 8 5-8Z" fill="#167c5b" /><path d="M9 29a16 16 0 0 0 23-3" fill="none" stroke="#62a744" strokeLinecap="round" strokeWidth="5" /><path d="m35 27-5-8-5 8Z" fill="#62a744" /></>}>RED</Wordmark>;
      case "Ripley":
        return <Wordmark label="Ripley" color="#326b59" mark={<><path d="M2 4h36v36H2Z" fill="#326b59" /><path d="M10 30V12h12c9 0 9 12 0 12h-7" fill="none" stroke="#fff" strokeWidth="4" /></>}>ripley</Wordmark>;
      case "Tottus":
        return <Wordmark label="Tottus" color="#4e9a38" mark={<><circle cx="20" cy="20" r="17" fill="none" stroke="#4e9a38" strokeWidth="4" /><circle cx="20" cy="20" r="5" fill="#d2bd35" /><path d="M20 3v8M20 29v8M3 20h8M29 20h8" stroke="#4e9a38" strokeLinecap="round" strokeWidth="4" /></>}>tottus</Wordmark>;
      case "Tresmontes Lucchetti":
        return <Wordmark label="Tresmontes Lucchetti" color="#234d91" small="LUCCCHETTI" mark={<><path d="M1 31 14 8l10 16 8-11 7 18Z" fill="#d52d38" /><path d="M4 36h34" stroke="#f2b930" strokeWidth="6" /></>}>TRESMONTES</Wordmark>;
      case "Vinderchile":
        return <Wordmark label="Vinder Chile" color="#1c3252" small="CHILE" mark={<><path d="M3 5h10l8 23L29 5h10L21 40Z" fill="#1c3252" /><path d="m14 5 7 23 8-23" fill="#4d9f70" /></>}>VINDER</Wordmark>;
    }
  })();

  return <div className={className}>{logo}</div>;
}
