import { FadeInSection } from "@/hooks/useFadeIn";

const WHATSAPP_URL =
  "https://wa.me/917448889905?text=Hello%20WEDLARKWEDS%2C%20I%20want%20to%20book%20a%20wedding%20photography%20service";

const BookingCTA = () => (
  <section className="py-24 md:py-32 bg-background">
    <FadeInSection>
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <div className="w-16 h-px bg-gold mx-auto mb-8" />
        <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6 leading-tight">
          Let's Capture Your Beautiful Wedding Story.
        </h2>
        <p className="font-body text-muted-foreground mb-10">
          Every love story deserves to be told beautifully. Get in touch to begin yours.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-gold text-background font-body text-sm tracking-widest uppercase hover:bg-gold-light transition-all duration-500"
        >
          Book via WhatsApp
        </a>
      </div>
    </FadeInSection>
  </section>
);

export default BookingCTA;
