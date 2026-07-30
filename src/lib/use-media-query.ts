"use client";
import { useSyncExternalStore } from "react";

function subscribeToMediaQuery(query: string, callback: () => void): () => void {
  const mql = window.matchMedia(query);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

/** SSR-safe media query hook. Returns `false` on the server and during the
 * first client render (so hydration always matches), then the real value
 * once mounted — no `setState`-in-effect required. */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (callback) => subscribeToMediaQuery(query, callback),
    () => window.matchMedia(query).matches,
    () => false,
  );
}

type NetworkInformationLike = {
  saveData?: boolean;
  addEventListener?: (type: string, callback: () => void) => void;
  removeEventListener?: (type: string, callback: () => void) => void;
};

function getConnection(): NetworkInformationLike | undefined {
  return (navigator as Navigator & { connection?: NetworkInformationLike }).connection;
}

/** True when the user has opted into a reduced-data browsing mode
 * (Save-Data / Network Information API). SSR-safe: defaults to false. */
export function useSaveData(): boolean {
  return useSyncExternalStore(
    (callback) => {
      const connection = getConnection();
      connection?.addEventListener?.("change", callback);
      return () => connection?.removeEventListener?.("change", callback);
    },
    () => getConnection()?.saveData ?? false,
    () => false,
  );
}
