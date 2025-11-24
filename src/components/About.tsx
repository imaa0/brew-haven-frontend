import { Coffee, Croissant, Wifi, Users } from "lucide-react";
import InfoCard from "./InfoCard";

const About = () => {
  const features = [
    {
      icon: Coffee,
      title: "Premium Coffee",
      description:
        "Expertly sourced beans from the world's finest coffee regions, roasted to perfection and brewed with care.",
    },
    {
      icon: Croissant,
      title: "Fresh Bakery",
      description:
        "Artisan pastries and baked goods made fresh daily using traditional recipes and quality ingredients.",
    },
    {
      icon: Wifi,
      title: "Cozy Workspace",
      description:
        "High-speed WiFi, comfortable seating, and plenty of outlets make it perfect for work or study.",
    },
    {
      icon: Users,
      title: "Friendly Staff",
      description:
        "Our passionate baristas are dedicated to creating a welcoming atmosphere and crafting your perfect cup.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Why Choose Brew Haven
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            More than just coffee—we're your neighborhood gathering place for
            connection, creativity, and community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
              }}
            >
              <InfoCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
