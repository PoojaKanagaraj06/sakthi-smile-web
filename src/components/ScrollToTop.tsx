import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

export function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 grid place-items-center h-12 w-12 rounded-full gradient-primary text-primary-foreground shadow-[var(--shadow-elevated)] hover:-translate-y-0.5 transition-transform"
    >
      <HiArrowUp size={20} />
    </button>
  );
}
