import logo from "@/assets/logo.png";
import { MapPin } from "lucide-react";

const Footer = () => (
  <footer className="py-12 bg-background border-t border-border">
    <div className="container mx-auto px-6 text-center">
      <img src={logo} alt="WEDLARKWEDS Logo" className="h-12 w-auto mx-auto mb-2" />
      <p className="font-body text-sm text-muted-foreground mb-4">
        Wedding Photography & Videography
      </p>
      <div className="flex items-center justify-center gap-2 mb-6">
        <MapPin size={14} className="text-primary" />
        <p className="font-body text-xs text-muted-foreground">
          Thirunagar 3rd Stop, Madurai, Tamil Nadu, India
        </p>
      </div>
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
