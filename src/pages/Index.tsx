import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Trigger animations on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(
      ".animate-fade-in-up[style*='opacity: 0']"
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Index;
