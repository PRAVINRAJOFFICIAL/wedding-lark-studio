import { useEffect, useRef, ReactNode } from "react";

const useFadeIn = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return ref;
};

export const FadeInSection = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const ref = useFadeIn();
  return (
    <div ref={ref} className={`section-fade ${className}`}>
      {children}
    </div>
  );
};

export default useFadeIn;
