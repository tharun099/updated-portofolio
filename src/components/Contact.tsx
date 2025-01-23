import { ContactInfo } from "./contact/ContactInfo";
import { HighlighterSection } from "./contact/HighlighterSection";

export const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <ContactInfo />
        <HighlighterSection />
      </div>
    </section>
  );
};