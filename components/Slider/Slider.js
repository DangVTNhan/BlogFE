import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton, DotButton } from "./SliderButton";
import { useEmblaCarousel } from "embla-carousel/react";
import Image from 'next/image';


export default function Slider({ slides }) {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
    embla
  ]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  const slideQuote = [
    "The libraries you use which are \"Open Source\" will become charged some day :))",
    "Tired of resolving Node packages version and its dependencies? Use Golang and you don't even need any packages",
    "Mongo indexing and concurrency control are sucks!!!"
  ]


  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <>
                <div className="embla__slide" key={index}>
                  <div className="embla__slide__inner" style={{ background: `url("/images/slider/media${index}.svg")` }}>
                    <div className="embla_quote">
                      {slideQuote[index]}
                      <div className="embla_quote_source">
                        - some dude (2021) - 
                      </div>
                    </div>
                  </div>
                </div>
                
              </>
            ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </>
  );
}
