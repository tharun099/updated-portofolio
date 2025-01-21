import { FeatureSteps } from "@/components/blocks/feature-section";

export const ProfessionalJourney = () => {
  const features = [
    {
      step: '2024',
      title: 'Launched Multiple Projects',
      content: 'Launched multiple successful web projects and expanded expertise in modern web technologies',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
    },
    {
      step: 'Early 2023',
      title: 'Innovative Solutions',
      content: 'Developed innovative solutions and expanded client portfolio with cutting-edge web applications',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'
    },
    {
      step: 'Achievements',
      title: 'Key Milestones',
      content: 'Completed 50+ successful projects with a client satisfaction rate of 98%. Expertise in modern frameworks and innovative UI/UX solutions.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Professional Journey</h2>
        <FeatureSteps 
          features={features}
          title="Professional Journey"
          autoPlayInterval={4000}
          imageHeight="h-[500px]"
        />
      </div>
    </section>
  );
};