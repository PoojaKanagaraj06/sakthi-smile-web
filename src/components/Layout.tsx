import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
