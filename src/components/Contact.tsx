import { ContactInfo } from "./contact/ContactInfo";
import { HighlighterSection } from "./contact/HighlighterSection";
import { Gravity, MatterBody } from "@/components/ui/gravity";

export const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="w-full flex mt-4 items-center justify-center">
        <h1 className="text-center text-2xl md:text-5xl lg:text-[10rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-900 select-none">
          Wanna Know more?
        </h1>
      </div>

      <div className="w-full h-[500px] relative mt-8">
        <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full">
          <MatterBody
            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
            x="30%"
            y="10%"
          >
            <div className="text-xl sm:text-2xl md:text-3xl bg-primary text-white rounded-full hover:cursor-pointer px-8 py-4">
              Design
            </div>
          </MatterBody>
          <MatterBody
            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
            x="30%"
            y="30%"
          >
            <div className="text-xl sm:text-2xl md:text-3xl bg-secondary text-white rounded-full hover:cursor-grab px-8 py-4">
              Development
            </div>
          </MatterBody>
          <MatterBody
            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
            x="40%"
            y="20%"
            angle={10}
          >
            <div className="text-xl sm:text-2xl md:text-3xl bg-accent text-accent-foreground rounded-full hover:cursor-grab px-8 py-4">
              UI/UX
            </div>
          </MatterBody>
          <MatterBody
            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
            x="75%"
            y="10%"
          >
            <div className="text-xl sm:text-2xl md:text-3xl bg-muted text-muted-foreground rounded-full hover:cursor-grab px-8 py-4">
              Branding
            </div>
          </MatterBody>
          <MatterBody
            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
            x="80%"
            y="20%"
          >
            <div className="text-xl sm:text-2xl md:text-3xl gradient-bg text-white rounded-full hover:cursor-grab px-8 py-4">
              Marketing
            </div>
          </MatterBody>
        </Gravity>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <ContactInfo />
        <HighlighterSection />
      </div>
    </section>
  );
};