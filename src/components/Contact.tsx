import { FadeInSection } from "@/hooks/useFadeIn";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/917448889905?text=Hello%20WEDLARKWEDS%2C%20I%20want%20to%20book%20a%20wedding%20photography%20service";

const Contact = () => (
  <section id="contact" className="py-24 md:py-32 bg-secondary">
    <FadeInSection>
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
          Get In Touch
        </p>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
          Contact Us
        </h2>
        <div className="w-12 h-px bg-gold mx-auto mb-8" />

        <p className="font-heading text-xl text-foreground mb-2">WEDLARKWEDS</p>
        <p className="font-body text-muted-foreground mb-8">
          Wedding Photography & Videography
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-3 border border-gold text-gold font-body text-sm tracking-widest uppercase hover:bg-gold hover:text-background transition-all duration-500"
        >
          <MessageCircle size={18} />
          Chat on WhatsApp
        </a>
      </div>
    </FadeInSection>
  </section>
);

export default Contact;
