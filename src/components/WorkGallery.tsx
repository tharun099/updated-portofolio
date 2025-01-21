import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Eye, Rocket, Palette, Globe } from "lucide-react";

export const WorkGallery = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Work Gallery
      </h2>
      
      <BentoGrid className="mb-12">
        <BentoGridItem
          title="Discovery Phase"
          description="Understanding your needs and project requirements through in-depth consultation"
          icon={<Eye className="w-8 h-8 text-secondary" />}
          className="md:col-span-2"
          header={
            <div className="relative w-full h-60 mb-4 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                alt="Discovery Phase"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          }
        />
        <BentoGridItem
          title="Implementation"
          description="Turning ideas into reality with modern design principles"
          icon={<Rocket className="w-8 h-8 text-secondary" />}
          header={
            <div className="relative w-full h-60 mb-4 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="Implementation"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          }
        />
        <BentoGridItem
          title="Development"
          description="Building with cutting-edge technologies for optimal performance"
          icon={<Palette className="w-8 h-8 text-secondary" />}
          header={
            <div className="relative w-full h-60 mb-4 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
                alt="Development"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          }
        />
        <BentoGridItem
          title="Delivery"
          description="Thorough testing and seamless deployment of your project"
          icon={<Globe className="w-8 h-8 text-secondary" />}
          className="md:col-span-2"
          header={
            <div className="relative w-full h-60 mb-4 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                alt="Delivery"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          }
        />
      </BentoGrid>
    </div>
  );
};