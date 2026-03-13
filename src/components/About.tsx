import { FadeInSection } from "@/hooks/useFadeIn";

const About = () => (
  <section id="about" className="py-24 md:py-32 bg-background">
    <FadeInSection>
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <p className="font-body text-sm font-medium text-primary tracking-[0.2em] uppercase mb-4">
          About Us
        </p>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-8">
          Our Story
        </h2>
        <div className="w-12 h-0.5 bg-primary mx-auto mb-8 rounded-full" />
        <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg">
          WEDLARKWEDS is a professional wedding photography and videography studio
          dedicated to capturing timeless memories. Our style focuses on candid moments,
          cinematic storytelling, and elegant visual presentation. We believe every wedding
          is a unique love story, and we are here to preserve it beautifully for generations
          to come.
        </p>
      </div>
    </FadeInSection>
  </section>
);

export default About;
