import type { Lang } from "./translations";

export const defaultLang: Lang = "tr";

export function getLangFromPath(pathname: string): Lang {
  return pathname.startsWith("/az") ? "az" : "tr";
}

export function stripLangPrefix(pathname: string): string {
  // "/az" veya "/az/..." => "/" veya "/..."
  return pathname.startsWith("/az") ? pathname.replace(/^\/az(\/|$)/, "/") : pathname;
}

export function withLang(path: string, lang: Lang): string {
  // Normalize
  let normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized !== "/" && normalized.endsWith("/")) normalized = normalized.slice(0, -1);

  // Güvenlik: yanlışlıkla "/az" prefix gelirse temizle (double prefix olmasın)
  normalized = stripLangPrefix(normalized);

  if (lang === "tr") return normalized;
  if (normalized === "/") return "/az";
  return `/az${normalized}`;
}
