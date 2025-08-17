import { useEffect, useState } from "react";
import { Star, ShoppingCart, Zap, Award } from "lucide-react";

const Products = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const products = [
    {
      id: 1,
      name: "Fizzyco Khajur Cola Original",
      price: "₹45",
      size: "500ml",
      rating: 4.8,
      image: "/lovable-uploads/b9ca4137-8335-4e3e-91d9-51b44e6c357c.png",
      features: ["Natural Khajur Extract", "Zero Artificial Colors", "Refreshing Taste"],
      description: "Our signature cola with authentic khajur flavor that started it all."
    },
    {
      id: 2,
      name: "Fizzyco Khajur Cola Light",
      price: "₹40",
      size: "500ml",
      rating: 4.6,
      features: ["Low Sugar", "Natural Sweeteners", "Same Great Taste"],
      description: "All the flavor you love with 50% less sugar for health-conscious consumers."
    },
    {
      id: 3,
      name: "Fizzyco Family Pack",
      price: "₹160",
      size: "4 x 500ml",
      rating: 4.9,
      features: ["Family Size", "Best Value", "Perfect for Sharing"],
      description: "Perfect for families and gatherings. Share the joy of Fizzyco with everyone."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`fade-up ${isLoaded ? 'animate' : ''}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Products</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our range of premium cola beverages, each crafted with authentic 
              khajur extracts and traditional brewing methods.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={product.id} 
                className={`card-tropical group cursor-pointer scale-in ${isLoaded ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Product Image */}
                <div className="relative overflow-hidden rounded-xl mb-6 bg-gradient-to-br from-primary/10 to-accent/10 p-8 flex items-center justify-center min-h-[200px]">
                  {product.image ? (
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-24 h-32 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Zap className="w-12 h-12 text-primary-foreground" />
                    </div>
                  )}
                  
                  {/* Best Seller Badge */}
                  {product.id === 1 && (
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold">
                      Best Seller
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-foreground">{product.name}</h3>
                    <div className="flex items-center space-x-1 text-accent">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Award className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price and Size */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      <span className="text-sm text-muted-foreground ml-2">({product.size})</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full btn-hero flex items-center justify-center space-x-2 group">
                    <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span>Order Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Products?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every bottle represents our commitment to quality and authentic taste
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Premium Quality", desc: "Only the finest ingredients" },
              { icon: Zap, title: "Natural Energy", desc: "Authentic khajur extracts" },
              { icon: Star, title: "Great Taste", desc: "Perfect flavor balance" },
              { icon: ShoppingCart, title: "Easy Ordering", desc: "Quick delivery service" }
            ].map((feature, index) => (
              <div key={index} className="card-tropical text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Try Fizzyco?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Experience the authentic taste that thousands of customers love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-hero">
              Order Online
            </button>
            <button className="btn-ghost">
              Find Store Locations
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;