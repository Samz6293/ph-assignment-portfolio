import { getVisibleSections } from "@/content/site";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Footer } from "@/components/sections/footer";
import { sectionRegistry } from "@/components/sections";

/**
 * Single-page portfolio. Sections render in the order configured in
 * content/site.ts — reorder, rename or remove entries there (no code changes).
 */
export default function Home() {
  const sections = getVisibleSections();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {sections.map((entry, i) => {
          const Section = sectionRegistry[entry.id];
          return <Section key={entry.id} index={i + 1} label={entry.label} />;
        })}
      </main>
      <Footer />
    </>
  );
}
