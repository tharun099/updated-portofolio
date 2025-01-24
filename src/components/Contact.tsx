import { ContactInfo } from "./contact/ContactInfo";
import { HighlighterSection } from "./contact/HighlighterSection";

export const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="w-full flex mt-4 items-center justify-center">
        <h1 className="text-center text-3xl md:text-5xl lg:text-[10rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-900 select-none">
          Wanna Know more?
        </h1>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <ContactInfo />
        <HighlighterSection />
      </div>
    </section>
  );
};