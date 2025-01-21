import { Hero } from "@/components/Hero";
import { ProfessionalJourney } from "@/components/ProfessionalJourney";
import { Services } from "@/components/Services";
import { WorkGallery } from "@/components/WorkGallery";
import { Contact } from "@/components/Contact";
import { BottomNav } from "@/components/BottomNav";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProfessionalJourney />
      <div id="projects">
        <WorkGallery />
      </div>
      <Services />
      <Contact />
      <BottomNav />
    </div>
  );
};

export default Index;