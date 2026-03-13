import logo from "@/assets/logo.jpg";

const Footer = () => (
  <footer className="py-12 bg-background border-t border-border">
    <div className="container mx-auto px-6 text-center">
      <img src={logo} alt="WEDLARKWEDS Logo" className="h-12 w-auto mx-auto mb-2" />
      <p className="font-body text-sm text-muted-foreground mb-6">
        Wedding Photography & Videography
      </p>
      <div className="w-12 h-px bg-border mx-auto mb-6" />
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
