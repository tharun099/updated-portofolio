import { ContactInfo } from "./contact/ContactInfo";
import { HighlighterSection } from "./contact/HighlighterSection";
import { Gravity, MatterBody } from "@/components/ui/gravity";
import { Checkbox } from "@/components/ui/checkbox";

export const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
        <ContactInfo />
        <HighlighterSection />
      </div>

      <div className="w-full flex mt-20 items-center justify-center">
        <h1 className="text-center text-2xl md:text-5xl lg:text-[10rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-900 select-none">
          Wanna Know more?
        </h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
        <div className="max-w-3xl mx-auto bg-[#E5DEFF] rounded-3xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Bucket List <span className="text-blue-500">✈</span></h2>
            <p className="text-gray-600">Tip: Drag & play around</p>
          </div>

          <div className="w-full h-[400px] relative">
            <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full">
            <MatterBody
              matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
              x="30%"
              y="10%"
            >
              <div className="text-lg bg-[#FDE1D3] text-gray-800 rounded-full hover:cursor-grab px-6 py-2 line-through">
                Learn Skateboarding
              </div>
            </MatterBody>
            <MatterBody
              matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
              x="50%"
              y="30%"
            >
              <div className="text-lg bg-[#F2FCE2] text-gray-800 rounded-full hover:cursor-grab px-6 py-2 line-through">
                Learn Swimming
              </div>
            </MatterBody>
            <MatterBody
              matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
              x="70%"
              y="20%"
            >
              <div className="text-lg bg-[#FEC6A1] text-gray-800 rounded-full hover:cursor-grab px-6 py-2">
                Go on Cruise
              </div>
            </MatterBody>
            <MatterBody
              matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
              x="40%"
              y="40%"
            >
              <div className="text-lg bg-[#E5DEFF] text-gray-800 rounded-full hover:cursor-grab px-6 py-2">
                Go Sky Diving
              </div>
            </MatterBody>
            <MatterBody
              matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
              x="60%"
              y="50%"
            >
              <div className="text-lg bg-[#FFE4B5] text-gray-800 rounded-full hover:cursor-grab px-6 py-2 line-through">
                Cliff Jumping
              </div>
            </MatterBody>
            <MatterBody
              matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
              x="80%"
              y="60%"
            >
              <div className="text-lg bg-[#98FB98] text-gray-800 rounded-full hover:cursor-grab px-6 py-2 line-through">
                Travel in Flight
              </div>
            </MatterBody>
            <MatterBody
              matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
              x="30%"
              y="70%"
            >
              <div className="text-lg bg-[#FFC0CB] text-gray-800 rounded-full hover:cursor-grab px-6 py-2">
                Learn Finance
              </div>
            </MatterBody>
            <MatterBody
              matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
              x="50%"
              y="80%"
            >
              <div className="text-lg bg-[#FFB6C1] text-gray-800 rounded-full hover:cursor-grab px-6 py-2">
                Fall in Love
              </div>
            </MatterBody>
            </Gravity>
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 border border-gray-200">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold italic mb-4">People I'd like to meet</h2>
            <p className="text-gray-600 mb-8">
              I've been fortunate enough to meet some of my heroes, but I still have a bucket list.
              This is a list of some of the people I'd like to high five IRL.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="amit" />
              <label htmlFor="amit" className="text-lg">Amit Das</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="dann" />
              <label htmlFor="dann" className="text-lg">Dann Petty</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="chris" />
              <label htmlFor="chris" className="text-lg">Chris Do</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="abhinav" />
              <label htmlFor="abhinav" className="text-lg">Abhinav Chikara</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="casey" />
              <label htmlFor="casey" className="text-lg">Casey Neistat</label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
