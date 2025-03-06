import { ContactInfo } from "./contact/ContactInfo";
import { HighlighterSection } from "./contact/HighlighterSection";
import { Gravity, MatterBody } from "@/components/ui/gravity";
import { Checkbox } from "@/components/ui/checkbox";
import { SocialLinks } from "@/components/ui/social-links";

export const Contact = () => {
  const socials = [
    {
      name: "Twitter",
      image: "https://w7.pngwing.com/pngs/515/1/png-transparent-twitter-logo-computer-icons-logo-twitter-icon-computer-wallpaper-monochrome-bird-thumbnail.png",
      url: "#"
    },
    {
      name: "Instagram",
      image: "https://link-hover-lndev.vercel.app/instagram.png",
      url: "#"
    },
    {
      name: "LinkedIn",
      image: "https://link-hover-lndev.vercel.app/linkedin.png",
      url: "#"
    }
  ];

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

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
        <div className="md:col-span-2 bg-[#E5DEFF] rounded-3xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Bucket List <span className="text-blue-500">✈</span></h2>
            <p className="text-gray-600">Tip: Drag & play around</p>
          </div>

          <div className="w-full h-[500px] relative">
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

        <div className="bg-white rounded-3xl p-8 border border-gray-200">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold italic mb-4">People I'd like to meet</h2>
            <p className="text-gray-600 mb-8">
              This is a list of some of the people I'd like to high five IRL.
            </p>
          </div>

          <div className="space-y-4">
            <a href="https://twitter.com/amitdas" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:bg-gray-50 p-2 rounded-lg transition-colors">
              <Checkbox id="amit" />
              <label htmlFor="amit" className="text-lg cursor-pointer">Nithin Kamanth</label>
            </a>
            <a href="https://twitter.com/dannpetty" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:bg-gray-50 p-2 rounded-lg transition-colors">
              <Checkbox id="dann" />
              <label htmlFor="dann" className="text-lg cursor-pointer">Ishan Sharma</label>
            </a>
            <a href="https://twitter.com/theChrisDo" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:bg-gray-50 p-2 rounded-lg transition-colors">
              <Checkbox id="chris" />
              <label htmlFor="chris" className="text-lg cursor-pointer">Vamsi Kurapati</label>
            </a>
            <a href="https://twitter.com/abnux" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:bg-gray-50 p-2 rounded-lg transition-colors">
              <Checkbox id="abhinav" />
              <label htmlFor="abhinav" className="text-lg cursor-pointer">Sriman Kotaru</label>
            </a>
            <a href="https://twitter.com/Casey" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:bg-gray-50 p-2 rounded-lg transition-colors">
              <Checkbox id="casey" />
              <label htmlFor="casey" className="text-lg cursor-pointer">Charan (I_guru_crazy)</label>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center mt-32">
        <h3 className="text-2xl font-medium mb-8">Say Hi! or internet stalk me more or let's go somewhere together 👀</h3>
        <SocialLinks socials={socials} className="justify-center" />
        
        <div className="mt-20 mb-8 text-gray-600">
          <p>crafted with ❤️ by tharun-gadupudi</p>
          <p className="mt-2">© 2024 All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};
