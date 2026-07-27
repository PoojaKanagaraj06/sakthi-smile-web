import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { DoctorCard } from "@/components/Cards";
import { CTABanner } from "@/components/CTABanner";
import { Counter } from "@/components/Counter";
import { DOCTORS, STATS } from "@/data/site";
import { FaUserMd, FaBullseye, FaEye } from "react-icons/fa";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sakthi Dental Clinic" },
      { name: "description", content: "Meet Dr. Anupriya and the specialist team at Sakthi Dental Clinic — 20+ years of trusted dental care." },
      { property: "og:title", content: "About Sakthi Dental Clinic" },
      { property: "og:description", content: "20+ years of trusted, patient-first dental care led by Dr. Anupriya." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <PageHero eyebrow="About Us" title="Building healthier smiles since two decades" subtitle="At Sakthi Dental Clinic, we combine clinical excellence with genuine warmth — because dentistry should feel human." />

      <section className="container-page mt-20 grid gap-10 lg:grid-cols-2 items-center">
        <div className="card-surface p-8">
          <div className="grid place-items-center h-16 w-16 rounded-2xl gradient-primary text-primary-foreground mb-5">
            <FaUserMd size={26} />
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold">Dr. Anupriya</h2>
          <p className="text-primary font-semibold mt-1">Founder · 20+ Years Experience</p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Dr. Anupriya founded Sakthi Dental Clinic with a simple belief — that everyone deserves confident, healthy smile without fear. With over two decades of experience across general, cosmetic and pediatric dentistry, she leads a specialist team dedicated to gentle, evidence-based care.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="card-surface p-6">
            <FaEye className="text-primary" size={24} />
            <h3 className="font-semibold text-lg mt-3">Our Vision</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">To be the most trusted family dental clinic — where every patient leaves smiling.</p>
          </div>
          <div className="card-surface p-6">
            <FaBullseye className="text-primary" size={24} />
            <h3 className="font-semibold text-lg mt-3">Our Mission</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">Deliver world-class dental care with compassion, transparency and cutting-edge technology.</p>
          </div>
        </div>
      </section>

      <section className="container-page mt-24">
        <SectionTitle eyebrow="Our Team" title="Meet Our Specialists" subtitle="A multi-disciplinary team committed to your oral health." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DOCTORS.map((d) => (<DoctorCard key={d.name} {...d} />))}
        </div>
      </section>

      <section className="container-page mt-24">
        <div className="rounded-3xl gradient-primary p-10 md:p-14 text-primary-foreground text-center shadow-[var(--shadow-elevated)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl md:text-5xl font-bold">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <p className="text-sm md:text-base mt-1 text-primary-foreground/90">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
}
