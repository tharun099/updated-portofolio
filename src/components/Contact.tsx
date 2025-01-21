import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold">Get in touch</h2>
          <p className="text-gray-600 max-w-md">
            If you're a startup looking for a designer with a broad skill set from concept and strategy to design, get in touch.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Email:</span>
              <a href="mailto:work@yashjain.design" className="text-secondary hover:underline">
                work@yashjain.design
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Currently in</span>
              <span>Pune, India</span>
            </div>
          </div>
        </div>

        {/* Right Column - Chat Interface */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <img 
              src="/placeholder.svg" 
              alt="Whitey" 
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-medium">bowww! Woww!</p>
            </div>
          </div>
          
          <div className="space-y-4 mb-6">
            <p className="bg-gray-100 rounded-lg p-3 inline-block">
              I am Whitey, Yash's chatdog. I will guide you around.
            </p>
            <p className="bg-gray-100 rounded-lg p-3 inline-block">
              You look brave, what's your name?
            </p>
            <span className="text-sm text-gray-500">2d ago</span>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Type an answer"
              className="w-full px-4 py-2 border rounded-lg pr-10"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};