import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <Card className="p-8">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Hi there! I'm a passionate web designer with a keen eye for detail and a love for creating beautiful, functional websites. With years of experience in the industry, I've had the pleasure of working with clients from various sectors, helping them bring their digital visions to life.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not designing websites, you can find me reading design books, exploring new technologies, or planning my next adventure. I believe in continuous learning and staying updated with the latest trends in web design and development.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <h3 className="font-bold text-xl mb-2">5+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-xl mb-2">100+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-xl mb-2">50+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};