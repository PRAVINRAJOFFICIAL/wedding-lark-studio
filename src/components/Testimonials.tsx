import { FadeInSection } from "@/hooks/useFadeIn";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  { name: "Priya & Arjun", text: "WEDLARKWEDS captured our wedding like a beautiful dream. Every photo tells a story we'll treasure forever." },
  { name: "Meera & Karthik", text: "The cinematic wedding film was beyond our expectations. Truly a masterpiece of visual storytelling." },
  { name: "Ananya & Rohit", text: "Professional, creative, and incredibly talented. They made our pre-wedding shoot an unforgettable experience." },
  { name: "Divya & Sanjay", text: "From engagement to the grand reception, WEDLARKWEDS delivered stunning work every single time." },
];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section className="py-24 md:py-32 bg-background">
      <FadeInSection>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
              Testimonials
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground">
              What Couples Say
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mt-6" />
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
              style={{ scrollbarWidth: "none" }}
            >
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="min-w-[300px] sm:min-w-[320px] p-8 border border-border bg-secondary snap-center flex-shrink-0"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 italic">
                    "{t.text}"
                  </p>
                  <p className="font-heading text-sm text-gold">{t.name}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => scroll(-1)}
                className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-background transition-all duration-300"
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scroll(1)}
                className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-background transition-all duration-300"
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Testimonials;
