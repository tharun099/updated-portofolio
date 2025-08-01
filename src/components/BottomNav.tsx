import { Home, User, Briefcase, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const navItems = [
  { name: 'About', url: '#about', icon: User },
  { name: 'Recent Projects', url: '#projects', icon: Home },
  { name: 'Services', url: '#services', icon: Briefcase },
  { name: 'Contact', url: '#contact', icon: Mail }
];

export const BottomNav = () => {
  const [activeTab, setActiveTab] = useState(navItems[0].name);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        name: item.name,
        element: document.querySelector(item.url)
      }));

      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      let currentSection = sections[0]; // Default to first section

      sections.forEach(section => {
        if (!section.element) return;
        const rect = section.element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementCenter = elementTop + (rect.height / 2);

        // Check if the section's center is within the viewport
        if (Math.abs(scrollPosition - elementCenter) < viewportHeight / 2) {
          currentSection = section;
        }

        // Special handling for last section (Contact)
        if (section.name === 'Contact' && 
            window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
          currentSection = section;
        }
      });

      if (currentSection) {
        setActiveTab(currentSection.name);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (name: string, url: string) => {
    setActiveTab(name);
    const element = document.querySelector(url);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 mb-6">
      <div className="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <button
              key={item.name}
              onClick={() => handleClick(item.name, item.url)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary"
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};