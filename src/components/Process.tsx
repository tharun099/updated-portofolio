import { Eye, Rocket, Palette, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Discovery",
    description: "Understanding your vision and requirements"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Implementation",
    description: "Bringing ideas to life through design and development"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Development",
    description: "Crafting the perfect solution for your needs"
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "Delivery",
    description: "Launching your project with confidence"
  }
];

export const Process = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          The Process - Behind The Scenes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-white mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-[2px] gradient-bg" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};