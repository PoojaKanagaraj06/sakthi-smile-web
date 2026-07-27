import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative gradient-hero overflow-hidden">
      <div className="container-page py-20 md:py-28 text-center relative">
        {eyebrow && (
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4 animate-[fade-in_0.5s_ease-out]">
            {eyebrow}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] max-w-3xl mx-auto animate-[slide-up_0.7s_ease-out]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed animate-[slide-up_0.8s_ease-out]">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8 flex flex-wrap gap-3 justify-center animate-[slide-up_0.9s_ease-out]">{children}</div>}
      </div>
    </section>
  );
}
