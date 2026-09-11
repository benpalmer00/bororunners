"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { ROTMMonth, ROTMSlide } from "@/lib/rotm";
import { getCalendarMonthId, getMonthLabel, getPreviousMonths, getWinner } from "@/lib/rotm";

type ROTMBrowserProps = {
  months: ROTMMonth[];
  initialMonthId?: string;
};

export default function ROTMBrowser({ months, initialMonthId }: ROTMBrowserProps) {
  const calendarId = getCalendarMonthId();
  const [selectedId, setSelectedId] = useState(initialMonthId || months[0]?.id);
  const [index, setIndex] = useState(0);

  const selected = months.find((entry) => entry.id === selectedId) || months[0];
  const slides = selected?.slides ?? [];
  const winner = selected ? getWinner(selected) : undefined;
  const previous = getPreviousMonths(selectedId);
  const isThisMonth = selectedId === calendarId;

  useEffect(() => {
    const nextSlides = months.find((entry) => entry.id === selectedId)?.slides ?? [];
    const winnerIndex = nextSlides.findIndex((slide) => slide.isWinner);
    setIndex(winnerIndex >= 0 ? winnerIndex : 0);
  }, [selectedId, months]);

  useEffect(() => {
    if (slides.length < 2) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  function go(step: number) {
    if (!slides.length) return;
    setIndex((current) => (current + step + slides.length) % slides.length);
  }

  function selectMonth(id: string) {
    setSelectedId(id);
  }

  return (
    <div>
      <nav className="flex flex-wrap justify-center gap-2 mb-12" aria-label="Runner of the Month by month">
        {months.map((entry) => {
          const active = entry.id === selectedId;
          const hasSlides = entry.slides.length > 0;
          return (
            <button
              key={entry.id}
              type="button"
              onClick={() => selectMonth(entry.id)}
              className={`px-4 py-2 rounded-full font-display text-sm font-bold uppercase tracking-wider transition-colors ${
                active
                  ? "bg-brand-red text-white"
                  : hasSlides
                  ? "bg-white text-brand-black border border-brand-gray-200 hover:border-brand-red hover:text-brand-red"
                  : "bg-brand-gray-100 text-brand-gray-400 border border-transparent"
              }`}
            >
              {entry.month}
              {entry.id === calendarId && (
                <span className={`ml-2 text-[10px] tracking-wide ${active ? "text-red-100" : "text-brand-red"}`}>
                  Now
                </span>
              )}
            </button>
          );
        })}
      </nav>

      <section>
        <div className="text-center mb-8">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-brand-red mb-2">
            {isThisMonth ? "This Month" : winner ? "Winner" : "Nominations"}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold uppercase text-brand-black">
            {selected ? getMonthLabel(selected) : "Runner of the Month"}
          </h2>
          {winner && (
            <p className="mt-3 text-lg text-brand-gray-600">
              Runner of the Month: <span className="font-semibold text-brand-black">{winner.person}</span>
            </p>
          )}
        </div>

        {slides.length > 0 ? (
          <Carousel slides={slides} index={index} onIndexChange={setIndex} onStep={go} />
        ) : (
          <div className="max-w-3xl mx-auto rounded-2xl border-2 border-dashed border-brand-gray-200 bg-white py-20 px-8 text-center">
            <p className="font-display text-2xl font-bold uppercase text-brand-black mb-3">Coming soon</p>
            <p className="text-brand-gray-500 max-w-md mx-auto">
              {selected ? getMonthLabel(selected) : "This month"}&apos;s nominations will appear here once they
              are added to the JSON file.
            </p>
          </div>
        )}
      </section>

      {previous.length > 0 && (
        <section className="mt-20">
          <h3 className="font-display text-2xl font-bold uppercase text-brand-black text-center mb-8">
            Previous Months
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {previous.map((entry) => {
              const cover = entry.slides[0];
              const monthWinner = getWinner(entry);
              return (
                <button
                  key={entry.id}
                  type="button"
                  onClick={() => selectMonth(entry.id)}
                  className="group text-left bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative aspect-[1024/723]">
                    {cover && (
                      <Image
                        src={cover.src}
                        alt={cover.alt}
                        fill
                        className="object-cover group-hover:scale-[1.02] transition-transform"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                    )}
                  </div>
                  <div className="p-4">
                    <p className="font-display font-bold uppercase text-brand-black">{getMonthLabel(entry)}</p>
                    <p className="text-sm text-brand-red">
                      {monthWinner ? monthWinner.person : `${entry.slides.filter((s) => s.person).length} nominations`}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}

function Carousel({
  slides,
  index,
  onIndexChange,
  onStep,
}: {
  slides: ROTMSlide[];
  index: number;
  onIndexChange: (index: number) => void;
  onStep: (step: number) => void;
}) {
  const current = slides[index];
  const people = slides.filter((slide) => slide.person);
  const startX = useRef<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto">
      <div
        className="relative aspect-[1024/723] rounded-2xl overflow-hidden shadow-2xl bg-brand-gray-100"
        onTouchStart={(event) => {
          startX.current = event.touches[0].clientX;
        }}
        onTouchEnd={(event) => {
          if (startX.current == null) return;
          const delta = event.changedTouches[0].clientX - startX.current;
          if (delta > 40) onStep(-1);
          if (delta < -40) onStep(1);
          startX.current = null;
        }}
      >
        <Image
          key={current.id}
          src={current.src}
          alt={current.alt}
          fill
          className="object-cover"
          sizes="(max-width: 896px) 100vw, 896px"
          priority
        />

        {current.isWinner && (
          <div className="absolute top-4 left-4 bg-brand-red text-white px-4 py-2 rounded-lg shadow-lg">
            <p className="font-display font-bold text-sm uppercase">Winner</p>
            <p className="text-xs text-red-100">{current.person}</p>
          </div>
        )}

        {slides.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => onStep(-1)}
              aria-label="Previous nomination"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-brand-black/70 text-white hover:bg-brand-red transition-colors"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => onStep(1)}
              aria-label="Next nomination"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-brand-black/70 text-white hover:bg-brand-red transition-colors"
            >
              ›
            </button>
          </>
        )}
      </div>

      <div className="mt-4 text-center">
        <p className="font-display text-lg font-bold uppercase text-brand-black">
          {current.person || "Nominations"}
        </p>
        <p className="text-sm text-brand-gray-500">
          {index + 1} of {slides.length}
        </p>
      </div>

      {slides.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => onIndexChange(i)}
              aria-label={slide.person || slide.alt}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-8 bg-brand-red" : slide.isWinner ? "w-2.5 bg-brand-red/50" : "w-2.5 bg-brand-gray-300"
              }`}
            />
          ))}
        </div>
      )}

      {people.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {people.map((slide) => {
            const slideIndex = slides.findIndex((item) => item.id === slide.id);
            const active = slideIndex === index;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => onIndexChange(slideIndex)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  slide.isWinner
                    ? active
                      ? "bg-brand-red text-white"
                      : "bg-brand-red-light text-brand-red"
                    : active
                    ? "bg-brand-black text-white"
                    : "bg-white border border-brand-gray-200 text-brand-gray-600 hover:border-brand-red"
                }`}
              >
                {slide.isWinner ? `★ ${slide.person}` : slide.person}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
