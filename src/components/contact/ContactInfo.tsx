import { Mail } from "lucide-react";

export const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold">Get in touch</h2>
      <p className="text-gray-600 max-w-md">
        If you're searching for a Website designer to transform your ideas into reality
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
  );
};