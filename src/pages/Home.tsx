import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-bounce-slow"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className={`fade-up ${isLoaded ? 'animate' : ''}`}>
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary mr-2 animate-glow" />
              <span className="text-sm font-medium text-primary">Premium Cola Experience</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Fizzyco
              </span>
              <br />
              <span className="text-foreground">Khajur Cola</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience the perfect blend of traditional khajur and refreshing cola. 
              A taste that awakens your senses and energizes your soul.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/products" className="btn-hero group">
                Explore Products
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link to="/about" className="btn-ghost">
                Our Story
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Fizzyco?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover what makes our cola extraordinary
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-tropical text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Zap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Natural Energy</h3>
              <p className="text-muted-foreground">
                Made with authentic khajur extracts for a natural energy boost that keeps you going.
              </p>
            </div>

            <div className="card-tropical text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Sparkles className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Premium Quality</h3>
              <p className="text-muted-foreground">
                Crafted with the finest ingredients and traditional methods for an unmatched taste experience.
              </p>
            </div>

            <div className="card-tropical text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <ArrowRight className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Refreshing Taste</h3>
              <p className="text-muted-foreground">
                A unique flavor profile that perfectly balances sweetness, fizz, and the rich essence of khajur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Fizzyco?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of satisfied customers who have discovered the perfect cola experience.
          </p>
          <Link to="/contact" className="btn-hero">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;