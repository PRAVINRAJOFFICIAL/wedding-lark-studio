import { FadeInSection } from "@/hooks/useFadeIn";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { name: "Priya & Arjun", text: "WEDLARKWEDS beautifully captured our wedding memories. The photos and videos were amazing." },
  { name: "Meera & Karthik", text: "The cinematic wedding film was beyond our expectations. Truly professional and creative work." },
  { name: "Ananya & Rohit", text: "From start to finish, the team was incredible. Our album is something we will cherish forever." },
  { name: "Divya & Sanjay", text: "They have a wonderful eye for detail. Every candid moment was captured perfectly." },
];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-card">
      <FadeInSection>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-body text-sm font-medium text-primary tracking-[0.2em] uppercase mb-4">
              Reviews
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground">
              What Couples Say
            </h2>
            <div className="w-12 h-0.5 bg-primary mx-auto mt-6 rounded-full" />
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
              style={{ scrollbarWidth: "none" }}
            >
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="min-w-[300px] sm:min-w-[340px] p-8 bg-background rounded-xl border border-border snap-center flex-shrink-0"
                >
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                    "{t.text}"
                  </p>
                  <p className="font-body text-sm font-semibold text-foreground">{t.name}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-3 mt-8">
              <button
                onClick={() => scroll(-1)}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scroll(1)}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
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
