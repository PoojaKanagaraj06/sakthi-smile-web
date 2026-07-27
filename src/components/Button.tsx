import { Link } from "@tanstack/react-router";
import type { ReactNode, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary:
    "gradient-primary text-primary-foreground shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elevated)] hover:-translate-y-0.5",
  outline:
    "border border-border bg-background text-foreground hover:border-primary hover:text-primary",
  ghost: "text-foreground hover:bg-secondary",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

type Common = { variant?: Variant; size?: Size; children: ReactNode; className?: string };

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: Common & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink({
  to,
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  external,
}: Common & { to?: string; href?: string; external?: boolean }) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (href || external) {
    return (
      <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to!} className={cls}>
      {children}
    </Link>
  );
}
