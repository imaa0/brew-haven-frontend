
import Button from "./Button";
import heroImage from "@/assets/hero-coffee.jpg";
import coffeeLogo from "@/assets/coffee-logo.jpg";

const Hero = () => {
  const scrollToMenu = () => {
    const menuSection = document.querySelector("#menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Brew Haven Café - Premium Coffee"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
          {/* Image Left Side */}
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-start coffee-logo-glow-wrapper">
            <img
              src={coffeeLogo}
              alt="Coffee Logo"
              className="max-w-xs md:max-w-md rounded-lg shadow-lg coffee-logo-advanced"
            />
          </div>
          {/* Text Right Side */}
          <div className="md:w-1/2 text-center md:text-left animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight">
              Brew Haven Café
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 mb-8 font-light">
              Fresh Coffee. Cozy Vibes. Good Company.
            </p>
            <div
              className="animate-scale-in inline-block"
              style={{ animationDelay: "0.3s", opacity: 0 }}
            >
              <Button
                variant="primary"
                size="large"
                onClick={scrollToMenu}
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-2xl hover:shadow-accent/50"
              >
                Explore Menu
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
