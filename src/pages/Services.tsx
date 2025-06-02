
import { Link } from "react-router-dom";
import { ArrowRight, Camera, Film, Users, Megaphone, TrendingUp } from "lucide-react";
import { Footer } from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: Megaphone,
      title: "Advertising",
      description: "Meaningful storytelling that connects your brand with the right audience at the right time through innovative campaigns.",
      features: ["TV Commercials", "Digital Campaigns", "Regional Content", "Multi-channel Strategies"],
      link: "/services/advertising",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=500&h=300&fit=crop"
    },
    {
      icon: Camera,
      title: "Brand Photography",
      description: "Artful collaboration where your brand's story meets our visual imagination to create compelling brand moments.",
      features: ["Product Photography", "Corporate Portraits", "Social Media Content", "Brand Campaigns"],
      link: "/services/brand-photography",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=300&fit=crop"
    },
    {
      icon: Film,
      title: "Corporate Films",
      description: "Cinematic corporate films that inspire, inform, and engage, reflecting your brand's credibility and innovation.",
      features: ["Company Profiles", "Leadership Messages", "Training Videos", "Brand Stories"],
      link: "/services/corporate-films",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&h=300&fit=crop"
    },
    {
      icon: Users,
      title: "Celebrity Management",
      description: "Connecting your brand with personalities who amplify your message and align with your brand values.",
      features: ["Talent Sourcing", "Contract Negotiations", "Campaign Coordination", "Brand Alignment"],
      link: "/services/celebrity-management",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=500&h=300&fit=crop"
    },
    {
      icon: TrendingUp,
      title: "Brand Consultancy",
      description: "Strategic guidance to shape your brand's identity, positioning, and future growth in an evolving market.",
      features: ["Brand Strategy", "Market Research", "Identity Development", "Communication Planning"],
      link: "/services/brand-consultancy",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=500&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 luxury-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="font-playfair font-bold text-5xl md:text-6xl text-luxury-charcoal mb-6">
              Our Services
            </h1>
            <p className="font-inter text-xl text-luxury-charcoal/80 max-w-4xl mx-auto leading-relaxed">
              Comprehensive creative solutions that transform your brand ideas into powerful visual narratives, from advertising to brand consultancy.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} animate-fade-in`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-luxury-gold/10 rounded-2xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-luxury-gold" />
                    </div>
                    <h2 className="font-playfair font-bold text-4xl text-luxury-charcoal">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="font-inter text-lg text-luxury-charcoal/80 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="font-playfair font-semibold text-xl text-luxury-charcoal mb-4">Key Offerings:</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                          <span className="font-inter text-luxury-charcoal/70">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={service.link}
                    className="inline-flex items-center space-x-2 bg-luxury-gold hover:bg-luxury-gold/90 text-white px-6 py-3 rounded-lg font-inter font-semibold transition-all duration-300 transform hover:scale-105 group"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} relative`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                  />
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-luxury-gold/20 rounded-2xl"></div>
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-luxury-champagne/30 rounded-2xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-luxury-pearl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-luxury-charcoal mb-6">
              Our Creative Process
            </h2>
            <p className="font-inter text-xl text-luxury-charcoal/70 max-w-3xl mx-auto">
              A collaborative approach that ensures every project delivers exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your brand, audience, and objectives through deep research and insights." },
              { step: "02", title: "Strategy", description: "Developing creative concepts and strategic direction aligned with your goals." },
              { step: "03", title: "Creation", description: "Bringing ideas to life through expert production, direction, and craftsmanship." },
              { step: "04", title: "Delivery", description: "Delivering polished content that exceeds expectations and drives results." }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-luxury-gold rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-luxury-gold/90 transition-colors duration-300">
                  <span className="font-playfair font-bold text-2xl text-white">{process.step}</span>
                </div>
                <h3 className="font-playfair font-semibold text-2xl text-luxury-charcoal mb-4">
                  {process.title}
                </h3>
                <p className="font-inter text-luxury-charcoal/70 leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-luxury-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-white mb-6">
              Ready to Elevate Your Brand?
            </h2>
            <p className="font-inter text-xl text-white/80 mb-12 max-w-3xl mx-auto">
              Let's discuss how our services can transform your brand's presence and create lasting impact with your audience.
            </p>
            <Link
              to="/contact"
              className="bg-luxury-gold hover:bg-luxury-gold/90 text-white px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
