import { FadeInSection } from "@/hooks/useFadeIn";
import { Camera, Video, Heart, Sparkles, Film, BookOpen } from "lucide-react";

const services = [
  { icon: Camera, title: "Wedding Photography", desc: "Beautiful candid and posed photography to capture every precious moment." },
  { icon: Video, title: "Wedding Videography", desc: "Professional cinematic wedding films that tell your love story." },
  { icon: Heart, title: "Pre Wedding Shoot", desc: "Romantic and creative pre-wedding sessions at stunning locations." },
  { icon: Sparkles, title: "Engagement Shoot", desc: "Celebrate your engagement with a beautifully crafted photo session." },
  { icon: Film, title: "Cinematic Wedding Film", desc: "Feature-film quality wedding videos with expert editing and grading." },
  { icon: BookOpen, title: "Album Design", desc: "Premium designed wedding albums to treasure your memories forever." },
];

const Services = () => (
  <section id="services" className="py-24 md:py-32 bg-card">
    <FadeInSection>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-sm font-medium text-primary tracking-[0.2em] uppercase mb-4">
            What We Offer
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">
            Our Services
          </h2>
          <div className="w-12 h-0.5 bg-primary mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-8 bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-400 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-green-muted flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <s.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-heading text-lg text-foreground mb-3">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </FadeInSection>
  </section>
);

export default Services;
