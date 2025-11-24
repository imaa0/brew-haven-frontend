import cafeInterior from "@/assets/cafe-interior.jpg";
import coffeeBrewing from "@/assets/coffee-brewing.jpg";
import bakeryDisplay from "@/assets/bakery-display.jpg";
import coffeeLineup from "@/assets/coffee-lineup.jpg";
import workspaceCozy from "@/assets/workspace-cozy.jpg";
import heroImage from "@/assets/hero-coffee.jpg";

const Gallery = () => {
  const images = [
    { src: heroImage, alt: "Artisan Latte Art", title: "Signature Latte" },
    { src: coffeeBrewing, alt: "Pour Over Coffee", title: "Fresh Brewed" },
    { src: bakeryDisplay, alt: "Fresh Bakery", title: "Daily Pastries" },
    { src: coffeeLineup, alt: "Coffee Selection", title: "Specialty Drinks" },
    { src: workspaceCozy, alt: "Cozy Workspace", title: "Work & Relax" },
    { src: cafeInterior, alt: "Café Interior", title: "Warm Atmosphere" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the warmth and craftsmanship that makes Brew Haven special
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] hover-lift"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-primary-foreground">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
