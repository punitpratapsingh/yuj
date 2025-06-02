
import { Link } from "react-router-dom";
import { ArrowRight, Star, Users, Handshake, Target, Zap, Heart } from "lucide-react";
import { Footer } from "@/components/Footer";

const CelebrityManagement = () => {
  const services = [
    {
      icon: Target,
      title: "Talent Sourcing",
      description: "Identifying and recommending the perfect celebrity or influencer who resonates with your target market."
    },
    {
      icon: Handshake,
      title: "Contract Negotiations",
      description: "Handling all aspects of engagement from initial discussions to final contract negotiations with transparency."
    },
    {
      icon: Users,
      title: "Campaign Coordination",
      description: "Complete coordination and execution support throughout the collaboration to ensure seamless delivery."
    },
    {
      icon: Heart,
      title: "Brand Alignment",
      description: "Ensuring the celebrity's public persona genuinely aligns with your brand values and audience expectations."
    }
  ];

  const benefits = [
    {
      title: "Enhanced Brand Visibility",
      description: "Celebrity endorsements significantly amplify your brand's reach and recognition in the market."
    },
    {
      title: "Increased Credibility",
      description: "Association with respected personalities enhances your brand's trustworthiness and reputation."
    },
    {
      title: "Emotional Connection",
      description: "Celebrities help create deeper emotional bonds between your brand and your target audience."
    },
    {
      title: "Market Penetration",
      description: "Leverage celebrity fan bases to enter new markets and demographics effectively."
    }
  ];

  const celebrities = [
    {
      name: "Neena Gupta",
      category: "Film Industry",
      description: "Renowned actress with exceptional versatility and authentic screen presence."
    },
    {
      name: "Regional Icons",
      category: "Local Influencers",
      description: "Connecting with regional celebrities who understand local culture and audience."
    },
    {
      name: "Television Stars",
      category: "TV Personalities",
      description: "Popular television actors with strong household recognition and appeal."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 luxury-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="font-playfair font-bold text-5xl md:text-6xl text-luxury-charcoal mb-6">
                Celebrity Management
              </h1>
              <p className="font-inter text-xl text-luxury-charcoal/80 mb-8 leading-relaxed">
                At Yuj Productions, we believe that the right face can elevate your brand to a whole new level. Our celebrity management services connect your brand with personalities who amplify your message authentically.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-luxury-gold hover:bg-luxury-gold/90 text-white px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl group"
              >
                <span>Find Your Celebrity</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=500&fit=crop"
                alt="Celebrity management services"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-luxury-gold/20 rounded-2xl"></div>
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-luxury-champagne/30 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-luxury-charcoal mb-6">
              Our Celebrity Partnership Philosophy
            </h2>
            <p className="font-inter text-xl text-luxury-charcoal/70 max-w-3xl mx-auto">
              We create authentic partnerships that feel natural and powerful, enhancing your brand's connection with audiences.
            </p>
          </div>

          <div className="space-y-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h3 className="font-playfair font-bold text-3xl text-luxury-charcoal mb-6">
                  Strategic Celebrity Selection
                </h3>
                <p className="font-inter text-lg text-luxury-charcoal/80 mb-6 leading-relaxed">
                  We begin by identifying and recommending the perfect celebrity or influencer—someone whose public persona resonates with your target market and enhances your brand positioning. Whether it's a film star, television icon, or a regional influencer, we help you choose talent that feels authentic and impactful.
                </p>
                <p className="font-inter text-lg text-luxury-charcoal/80 leading-relaxed">
                  Our deep understanding of the entertainment industry and regional markets allows us to match brands with celebrities who genuinely align with their values and audience expectations.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=500&h=400&fit=crop"
                  alt="Celebrity selection process"
                  className="rounded-2xl shadow-xl w-full h-80 object-cover"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <img
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=400&fit=crop"
                  alt="Professional management"
                  className="rounded-2xl shadow-xl w-full h-80 object-cover"
                />
              </div>
              <div className="order-1 lg:order-2 animate-fade-in">
                <h3 className="font-playfair font-bold text-3xl text-luxury-charcoal mb-6">
                  Seamless Execution & Management
                </h3>
                <p className="font-inter text-lg text-luxury-charcoal/80 mb-6 leading-relaxed">
                  From initial discussions and contract negotiations to coordination and execution, our team handles every aspect of the engagement seamlessly. We work closely with both the brand and the celebrity to ensure clarity, transparency, and alignment throughout the collaboration.
                </p>
                <p className="font-inter text-lg text-luxury-charcoal/80 leading-relaxed">
                  During the campaign or shoot, we guide and support the talent to ensure their association feels natural and powerful—enhancing your brand's visibility, credibility, and emotional connection with your audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-luxury-pearl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair font-bold text-4xl text-luxury-charcoal mb-6">
              Our Management Services
            </h2>
            <p className="font-inter text-xl text-luxury-charcoal/70 max-w-3xl mx-auto">
              Comprehensive celebrity management that covers every aspect of brand-celebrity partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-luxury-gold/10 rounded-xl flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-luxury-gold" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-2xl text-luxury-charcoal mb-3">
                      {service.title}
                    </h3>
                    <p className="font-inter text-luxury-charcoal/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Celebrity Network */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair font-bold text-4xl text-luxury-charcoal mb-6">
              Our Celebrity Network
            </h2>
            <p className="font-inter text-xl text-luxury-charcoal/70 max-w-3xl mx-auto">
              With experience managing collaborations with industry-leading celebrities, we bring professionalism and creativity to every partnership.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {celebrities.map((celebrity, index) => (
              <div key={index} className="bg-luxury-cream rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 elegant-hover text-center">
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-luxury-gold" />
                </div>
                <h3 className="font-playfair font-semibold text-2xl text-luxury-charcoal mb-2">
                  {celebrity.name}
                </h3>
                <p className="font-inter text-luxury-gold font-medium mb-3">
                  {celebrity.category}
                </p>
                <p className="font-inter text-luxury-charcoal/70 leading-relaxed">
                  {celebrity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-luxury-pearl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair font-bold text-4xl text-luxury-charcoal mb-6">
              Benefits of Celebrity Partnerships
            </h2>
            <p className="font-inter text-xl text-luxury-charcoal/70 max-w-3xl mx-auto">
              When the right talent meets the right brand, magic happens.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-luxury-gold/10 rounded-xl flex items-center justify-center mt-1">
                    <Zap className="w-6 h-6 text-luxury-gold" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-xl text-luxury-charcoal mb-3">
                      {benefit.title}
                    </h3>
                    <p className="font-inter text-luxury-charcoal/70 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair font-bold text-4xl text-luxury-charcoal mb-6">
              Proven Track Record
            </h2>
            <p className="font-inter text-xl text-luxury-charcoal/70 max-w-3xl mx-auto">
              Our experience includes successful collaborations with industry-leading celebrities like Neena Gupta and many others.
            </p>
          </div>

          <div className="bg-luxury-cream rounded-3xl p-12 text-center">
            <div className="w-24 h-24 bg-luxury-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Star className="w-12 h-12 text-luxury-gold" />
            </div>
            <h3 className="font-playfair font-bold text-3xl text-luxury-charcoal mb-6">
              Experience with Industry Leaders
            </h3>
            <p className="font-inter text-lg text-luxury-charcoal/80 max-w-2xl mx-auto leading-relaxed">
              With experience managing collaborations with industry-leading celebrities like Neena Gupta and more, Yuj Productions brings professionalism, discretion, and creativity to every partnership.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-luxury-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-white mb-6">
              Ready to Find Your Perfect Celebrity Match?
            </h2>
            <p className="font-inter text-xl text-white/80 mb-12 max-w-3xl mx-auto">
              Let us connect your brand with the right celebrity who will amplify your message and create lasting impact with your audience.
            </p>
            <Link
              to="/contact"
              className="bg-luxury-gold hover:bg-luxury-gold/90 text-white px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Start Celebrity Partnership
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CelebrityManagement;
