import { Coffee } from "lucide-react";

const Menu = () => {
  const menuCategories = [
    {
      title: "Signature Drinks",
      items: [
        { name: "Brew Haven Latte", price: "$5.50", description: "Espresso with silky steamed milk" },
        { name: "Caramel Macchiato", price: "$6.00", description: "Espresso with vanilla and caramel" },
        { name: "Mocha Supreme", price: "$6.25", description: "Rich chocolate with espresso" },
        { name: "Cold Brew", price: "$4.75", description: "Smooth 12-hour cold brew" },
      ],
    },
    {
      title: "Classic Coffee",
      items: [
        { name: "Americano", price: "$3.50", description: "Espresso with hot water" },
        { name: "Cappuccino", price: "$4.50", description: "Espresso with foamed milk" },
        { name: "Espresso", price: "$3.00", description: "Single or double shot" },
        { name: "Pour Over", price: "$4.00", description: "Hand-crafted precision brew" },
      ],
    },
    {
      title: "Fresh Bakery",
      items: [
        { name: "Butter Croissant", price: "$4.25", description: "Flaky and buttery" },
        { name: "Almond Danish", price: "$4.75", description: "Sweet almond filling" },
        { name: "Blueberry Muffin", price: "$3.50", description: "Bursting with berries" },
        { name: "Chocolate Scone", price: "$3.75", description: "Rich chocolate chunks" },
      ],
    },
  ];

  return (
    <section id="menu" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Crafted with care using premium ingredients and traditional techniques
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {menuCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-card border border-border rounded-xl p-8 hover-lift"
              style={{
                animationDelay: `${categoryIndex * 0.15}s`,
                opacity: 0,
              }}
            >
              <div className="flex items-center justify-center mb-6">
                <Coffee className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-center text-foreground mb-8">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-b border-border/50 pb-4 last:border-0">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-semibold text-foreground">{item.name}</h4>
                      <span className="text-primary font-bold ml-2">{item.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
