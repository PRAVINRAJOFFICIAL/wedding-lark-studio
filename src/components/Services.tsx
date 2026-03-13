import { FadeInSection } from "@/hooks/useFadeIn";
import { Camera, Video, Heart, Sparkles, Film, BookOpen } from "lucide-react";

const services = [
  { icon: Camera, title: "Wedding Photography", desc: "Timeless images that capture every emotion and detail of your wedding day." },
  { icon: Video, title: "Wedding Videography", desc: "Cinematic wedding films that bring your love story to life." },
  { icon: Heart, title: "Pre Wedding Shoot", desc: "Romantic pre-wedding sessions at stunning locations." },
  { icon: Sparkles, title: "Engagement Shoot", desc: "Celebrate your engagement with a beautifully crafted photo session." },
  { icon: Film, title: "Cinematic Wedding Film", desc: "Feature-film quality wedding videos with professional editing." },
  { icon: BookOpen, title: "Luxury Album Design", desc: "Handcrafted premium wedding albums to cherish forever." },
];

const Services = () => (
  <section id="services" className="py-24 md:py-32 bg-secondary">
    <FadeInSection>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
            What We Offer
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">
            Premium Services
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-8 bg-background border border-border hover:border-gold/40 transition-all duration-500 hover:-translate-y-1"
            >
              <s.icon className="w-8 h-8 text-gold mb-6 group-hover:scale-110 transition-transform duration-300" />
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
