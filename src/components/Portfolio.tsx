import { FadeInSection } from "@/hooks/useFadeIn";

const portfolioItems = [
  "Wedding Story",
  "Couple Portrait",
  "Engagement Shoot",
  "Cinematic Moments",
  "Bridal Details",
  "Reception Highlights",
];

const Portfolio = () => (
  <section id="portfolio" className="py-24 md:py-32 bg-background">
    <FadeInSection>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
            Our Work
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">
            Portfolio
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {portfolioItems.map((item, i) => (
            <div
              key={item}
              className={`group relative overflow-hidden bg-secondary border border-border cursor-pointer ${
                i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-muted-foreground font-body text-xs tracking-widest uppercase">
                  Photo
                </span>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-8 h-px bg-gold mx-auto mb-3" />
                  <p className="font-heading text-lg text-foreground">{item}</p>
                  <div className="w-8 h-px bg-gold mx-auto mt-3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeInSection>
  </section>
);

export default Portfolio;
