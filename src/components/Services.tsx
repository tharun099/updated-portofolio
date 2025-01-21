import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Portfolio Review",
    description: "In-depth analysis and feedback on your existing portfolio",
    link: "portfolio-review",
  },
  {
    title: "UX Audit",
    description: "Comprehensive review of your user experience and interface",
    link: "ux-audit",
  },
  {
    title: "Design Subscription",
    description: "Ongoing design support for your growing business",
    link: "design-subscription",
  },
  {
    title: "Website Development",
    description: "Custom website development tailored to your needs",
    link: "website-development",
  }
];

const processSteps = [
  { number: "1", title: "Spy", description: "Research and analyze the project requirements and objectives." },
  { number: "2", title: "Dream", description: "Plan and ideate different directions." },
  { number: "3", title: "Craft", description: "Crafting, Refining & doing some sort of magic." },
  { number: "4", title: "Testify", description: "Test and iterate." },
];

export const Services = () => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-16">Services</h2>
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-4">
          {projects.map((project, idx) => (
            <div
              key={project?.link}
              className="relative group block p-2 h-full w-full"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block rounded-3xl"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-800/[0.2] border border-transparent group-hover:border-slate-700 relative z-50">
                <div className="relative z-50">
                  <div className="p-4">
                    <h4 className="text-zinc-100 font-bold tracking-wide mt-4">
                      {project.title}
                    </h4>
                    <p className="mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-20">
        <h3 className="text-3xl font-bold text-center mb-16">
          The Process - <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Behind The Scenes</span>
        </h3>
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 px-8">
          {processSteps.map((step, index) => (
            <div key={step.number} className="flex-1 relative">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-xl">
                  {step.number}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[calc(50%+2rem)] w-[calc(100%-4rem)] border-t-2 border-dashed border-gray-300" />
                )}
              </div>
              <h4 className="text-xl font-bold text-center mb-2">{step.title}</h4>
              <p className="text-gray-600 text-center text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};