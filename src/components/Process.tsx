import { Case } from "@/components/ui/cases-with-infinite-scroll";

export const Process = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <Case />
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          The Process - Behind The Scenes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Step 1: Planning</h3>
            <p className="mt-2">We plan the project scope and objectives.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Step 2: Design</h3>
            <p className="mt-2">Our team designs the user interface and experience.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Step 3: Development</h3>
            <p className="mt-2">We develop the project using the latest technologies.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Step 4: Testing</h3>
            <p className="mt-2">Thorough testing to ensure quality and performance.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Step 5: Launch</h3>
            <p className="mt-2">We launch the project and monitor its performance.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Step 6: Feedback</h3>
            <p className="mt-2">Collecting user feedback for future improvements.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
