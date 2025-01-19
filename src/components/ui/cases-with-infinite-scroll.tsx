"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

function Case() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const projects = [
    {
      title: "DZJNR Community",
      image: "/lovable-uploads/c9ec160e-0f17-4447-9bbf-7e18a95a64b8.png",
      description: "Join the community with our first-ever tee"
    },
    {
      title: "Agency Results",
      image: "/lovable-uploads/c9ec160e-0f17-4447-9bbf-7e18a95a64b8.png",
      description: "No Agency Fluff, Only Genuine Results"
    },
    {
      title: "Speaking Course",
      image: "/lovable-uploads/c9ec160e-0f17-4447-9bbf-7e18a95a64b8.png",
      description: "Speak with Confidence & Clarity in 6 Weeks"
    }
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    const timer = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [api, current]);

  return (
    <div className="w-full py-20">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center mb-12">
            Work Gallery
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="relative group overflow-hidden rounded-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-white/80">{project.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export { Case };