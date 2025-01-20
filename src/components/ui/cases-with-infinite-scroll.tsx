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
      title: "Project One",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      description: "Web Development"
    },
    {
      title: "Project Two",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      description: "UI/UX Design"
    },
    {
      title: "Project Three",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      description: "Mobile App Development"
    },
    {
      title: "Project Four",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      description: "E-commerce Solution"
    },
    {
      title: "Project Five",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      description: "Digital Marketing"
    },
    {
      title: "Project Six",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      description: "Brand Identity"
    },
    {
      title: "Project Seven",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      description: "Social Media Management"
    },
    {
      title: "Project Eight",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      description: "Content Strategy"
    },
    {
      title: "Project Nine",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      description: "SEO Optimization"
    },
    {
      title: "Project Ten",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      description: "Web Analytics"
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