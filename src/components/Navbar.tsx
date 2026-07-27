import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaTooth } from "react-icons/fa";
import { NAV_LINKS, CLINIC } from "@/data/site";
import { ButtonLink } from "./Button";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-[var(--shadow-card)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between h-18 py-4">
        <Link to="/" className="flex items-center gap-2.5 group" aria-label={CLINIC.name}>
          <span className="grid place-items-center h-10 w-10 rounded-xl gradient-primary text-primary-foreground shadow-[var(--shadow-soft)] group-hover:scale-105 transition-transform">
            <FaTooth size={18} />
          </span>
          <span className="font-display font-bold text-lg text-foreground leading-tight">
            Sakthi <span className="text-primary">Dental</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 text-sm font-medium text-muted-foreground rounded-full transition-colors hover:text-primary hover:bg-secondary"
              activeProps={{ className: "!text-primary !bg-secondary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink to="/contact" size="md">
            Book Appointment
          </ButtonLink>
        </div>

        <button
          className="lg:hidden grid place-items-center h-11 w-11 rounded-full border border-border text-foreground hover:bg-secondary"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-[slide-up_0.25s_ease-out]">
          <nav className="container-page py-4 flex flex-col gap-1" aria-label="Mobile">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-secondary"
                activeProps={{ className: "!text-primary !bg-secondary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <ButtonLink to="/contact" className="mt-2">
              Book Appointment
            </ButtonLink>
          </nav>
        </div>
      )}
    </header>
  );
}
