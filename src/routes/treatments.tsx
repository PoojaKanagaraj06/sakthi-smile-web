import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/Hero";
import { TreatmentCard } from "@/components/Cards";
import { CTABanner } from "@/components/CTABanner";
import { TREATMENTS } from "@/data/site";

export const Route = createFileRoute("/treatments")({
  head: () => ({
    meta: [
      { title: "Treatments — Sakthi Dental Clinic" },
      { name: "description", content: "Explore our full range of dental treatments: implants, RCT, orthodontics, cosmetic dentistry and more." },
      { property: "og:title", content: "Dental Treatments at Sakthi Dental Clinic" },
      { property: "og:description", content: "Complete dental care — from cleanings to implants, aligners and cosmetic dentistry." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/treatments" }],
  }),
  component: TreatmentsPage,
});

function TreatmentsPage() {
  return (
    <Layout>
      <PageHero eyebrow="Treatments" title="Comprehensive Dental Care" subtitle="Everything from preventive cleanings to advanced surgical and cosmetic dentistry — all under one roof." />
      <section className="container-page mt-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TREATMENTS.map((t) => (<TreatmentCard key={t.title} {...t} />))}
        </div>
      </section>
      <CTABanner />
    </Layout>
  );
}
