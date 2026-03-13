import { FadeInSection } from "@/hooks/useFadeIn";
import { Check } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/917448889905?text=Hello%20WEDLARKWEDS%2C%20I%20want%20to%20book%20a%20wedding%20photography%20service";

const packages = [
  {
    name: "Basic",
    features: ["Wedding Photography", "200+ Edited Photos", "Online Gallery", "1 Photographer"],
    highlight: false,
  },
  {
    name: "Standard",
    features: ["Wedding Photography", "Wedding Videography", "400+ Edited Photos", "Highlight Reel", "2 Photographers", "Luxury Album"],
    highlight: true,
  },
  {
    name: "Premium",
    features: ["Full Day Coverage", "Cinematic Wedding Film", "600+ Edited Photos", "Drone Coverage", "3 Photographers", "Premium Album", "Pre-Wedding Shoot"],
    highlight: false,
  },
];

const Packages = () => (
  <section id="packages" className="py-24 md:py-32 bg-secondary">
    <FadeInSection>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
            Pricing
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">
            Wedding Packages
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`p-8 border transition-all duration-500 hover:-translate-y-1 ${
                pkg.highlight
                  ? "border-gold bg-background"
                  : "border-border bg-background"
              }`}
            >
              {pkg.highlight && (
                <p className="text-gold font-body text-xs tracking-[0.3em] uppercase mb-2">
                  Most Popular
                </p>
              )}
              <h3 className="font-heading text-2xl text-foreground mb-6">{pkg.name}</h3>
              <div className="w-8 h-px bg-gold mb-6" />
              <ul className="space-y-3 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-gold flex-shrink-0" />
                    <span className="font-body text-sm text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3 font-body text-sm tracking-widest uppercase transition-all duration-500 ${
                  pkg.highlight
                    ? "bg-gold text-background hover:bg-gold-light"
                    : "border border-gold text-gold hover:bg-gold hover:text-background"
                }`}
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </FadeInSection>
  </section>
);

export default Packages;
