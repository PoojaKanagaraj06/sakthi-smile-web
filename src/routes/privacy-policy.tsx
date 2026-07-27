import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/Hero";
import { PRIVACY_SECTIONS } from "@/data/site";
import { HiOutlineShieldCheck } from "react-icons/hi";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Sakthi Dental Clinic" },
      { name: "description", content: "How Sakthi Dental Clinic collects, uses and protects your personal information." },
      { property: "og:title", content: "Privacy Policy — Sakthi Dental Clinic" },
      { property: "og:description", content: "Our commitment to your privacy and data protection." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <Layout>
      <PageHero eyebrow="Legal" title="Privacy Policy" subtitle="Your trust matters. Here's how we handle your information — clearly and transparently." />
      <section className="container-page mt-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRIVACY_SECTIONS.map((s, i) => (
            <article key={s.title} className="card-surface hover-lift p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="grid place-items-center h-10 w-10 rounded-xl bg-primary/10 text-primary">
                  <HiOutlineShieldCheck size={20} />
                </div>
                <span className="text-xs font-semibold text-muted-foreground">0{i + 1}</span>
              </div>
              <h2 className="font-semibold text-foreground mb-2">{s.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
            </article>
          ))}
        </div>
        <p className="text-xs text-muted-foreground text-center mt-12">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}</p>
      </section>
    </Layout>
  );
}
