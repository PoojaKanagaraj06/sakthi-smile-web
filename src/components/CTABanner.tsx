import { ButtonLink } from "./Button";
import { HiOutlinePhone } from "react-icons/hi";
import { CLINIC } from "@/data/site";

export function CTABanner() {
  return (
    <section className="container-page my-20">
      <div className="relative overflow-hidden rounded-3xl gradient-primary text-primary-foreground p-10 md:p-14 shadow-[var(--shadow-elevated)]">
        <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div className="relative grid gap-8 md:grid-cols-[1fr_auto] items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight max-w-xl">
              Ready to smile with confidence?
            </h2>
            <p className="mt-3 text-primary-foreground/90 max-w-lg">
              Book a consultation today — our team is ready to design the smile you deserve.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink to="/contact" variant="outline" size="lg" className="!bg-background !text-primary !border-transparent">
              Book Appointment
            </ButtonLink>
            <ButtonLink href={`tel:${CLINIC.phone}`} variant="ghost" size="lg" className="!text-primary-foreground border border-white/40 hover:!bg-white/10">
              <HiOutlinePhone size={18} /> Call Now
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
