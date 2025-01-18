import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";
import { BottomNav } from "@/components/BottomNav";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Process />
      <Contact />
      <BottomNav />
    </div>
  );
};

export default Index;