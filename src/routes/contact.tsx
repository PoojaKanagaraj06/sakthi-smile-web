import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/Hero";
import { ContactForm } from "@/components/ContactForm";
import { CLINIC } from "@/data/site";
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail, HiOutlineClock } from "react-icons/hi";
import { FaExclamationTriangle } from "react-icons/fa";
import { ButtonLink } from "@/components/Button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sakthi Dental Clinic" },
      { name: "description", content: "Book an appointment, ask a question or find our clinic. We're here to help." },
      { property: "og:title", content: "Contact Sakthi Dental Clinic" },
      { property: "og:description", content: "Reach out to book an appointment or ask about our dental services." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const info = [
  { icon: HiOutlineLocationMarker, label: "Address", value: CLINIC.address },
  { icon: HiOutlinePhone, label: "Phone", value: CLINIC.phone },
  { icon: HiOutlineMail, label: "Email", value: CLINIC.email },
];

function ContactPage() {
  return (
    <Layout>
      <PageHero eyebrow="Get in Touch" title="We'd love to hear from you" subtitle="Book an appointment or send us a message — we typically reply within a few hours." />

      <section className="container-page mt-16 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-bold mb-4">Send us a message</h2>
          <ContactForm />
        </div>

        <div className="space-y-6">
          <h2 className="font-display text-2xl font-bold">Clinic Information</h2>
          <div className="card-surface p-6 space-y-5">
            {info.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-4">
                <div className="grid place-items-center h-11 w-11 rounded-xl bg-primary/10 text-primary shrink-0">
                  <Icon size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
                  <p className="text-foreground mt-0.5">{value}</p>
                </div>
              </div>
            ))}
            <div className="flex gap-4">
              <div className="grid place-items-center h-11 w-11 rounded-xl bg-primary/10 text-primary shrink-0">
                <HiOutlineClock size={20} />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Working Hours</p>
                <ul className="mt-1 space-y-1 text-sm">
                  {CLINIC.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-3">
                      <span className="text-muted-foreground">{h.day}</span>
                      <span className="font-medium">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="card-surface overflow-hidden">
            <div className="aspect-video w-full bg-gradient-to-br from-primary/10 via-primary-glow/20 to-primary/5 grid place-items-center relative">
              <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, rgba(79,156,249,0.15), transparent 40%), radial-gradient(circle at 70% 70%, rgba(142,202,230,0.2), transparent 40%)" }} />
              <div className="relative text-center">
                <HiOutlineLocationMarker className="mx-auto text-primary" size={40} />
                <p className="font-semibold mt-2">Find us on Google Maps</p>
                <p className="text-sm text-muted-foreground mt-1 px-4">{CLINIC.address}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-destructive/10 border border-destructive/20 p-6 flex gap-4 items-start">
            <FaExclamationTriangle className="text-destructive shrink-0 mt-1" size={22} />
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">Dental Emergency?</h3>
              <p className="text-sm text-muted-foreground mt-1">We offer 24/7 emergency dental support. Call our emergency line for urgent care.</p>
              <ButtonLink href={`tel:${CLINIC.emergencyPhone}`} className="mt-3" size="md">
                <HiOutlinePhone /> {CLINIC.emergencyPhone}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
