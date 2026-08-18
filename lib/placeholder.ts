/**
 * Values that still need to be filled in by Adriane are written as bracketed
 * placeholders, e.g. "[ADD EMAIL]". Components use this helper to detect
 * them and render an obviously-inert state instead of a broken link.
 */
export function isPlaceholder(value: string | null | undefined): boolean {
  if (!value) return true;
  return value.trim().startsWith("[ADD");
}
