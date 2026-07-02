import { redirect } from "next/navigation";

export function ensureLocale<T extends string>(
  locale: string,
  messages: Record<T, unknown>,
  path: string,
): T {
  if (locale in messages) {
    return locale as T;
  }

  redirect(`/en${path}`);
}