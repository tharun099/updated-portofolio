import { Button } from "@/components/ui/button";
import { Rocket, Star, Moon, Mail } from "lucide-react";
export const Hero = () => {
  return <div className="relative min-h-screen">
      {/* Status and Social Links */}
      <div className="absolute top-8 w-full flex justify-between px-8 text-sm">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 bg-[#d1ffe0] px-3 py-1.5 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-800">Available for Work</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="mailto:work@yash.design" className="flex items-center gap-2 bg-[#f5f5f4] hover:bg-[#e7e5e4] transition-colors px-3 py-1.5 rounded-full text-[#1c1917]">
            <Mail className="w-4 h-4" />
            work@yash.design
          </a>
          <a href="https://instagram.com/yash.design" target="_blank" rel="noopener noreferrer">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a href="https://twitter.com/yash_design" target="_blank" rel="noopener noreferrer">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a href="https://linkedin.com/in/yash-design" target="_blank" rel="noopener noreferrer">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Floating Icons (behind text) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Rocket className="absolute left-1/4 top-1/4 w-48 h-48 floating text-primary/10" />
        <Star className="absolute right-1/4 top-1/3 w-40 h-40 floating text-secondary/10" style={{
        animationDelay: "1s"
      }} />
        <Moon className="absolute left-1/3 bottom-1/4 w-56 h-56 floating text-primary/10" style={{
        animationDelay: "2s"
      }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-7xl font-bold mb-6">
          Hi, I'm <span className="italic">Tharun!</span>
        </h1>
        <p className="text-xl mb-8 max-w-2xl">Web designer, developer, pet lover, and adventure seeker – that's me!</p>

        {/* Profile Image */}
        <div className="w-48 h-48 rounded-full overflow-hidden mb-8 border-4 border-primary/20">
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" alt="Yash's profile" className="w-full h-full object-cover" />
        </div>

        <p className="text-lg mb-12 max-w-2xl text-gray-600">
          If you're searching for a Website designer to transform your ideas into reality
        </p>

        <Button size="lg" className="gradient-bg border-none hover:opacity-90">
          Let's Work Together!
        </Button>
      </div>
    </div>;
};