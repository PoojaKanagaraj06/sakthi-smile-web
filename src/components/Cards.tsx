import type { IconType } from "react-icons";
import {
  FaTooth,
  FaShieldAlt,
  FaAward,
  FaHeart,
  FaMagic,
  FaUserMd,
  FaRegSmile,
} from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";

const iconMap: Record<string, IconType> = {
  shield: FaShieldAlt,
  award: FaAward,
  heart: FaHeart,
  sparkle: HiOutlineSparkles,
  tooth: FaTooth,
  magic: FaMagic,
};

export function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  const Icon = iconMap[icon] ?? FaTooth;
  return (
    <article className="card-surface hover-lift p-7 group">
      <div className="grid place-items-center h-14 w-14 rounded-2xl gradient-primary text-primary-foreground mb-5 group-hover:scale-110 transition-transform">
        <Icon size={22} />
      </div>
      <h3 className="font-semibold text-lg text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
    </article>
  );
}

export function TreatmentCard({ title, desc }: { title: string; desc: string }) {
  return (
    <article className="card-surface hover-lift p-6 group relative overflow-hidden">
      <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors" />
      <div className="grid place-items-center h-11 w-11 rounded-xl bg-primary/10 text-primary mb-4">
        <FaTooth size={18} />
      </div>
      <h3 className="font-semibold text-base text-foreground mb-1.5 relative">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed relative">{desc}</p>
    </article>
  );
}

export function DoctorCard({ name, role, exp }: { name: string; role: string; exp: string }) {
  const initials = name
    .replace("Dr. ", "")
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
  return (
    <article className="card-surface hover-lift p-6 text-center">
      <div className="mx-auto grid place-items-center h-20 w-20 rounded-full gradient-primary text-primary-foreground font-display font-bold text-xl mb-4 shadow-[var(--shadow-soft)]">
        {initials}
      </div>
      <h3 className="font-semibold text-foreground">{name}</h3>
      <p className="text-sm text-primary font-medium mt-0.5">{role}</p>
      <p className="text-xs text-muted-foreground mt-2 inline-flex items-center gap-1.5">
        <FaUserMd size={12} /> {exp}
      </p>
    </article>
  );
}

export function TestimonialCard({
  name,
  role,
  text,
}: {
  name: string;
  role: string;
  text: string;
}) {
  return (
    <article className="card-surface hover-lift p-7 flex flex-col">
      <div className="text-primary text-4xl leading-none font-display">“</div>
      <p className="text-sm text-foreground/90 leading-relaxed flex-1">{text}</p>
      <div className="mt-5 pt-5 border-t border-border flex items-center gap-3">
        <div className="grid place-items-center h-10 w-10 rounded-full bg-primary/10 text-primary">
          <FaRegSmile size={18} />
        </div>
        <div>
          <p className="font-semibold text-sm">{name}</p>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </article>
  );
}

export function FacilityCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="card-surface hover-lift p-6">
      <div className="grid place-items-center h-11 w-11 rounded-xl bg-primary/10 text-primary mb-4">
        <HiOutlineSparkles size={20} />
      </div>
      <h3 className="font-semibold text-foreground mb-1.5">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
    </article>
  );
}
