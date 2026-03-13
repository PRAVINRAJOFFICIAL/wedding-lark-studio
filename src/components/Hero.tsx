const WHATSAPP_URL =
  "https://wa.me/917448889905?text=Hello%20WEDLARKWEDS%2C%20I%20want%20to%20book%20a%20wedding%20photography%20service";

const Hero = () => (
  <section
    id="hero"
    className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden"
  >
    {/* Subtle radial overlay */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(38_38%_60%/0.06)_0%,_transparent_70%)]" />

    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
      {/* Decorative line */}
      <div className="w-16 h-px bg-gold mx-auto mb-8 animate-fade-in" />

      <h1
        className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.2em] text-foreground mb-6 animate-fade-in-up"
        style={{ animationDelay: "0.2s" }}
      >
        WEDLARKWEDS
      </h1>

      <p
        className="font-body text-lg sm:text-xl tracking-[0.15em] uppercase text-gold opacity-0 animate-fade-in-up"
        style={{ animationDelay: "0.6s" }}
      >
        Capturing Love Stories Forever
      </p>

      <div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 opacity-0 animate-fade-in-up"
        style={{ animationDelay: "1s" }}
      >
        <a
          href="#portfolio"
          className="px-8 py-3 border border-gold text-gold font-body text-sm tracking-widest uppercase hover:bg-gold hover:text-background transition-all duration-500"
        >
          View Portfolio
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-gold text-background font-body text-sm tracking-widest uppercase hover:bg-gold-light transition-all duration-500"
        >
          Book via WhatsApp
        </a>
      </div>

      {/* Bottom decorative line */}
      <div
        className="w-16 h-px bg-gold mx-auto mt-16 opacity-0 animate-fade-in"
        style={{ animationDelay: "1.4s" }}
      />
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.8s" }}>
      <div className="w-px h-12 bg-gold/40 mx-auto animate-pulse" />
    </div>
  </section>
);

export default Hero;
