"use client";

import { useCallback, useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "./ui/button";
import useEmblaCarousel from "embla-carousel-react";

export function ScreenshotCarousel() {
  const [isOpen, setIsOpen] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "center",
    containScroll: "trimSnaps"
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useCallback(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Button
        variant="ghost"
        className="w-full flex items-center justify-center gap-2 mb-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <>
            Hide Screenshots <ChevronUp className="h-4 w-4" />
          </>
        ) : (
          <>
            Show Screenshots <ChevronDown className="h-4 w-4" />
          </>
        )}
      </Button>

      {isOpen && (
        <>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              <div className="flex-[0_0_100%] min-w-0">
                <div className="relative w-full max-w-sm mx-auto">
                  <img
                    src="/screenshots/Screenshot_1744114726.png"
                    alt="Verse Joy App Screenshot 1"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>
              <div className="flex-[0_0_100%] min-w-0">
                <div className="relative w-full max-w-sm mx-auto">
                  <img
                    src="/screenshots/Screenshot_1744114689.png"
                    alt="Verse Joy App Screenshot 2"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>
              <div className="flex-[0_0_100%] min-w-0">
                <div className="relative w-full max-w-sm mx-auto">
                  <img
                    src="/screenshots/Screenshot_1744114694.png"
                    alt="Verse Joy App Screenshot 3"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
            onClick={scrollNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
          <div className="flex justify-center gap-2 mt-4">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === selectedIndex ? "bg-primary" : "bg-muted"
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
} 