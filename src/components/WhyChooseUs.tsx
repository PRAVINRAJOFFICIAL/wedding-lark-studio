import { FadeInSection } from "@/hooks/useFadeIn";
import { Aperture, Pen, Film, Zap, ThumbsUp } from "lucide-react";

const features = [
  { icon: Aperture, title: "Professional Equipment", desc: "Industry-leading cameras and lenses" },
  { icon: Pen, title: "Creative Storytelling", desc: "Unique narratives for every couple" },
  { icon: Film, title: "Cinematic Editing", desc: "Hollywood-grade color grading and editing" },
  { icon: Zap, title: "Fast Delivery", desc: "Quick turnaround without compromising quality" },
  { icon: ThumbsUp, title: "Client Satisfaction", desc: "Hundreds of happy couples served" },
];

const WhyChooseUs = () => (
  <section className="py-24 md:py-32 bg-secondary">
    <FadeInSection>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
            Why Us
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">
            Why Choose WEDLARKWEDS
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {features.map((f) => (
            <div key={f.title} className="text-center w-40">
              <div className="w-16 h-16 mx-auto mb-4 border border-gold/30 flex items-center justify-center rounded-full">
                <f.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-heading text-sm text-foreground mb-2">{f.title}</h3>
              <p className="font-body text-xs text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </FadeInSection>
  </section>
);

export default WhyChooseUs;
