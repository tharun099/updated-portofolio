import React from "react";
import { cn } from "@/lib/utils";

interface TimelineProps {
  data: {
    title: string;
    content: React.ReactNode;
  }[];
}

export const Timeline = ({ data }: TimelineProps) => {
  return (
    <div className="w-full space-y-8">
      {data.map((item, idx) => (
        <div key={idx} className="relative">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full">
              <span className="text-white text-sm font-semibold">{idx + 1}</span>
            </div>
            <div className="ml-4 font-bold text-xl">{item.title}</div>
          </div>
          <div className="mt-4 ml-14 pb-8">
            {item.content}
          </div>
          {idx !== data.length - 1 && (
            <div className="absolute left-5 top-10 h-full w-[1px] bg-gray-200" />
          )}
        </div>
      ))}
    </div>
  );
};