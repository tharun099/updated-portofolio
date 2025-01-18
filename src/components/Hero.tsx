import { RocketIcon, GlobeIcon, StarIcon } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-10" />
      
      <div className="absolute inset-0">
        <RocketIcon className="floating absolute top-1/4 left-1/4 w-12 h-12 text-secondary opacity-20" />
        <StarIcon className="floating absolute top-1/3 right-1/4 w-8 h-8 text-primary opacity-30" style={{ animationDelay: "1s" }} />
        <GlobeIcon className="floating absolute bottom-1/4 left-1/3 w-16 h-16 text-secondary opacity-20" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent gradient-bg">
          Hi, I'm [Name]!
        </h1>
        <p className="text-xl mb-8 text-gray-600">
          Crafting digital experiences that make an impact
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 rounded-full gradient-bg text-white font-semibold hover:opacity-90 transition-opacity">
            View Work
          </button>
          <button className="px-8 py-3 rounded-full border-2 border-secondary text-secondary font-semibold hover:bg-secondary hover:text-white transition-colors">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};