import { ensureLocale } from "./ensureLocale";

export function projectLocale<T extends string>(
  locale: string,
  messages: Record<T, unknown>,
  project: string,
): T {
  return ensureLocale(
    locale,
    messages,
    `/${project}`,
  );
}