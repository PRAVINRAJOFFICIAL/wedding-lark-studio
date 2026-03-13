import { FadeInSection } from "@/hooks/useFadeIn";
import { Aperture, Lightbulb, Film, Zap, ThumbsUp } from "lucide-react";

const features = [
  { icon: Aperture, title: "Professional Equipment", desc: "Industry-leading cameras and lenses for stunning results" },
  { icon: Lightbulb, title: "Creative Direction", desc: "Unique artistic vision tailored to your story" },
  { icon: Film, title: "Cinematic Editing", desc: "Professional color grading and post-production" },
  { icon: Zap, title: "Fast Delivery", desc: "Quick turnaround without compromising quality" },
  { icon: ThumbsUp, title: "Client Satisfaction", desc: "Hundreds of happy couples and five-star reviews" },
];

const WhyChooseUs = () => (
  <section id="whyus" className="py-24 md:py-32 bg-background">
    <FadeInSection>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-sm font-medium text-primary tracking-[0.2em] uppercase mb-4">
            Why Us
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">
            Why Choose WEDLARKWEDS
          </h2>
          <div className="w-12 h-0.5 bg-primary mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {features.map((f) => (
            <div key={f.title} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-muted flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <f.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-heading text-sm text-foreground mb-2">{f.title}</h3>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </FadeInSection>
  </section>
);

export default WhyChooseUs;
