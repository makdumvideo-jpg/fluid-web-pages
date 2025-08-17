import { useEffect, useState } from "react";
import { Heart, Award, Users, Leaf } from "lucide-react";

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`fade-up ${isLoaded ? 'animate' : ''}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Story</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From humble beginnings to becoming a beloved brand, discover the journey 
              that brought the authentic taste of Fizzyco Khajur Cola to life.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">The Birth of an Idea</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                It all started with a simple vision: to create a cola that honors traditional flavors 
                while delivering the refreshing experience people love. Our founders discovered the 
                perfect combination of khajur's natural sweetness and the classic cola taste during 
                their travels through traditional markets.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                What began as a small experiment in flavor combination has grown into a brand 
                that represents authenticity, quality, and the perfect balance between tradition and innovation.
              </p>
            </div>
            
            <div className="relative">
              <div className="card-tropical p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Made with Passion</h3>
                <p className="text-muted-foreground">
                  Every bottle is crafted with love and attention to detail, ensuring 
                  the perfect taste experience in every sip.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-tropical text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Quality First</h3>
              <p className="text-muted-foreground">
                We never compromise on quality. Every ingredient is carefully selected 
                and every process is meticulously monitored.
              </p>
            </div>

            <div className="card-tropical text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Leaf className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Natural Ingredients</h3>
              <p className="text-muted-foreground">
                We believe in the power of nature. Our khajur extracts are sourced 
                from the finest natural sources.
              </p>
            </div>

            <div className="card-tropical text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Community Focus</h3>
              <p className="text-muted-foreground">
                We're committed to supporting local communities and creating 
                positive impact wherever we operate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground mb-12">
            The passionate people behind Fizzyco's success
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rajesh Kumar", role: "Founder & CEO", desc: "Visionary leader with 15 years in beverage industry" },
              { name: "Priya Sharma", role: "Head of Quality", desc: "Ensures every bottle meets our highest standards" },
              { name: "Amit Patel", role: "Master Brewer", desc: "Crafts the perfect flavor blend with traditional methods" }
            ].map((member, index) => (
              <div key={index} className="card-tropical">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;