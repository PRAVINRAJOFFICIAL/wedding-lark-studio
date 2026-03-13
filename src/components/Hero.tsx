const WHATSAPP_URL =
  "https://wa.me/917448889905?text=Hello%20WEDLARKWEDS%2C%20I%20want%20to%20book%20a%20wedding%20photography%20service.";

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
    {/* Subtle green gradient orb */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

    <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
      <p
        className="font-body text-sm font-medium text-primary tracking-[0.25em] uppercase mb-6 opacity-0 animate-fade-in-up"
        style={{ animationDelay: "0.1s" }}
      >
        Wedding Photography & Videography
      </p>

      <h1
        className="font-heading text-5xl sm:text-6xl md:text-7xl text-foreground mb-6 opacity-0 animate-fade-in-up"
        style={{ animationDelay: "0.3s" }}
      >
        WEDLARKWEDS
      </h1>

      <p
        className="font-body text-lg sm:text-xl text-muted-foreground mb-12 opacity-0 animate-fade-in-up"
        style={{ animationDelay: "0.6s" }}
      >
        Capturing Love Stories Forever
      </p>

      <div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up"
        style={{ animationDelay: "0.9s" }}
      >
        <a
          href="#services"
          className="px-8 py-3 bg-primary text-primary-foreground font-body text-sm font-medium rounded-lg hover:bg-secondary transition-colors duration-300"
        >
          View Services
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 border border-primary text-primary font-body text-sm font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Book via WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
