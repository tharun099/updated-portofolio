import { Eye, Rocket, Palette, Globe } from "lucide-react";

const services = [
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Portfolio Review",
    description: "In-depth analysis and feedback on your existing portfolio"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "UX Audit",
    description: "Comprehensive review of your user experience and interface"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Design Subscription",
    description: "Ongoing design support for your growing business"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Website Development",
    description: "Custom website development tailored to your needs"
  }
];

export const Services = () => {
  return (
    <section className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-16">Services</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="p-6 rounded-lg border hover:shadow-lg transition-shadow">
            <div className="text-secondary mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};