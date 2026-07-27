import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTABanner } from "@/components/CTABanner";
import { ButtonLink } from "@/components/Button";
import { FAQS, CLINIC } from "@/data/site";
import { HiOutlinePhone, HiOutlineChatAlt2 } from "react-icons/hi";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Sakthi Dental Clinic" },
      { name: "description", content: "Answers to common questions about dental care, treatments, hygiene and more." },
      { property: "og:title", content: "Dental FAQ — Sakthi Dental Clinic" },
      { property: "og:description", content: "Common questions about tooth pain, braces, root canal, implants and oral hygiene." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <Layout>
      <PageHero eyebrow="FAQ" title="Frequently Asked Questions" subtitle="Answers to the questions we hear most often. Still curious? Our team is happy to help." />

      <section className="container-page mt-16 max-w-3xl">
        <FAQAccordion items={FAQS} />
      </section>

      <section className="container-page mt-20">
        <div className="card-surface p-8 md:p-10 text-center max-w-2xl mx-auto">
          <SectionTitle eyebrow="Need Help?" title="Can't find your answer?" subtitle="Our team is one call or message away." />
          <div className="flex flex-wrap gap-3 justify-center">
            <ButtonLink to="/contact"><HiOutlineChatAlt2 /> Message Us</ButtonLink>
            <ButtonLink href={`tel:${CLINIC.phone}`} variant="outline"><HiOutlinePhone /> {CLINIC.phone}</ButtonLink>
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
}
