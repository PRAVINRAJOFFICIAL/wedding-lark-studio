import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Packages from "@/components/Packages";
import BookingCTA from "@/components/BookingCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <Packages />
      <BookingCTA />
      <Contact />
    </main>
    <Footer />
    <FloatingWhatsApp />
  </>
);

export default Index;
