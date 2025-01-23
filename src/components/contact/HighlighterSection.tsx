import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { HighlighterItem, HighlightGroup, Particles } from "@/components/ui/highlighter";
import { Mail } from "lucide-react";

export const HighlighterSection = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      [
        ["#pointer", { left: 200, top: 60 }, { duration: 0 }],
        ["#ui-ux", { opacity: 1 }, { duration: 0.3 }],
        ["#pointer", { left: 50, top: 102 }, { at: "+0.5", duration: 0.5, ease: "easeInOut" }],
        ["#ui-ux", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#graphic", { opacity: 1 }, { duration: 0.3 }],
        ["#pointer", { left: 224, top: 170 }, { at: "+0.5", duration: 0.5, ease: "easeInOut" }],
        ["#graphic", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#web", { opacity: 1 }, { duration: 0.3 }],
        ["#pointer", { left: 88, top: 198 }, { at: "+0.5", duration: 0.5, ease: "easeInOut" }],
        ["#web", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#branding", { opacity: 1 }, { duration: 0.3 }],
        ["#pointer", { left: 200, top: 60 }, { at: "+0.5", duration: 0.5, ease: "easeInOut" }],
        ["#branding", { opacity: 0.5 }, { at: "-0.3", duration: 0.1 }],
      ],
      { repeat: Number.POSITIVE_INFINITY }
    );
  }, [animate]);

  return (
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

                <div className="flex flex-col items-center justify-center space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold md:text-4xl">Any questions about Design?</h3>
                    <p className="mt-2 text-gray-600">Feel free to reach out!</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button>
                      Book a call
                    </Button>
                    <Button variant="outline" size="icon">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HighlighterItem>
      </div>
    </HighlightGroup>
  );
};