// lucide-react's brand/logo icons (Github, Linkedin) were removed upstream,
// so these two are small inline substitutes sized to match lucide's API.
type IconProps = { size?: number; className?: string };

export function GithubIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.4 0 12.09c0 5.61 3.63 10.2 8.7 11.85.6.15.75-.3.75-.6v-2.1c-3.51.75-4.26-1.65-4.26-1.65-.6-1.35-1.35-1.8-1.35-1.8-1.05-.75.075-.75.075-.75 1.2.075 1.8 1.2 1.8 1.2 1.05 1.8 2.7 1.275 3.375.975.075-.75.405-1.275.75-1.575-2.775-.3-5.7-1.35-5.7-6.15 0-1.35.45-2.4 1.2-3.3-.15-.3-.525-1.575.15-3.3 0 0 1.05-.3 3.3 1.2.9-.225 1.95-.375 3-.375s2.1.15 3 .375c2.25-1.5 3.3-1.2 3.3-1.2.675 1.725.3 3 .15 3.3.75.9 1.2 1.95 1.2 3.3 0 4.8-2.925 5.85-5.7 6.15.45.375.825 1.125.825 2.25v3.3c0 .3.15.75.75.6C20.37 22.29 24 17.7 24 12.09 24 5.4 18.63 0 12 0z" />
    </svg>
  );
}

export function LinkedinIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
