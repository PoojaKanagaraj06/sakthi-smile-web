import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { FeatureCard, TreatmentCard, TestimonialCard, FacilityCard } from "@/components/Cards";
import { CTABanner } from "@/components/CTABanner";
import { ButtonLink } from "@/components/Button";
import { Layout } from "@/components/Layout";
import { WHY_CHOOSE, HOME_SERVICES, FACILITIES, TESTIMONIALS, CLINIC } from "@/data/site";
import { HiOutlinePhone, HiArrowRight } from "react-icons/hi";
import { FaHandHoldingHeart } from "react-icons/fa";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sakthi Dental Clinic — Family Dental Care in Chennai" },
      { name: "description", content: "Compassionate, expert-led dental care for women, children and families. Book an appointment at Sakthi Dental Clinic today." },
      { property: "og:title", content: "Sakthi Dental Clinic — Family Dental Care" },
      { property: "og:description", content: "Specialized dental services for women, children and families in a modern, welcoming environment." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Sakthi Dental Clinic"
        title={<>Specialized Dental Care for <span className="text-primary">Women, Children</span> & Families</>}
        subtitle="Experience compassionate, expert-led dental services tailored to your needs in a modern and welcoming environment."
      >
        <ButtonLink to="/contact" size="lg">Fix an Appointment <HiArrowRight /></ButtonLink>
        <ButtonLink href={`tel:${CLINIC.emergencyPhone}`} variant="outline" size="lg">
          <HiOutlinePhone /> Emergency Dental Support
        </ButtonLink>
      </PageHero>

      {/* Welcome banner */}
      <section className="container-page -mt-6 md:-mt-10 relative z-10">
        <div className="card-surface p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center">
          <div className="grid place-items-center h-14 w-14 rounded-2xl gradient-primary text-primary-foreground shrink-0">
            <FaHandHoldingHeart size={22} />
          </div>
          <div className="flex-1">
            <h2 className="font-display text-xl md:text-2xl font-bold">Welcome to Sakthi Dental</h2>
            <p className="text-muted-foreground text-sm md:text-base mt-1">
              A modern clinic where advanced dentistry meets a warm, human touch. Our mission is a healthier smile — for every generation of your family.
            </p>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="container-page mt-24">
        <SectionTitle eyebrow="Why Choose Us" title="Care built around you" subtitle="Everything we do is designed to make your visit feel calm, safe and genuinely personal." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE.map((w) => (<FeatureCard key={w.title} {...w} />))}
        </div>
      </section>

      {/* Services */}
      <section className="container-page mt-24">
        <SectionTitle eyebrow="Our Services" title="Popular Dental Treatments" subtitle="From routine cleanings to complete smile makeovers." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HOME_SERVICES.map((s) => (<TreatmentCard key={s.title} {...s} />))}
        </div>
        <div className="text-center mt-10">
          <Link to="/treatments" className="text-primary font-semibold inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
            View all treatments <HiArrowRight />
          </Link>
        </div>
      </section>

      {/* Facilities */}
      <section className="container-page mt-24">
        <SectionTitle eyebrow="Facilities" title="A modern clinic, thoughtfully designed" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FACILITIES.map((f) => (<FacilityCard key={f.title} {...f} />))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-page mt-24">
        <SectionTitle eyebrow="Testimonials" title="Loved by our patients" />
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (<TestimonialCard key={t.name} {...t} />))}
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
}
