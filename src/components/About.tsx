import { FadeInSection } from "@/hooks/useFadeIn";

const About = () => (
  <section id="about" className="py-24 md:py-32 bg-background">
    <FadeInSection>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Image placeholder */}
          <div className="aspect-[4/5] bg-secondary border border-border flex items-center justify-center">
            <span className="text-muted-foreground font-body text-sm tracking-widest uppercase">
              Studio Photo
            </span>
          </div>

          {/* Text */}
          <div>
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
              About Us
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6 leading-tight">
              Where Elegance Meets Emotion
            </h2>
            <div className="w-12 h-px bg-gold mb-8" />
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              WEDLARKWEDS is a premium cinematic wedding photography and videography studio
              dedicated to capturing the most beautiful moments of your special day. We blend
              artistic vision with cutting-edge technology to create timeless visual narratives.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              With years of experience in luxury wedding storytelling, our team of passionate
              creatives ensures every frame reflects the depth of your love story — from
              intimate ceremonies to grand celebrations.
            </p>
          </div>
        </div>
      </div>
    </FadeInSection>
  </section>
);

export default About;
