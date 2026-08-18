import { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2";

const variants = {
  primary: "bg-foreground text-background hover:opacity-85",
  secondary:
    "border border-border text-foreground hover:border-accent hover:text-accent",
  ghost: "text-muted-foreground hover:text-foreground",
};

export function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  external = false,
  type = "button",
}: {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
}) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
