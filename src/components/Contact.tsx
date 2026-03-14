import { FadeInSection } from "@/hooks/useFadeIn";
import { MessageCircle, MapPin } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/917448889905";

const Contact = () => (
  <section id="contact" className="py-24 md:py-32 bg-background">
    <FadeInSection>
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <p className="font-body text-sm font-medium text-primary tracking-[0.2em] uppercase mb-4">
          Get In Touch
        </p>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
          Contact Us
        </h2>
        <div className="w-12 h-0.5 bg-primary mx-auto mb-8 rounded-full" />

        <p className="font-brand text-2xl text-foreground mb-2">Wedlarkweds</p>
        <p className="font-body text-muted-foreground mb-4">
          Wedding Photography & Videography
        </p>
        <div className="flex items-center justify-center gap-2 mb-10">
          <MapPin size={16} className="text-primary" />
          <p className="font-body text-sm text-muted-foreground">
            Thirunagar 3rd Stop, Madurai, Tamil Nadu, India
          </p>
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground font-body text-sm font-medium rounded-lg hover:bg-secondary transition-colors duration-300"
        >
          <MessageCircle size={20} />
          Book via WhatsApp
        </a>
      </div>
    </FadeInSection>
  </section>
);

export default Contact;
