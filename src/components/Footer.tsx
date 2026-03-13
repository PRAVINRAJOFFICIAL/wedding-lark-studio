const Footer = () => (
  <footer className="py-12 bg-background border-t border-border">
    <div className="container mx-auto px-6 text-center">
      <p className="font-heading text-xl tracking-[0.2em] text-gold mb-2">
        WEDLARKWEDS
      </p>
      <p className="font-body text-sm text-muted-foreground mb-6">
        Wedding Photography & Videography Studio
      </p>
      <div className="w-12 h-px bg-gold/30 mx-auto mb-6" />
      <p className="font-body text-xs text-muted-foreground mb-1">
        © {new Date().getFullYear()} WEDLARKWEDS. All rights reserved.
      </p>
      <p className="font-body text-xs text-muted-foreground">
        Designed by PRAVINRAJ
      </p>
    </div>
  </footer>
);

export default Footer;
