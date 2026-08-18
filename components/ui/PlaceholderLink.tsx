import { ReactNode } from "react";
import { isPlaceholder } from "@/lib/placeholder";

export function PlaceholderLink({
  href,
  children,
  className = "",
  placeholderClassName = "",
  external = true,
}: {
  href: string | null | undefined;
  children: ReactNode;
  className?: string;
  placeholderClassName?: string;
  external?: boolean;
}) {
  if (isPlaceholder(href)) {
    return (
      <span
        className={`cursor-not-allowed opacity-50 ${placeholderClassName || className}`}
        title={`${href} — update this in the data files`}
        aria-disabled="true"
      >
        {children}
      </span>
    );
  }

  return (
    <a
      href={href as string}
      className={className}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
