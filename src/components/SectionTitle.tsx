import type { ReactNode } from "react";

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`${alignCls} max-w-2xl mb-12 animate-[fade-in_0.6s_ease-out]`}>
      {eyebrow && (
        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
