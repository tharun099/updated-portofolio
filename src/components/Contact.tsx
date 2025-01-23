import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { HighlighterItem, HighlightGroup, Particles } from "@/components/ui/highlighter";
import { useAnimate } from "framer-motion";

export const Contact = () => {
  const [scope, animate] = useAnimate();
  const { toast } = useToast();

  useEffect(() => {
    animate(
      [
        ["#pointer", { left: 200, top: 60 }, { duration: 0 }],
        ["#ui-ux", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 50, top: 102 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#ui-ux", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#graphic", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 224, top: 170 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#graphic", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#web", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 88, top: 198 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#web", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#branding", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 200, top: 60 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#branding", { opacity: 0.5 }, { at: "-0.3", duration: 0.1 }],
      ],
      {
        repeat: Number.POSITIVE_INFINITY,
      }
    );
  }, [animate]);

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

        {/* Right Column - Highlighter */}
        <div className="relative">
          <HighlightGroup className="group h-full">
            <div className="group/item h-full" data-aos="fade-down">
              <HighlighterItem className="rounded-3xl p-6">
                <div className="relative z-20 h-full overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-black">
                  <Particles
                    className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
                    quantity={200}
                    color="#555555"
                    vy={-0.2}
                  />
                  <div className="flex justify-center">
                    <div className="flex h-full flex-col justify-center gap-10 p-4 md:h-[300px] md:flex-row">
                      <div className="relative mx-auto h-[270px] w-[300px] md:h-[270px] md:w-[300px]" ref={scope}>
                        <div id="branding" className="absolute right-12 top-10 rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-slate-800">
                          Branding
                        </div>
                        <div id="graphic" className="absolute left-2 top-20 rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-slate-800">
                          Graphic Design
                        </div>
                        <div id="web" className="absolute bottom-20 right-1 rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-slate-800">
                          Web Application
                        </div>
                        <div id="ui-ux" className="absolute bottom-12 left-14 rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-slate-800">
                          UI-UX
                        </div>
                        <div id="pointer" className="absolute">
                          <svg width="16.8" height="18.2" viewBox="0 0 12 13" className="fill-red-500" stroke="white" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z" />
                          </svg>
                          <span className="relative -top-1 left-3 rounded-3xl bg-primary px-2 py-1 text-xs text-white">
                            Yash
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </HighlighterItem>
            </div>
          </HighlightGroup>
        </div>
      </div>
    </section>
  );
};