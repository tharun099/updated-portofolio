import { Hero } from "@/components/Hero";
import { ProfessionalJourney } from "@/components/ProfessionalJourney";
import { Services } from "@/components/Services";
import { WorkGallery } from "@/components/WorkGallery";
import { Contact } from "@/components/Contact";
import { Testimonials } from "@/components/Testimonials";
import { BottomNav } from "@/components/BottomNav";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <div id="about">
        <ProfessionalJourney />
      </div>
      <div id="projects">
        <WorkGallery />
      </div>
      <div id="services">
        <Services />
      </div>
      <Testimonials />
      <div id="contact">
        <Contact />
      </div>
      <BottomNav />
    </div>
  );
};

export default Index;