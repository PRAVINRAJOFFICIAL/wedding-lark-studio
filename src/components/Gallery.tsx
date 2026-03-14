import { useState } from "react";
import { FadeInSection } from "@/hooks/useFadeIn";
import { X } from "lucide-react";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, label: "Wedding Couple" },
  { src: gallery2, label: "Mandap Decoration" },
  { src: gallery3, label: "Wedding Moments" },
  { src: gallery4, label: "Stage Decoration" },
  { src: gallery5, label: "Pre-Wedding Shoot" },
  { src: gallery6, label: "Wedding Ceremony" },
];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-muted">
      <FadeInSection>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-body text-sm font-medium text-primary tracking-[0.2em] uppercase mb-4">
              Our Work
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              Gallery
            </h2>
            <div className="w-12 h-0.5 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-lg cursor-pointer aspect-[4/5] sm:aspect-square"
                onClick={() => setSelected(i)}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end">
                  <p className="font-body text-sm font-medium text-background px-4 pb-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {img.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-6 text-background hover:text-primary transition-colors"
            onClick={() => setSelected(null)}
          >
            <X size={28} />
          </button>
          <img
            src={images[selected].src}
            alt={images[selected].label}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
