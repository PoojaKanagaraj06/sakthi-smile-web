import { Link } from "@tanstack/react-router";
import { FaTooth, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { CLINIC, NAV_LINKS } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/60">
      <div className="container-page py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid place-items-center h-10 w-10 rounded-xl gradient-primary text-primary-foreground">
              <FaTooth size={18} />
            </span>
            <span className="font-display font-bold text-lg">
              Sakthi <span className="text-primary">Dental</span>
            </span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Compassionate, expert-led dental care for women, children and families in a modern welcoming environment.
          </p>
          <div className="flex gap-2 mt-5">
            {[
              { i: FaInstagram, href: CLINIC.socials.instagram, label: "Instagram" },
              { i: FaFacebookF, href: CLINIC.socials.facebook, label: "Facebook" },
              { i: FaYoutube, href: CLINIC.socials.youtube, label: "YouTube" },
            ].map(({ i: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid place-items-center h-9 w-9 rounded-full bg-background border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-primary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/privacy-policy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2.5"><HiOutlineLocationMarker className="mt-0.5 shrink-0 text-primary" size={18} />{CLINIC.address}</li>
            <li className="flex gap-2.5"><HiOutlinePhone className="mt-0.5 shrink-0 text-primary" size={18} />{CLINIC.phone}</li>
            <li className="flex gap-2.5"><HiOutlineMail className="mt-0.5 shrink-0 text-primary" size={18} />{CLINIC.email}</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-4">Working Hours</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {CLINIC.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-3">
                <span>{h.day}</span>
                <span className="text-foreground font-medium">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page py-5 text-xs text-muted-foreground flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} {CLINIC.name}. All rights reserved.</p>
          <p>Crafted with care for healthier smiles.</p>
        </div>
      </div>
    </footer>
  );
}
