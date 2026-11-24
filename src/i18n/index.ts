import { ui, type Dictionary } from "./ui";

export const locales = ["en", "zh"] as const;
export type Locale = (typeof locales)[number];

const pages = new Set(["/", "/privacy"]);

function siteBase(): string {
  return import.meta.env.BASE_URL.replace(/\/$/, "");
}

export function stripBase(pathname: string): string {
  const base = siteBase();
  if (!base) return pathname || "/";
  if (pathname === base || pathname === `${base}/`) return "/";
  if (pathname.startsWith(`${base}/`)) return pathname.slice(base.length) || "/";
  return pathname || "/";
}

export function getLocale(pathname: string): Locale {
  const path = stripBase(pathname);
  return path === "/zh" || path.startsWith("/zh/") ? "zh" : "en";
}

export function pagePath(pathname: string): string {
  let path = stripBase(pathname).replace(/^\/zh(?=\/|$)/, "") || "/";
  if (!path.startsWith("/")) path = `/${path}`;
  if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);
  return path;
}

export function isLocalizedPath(pathname: string): boolean {
  return pages.has(pagePath(pathname));
}

export function localePath(locale: Locale, pathname: string): string {
  const base = siteBase();
  const path = pages.has(pagePath(pathname)) ? pagePath(pathname) : "/";
  const localized =
    locale === "zh" ? (path === "/" ? "/zh/" : `/zh${path}/`) : path === "/" ? "/" : `${path}/`;
  return `${base}${localized}`;
}

export function localeHash(locale: Locale, hash: string): string {
  const id = hash.replace(/^#/, "");
  return `${localePath(locale, "/")}#${id}`;
}

export function useTranslations(locale: Locale): Dictionary {
  return ui[locale];
}

export function htmlLang(locale: Locale): "en" | "zh-CN" {
  return locale === "zh" ? "zh-CN" : "en";
}
