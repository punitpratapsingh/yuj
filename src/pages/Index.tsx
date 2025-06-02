
import { Link } from "react-router-dom";
import { ArrowRight, Camera, Film, Users, Megaphone, TrendingUp, Star, Award, Globe } from "lucide-react";
import { Footer } from "@/components/Footer";
import { InteractiveHero } from "@/components/InteractiveHero";

const Index = () => {
  const services = [
    {
      icon: Megaphone,
      title: "Advertising",
      description: "Meaningful storytelling that connects your brand with the right audience.",
      link: "/services/advertising",
      color: "hover:bg-red-50 hover:border-red-200",
      iconColor: "text-red-600"
    },
    {
      icon: Camera,
      title: "Brand Photography",
      description: "Artful collaboration where your brand's story meets our visual imagination.",
      link: "/services/brand-photography", 
      color: "hover:bg-blue-50 hover:border-blue-200",
      iconColor: "text-blue-600"
    },
    {
      icon: Film,
      title: "Corporate Films",
      description: "Cinematic corporate films that inspire, inform, and engage.",
      link: "/services/corporate-films",
      color: "hover:bg-green-50 hover:border-green-200", 
      iconColor: "text-green-600"
    },
    {
      icon: Users,
      title: "Celebrity Management",
      description: "Connecting your brand with personalities who amplify your message.",
      link: "/services/celebrity-management",
      color: "hover:bg-purple-50 hover:border-purple-200",
      iconColor: "text-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Brand Consultancy",
      description: "Strategic guidance to shape your brand's identity and future growth.",
      link: "/services/brand-consultancy",
      color: "hover:bg-yellow-50 hover:border-yellow-200",
      iconColor: "text-yellow-600"
    }
  ];

  const stats = [
    { number: "100+", label: "Projects Completed", icon: Award },
    { number: "80+", label: "Brand Partners", icon: Users },
    { number: "Pan-India", label: "Presence", icon: Globe },
    { number: "5+", label: "Years Experience", icon: Star }
  ];

  return (
    <div className="min-h-screen">
      {/* Interactive Hero Section */}
      <InteractiveHero />

      {/* Animated Stats Section */}
      <section className="py-16 bg-white border-b border-luxury-platinum">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-luxury-gold/20 group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-luxury-gold group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="font-playfair font-bold text-2xl md:text-3xl text-luxury-charcoal mb-2 group-hover:text-luxury-gold transition-colors duration-300">
                  {stat.number}
                </h3>
                <p className="font-inter text-luxury-charcoal/70 group-hover:text-luxury-charcoal transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Services Section */}
      <section className="py-24 bg-luxury-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-luxury-charcoal mb-6">
              Our <span className="text-luxury-gold">Creative</span> Services
            </h2>
            <p className="font-inter text-xl text-luxury-charcoal/70 max-w-3xl mx-auto">
              Comprehensive solutions that transform your brand ideas into powerful visual narratives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className={`group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent ${service.color} transform hover:scale-105`}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-7 h-7 ${service.iconColor} group-hover:rotate-6 transition-all duration-300`} />
                  </div>
                  <h3 className="font-playfair font-semibold text-2xl text-luxury-charcoal group-hover:text-luxury-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                
                <p className="font-inter text-luxury-charcoal/80 mb-6 leading-relaxed group-hover:text-luxury-charcoal transition-colors duration-300">
                  {service.description}
                </p>

                <div className="flex items-center text-luxury-gold opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <span className="font-inter font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="animate-fade-in">
                <h2 className="font-playfair font-bold text-4xl md:text-5xl text-luxury-charcoal mb-6">
                  Why Choose <span className="text-luxury-gold">Yuj Productions</span>?
                </h2>
                <p className="font-inter text-xl text-luxury-charcoal/80 leading-relaxed">
                  We don't just create content—we build lasting impressions through emotionally rich and culturally resonant storytelling.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { title: "Regional Expertise", desc: "Deep understanding of local cultures and languages" },
                  { title: "Creative Excellence", desc: "Award-winning team of directors, writers, and artists" },
                  { title: "End-to-End Solutions", desc: "From concept to delivery, we handle everything" },
                  { title: "Proven Track Record", desc: "100+ successful projects with measurable results" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group cursor-pointer">
                    <div className="w-3 h-3 bg-luxury-gold rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                    <div>
                      <h3 className="font-playfair font-semibold text-xl text-luxury-charcoal mb-2 group-hover:text-luxury-gold transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="font-inter text-luxury-charcoal/70 group-hover:text-luxury-charcoal transition-colors duration-300">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center space-x-2 bg-luxury-gold hover:bg-luxury-gold/90 text-white px-6 py-3 rounded-lg font-inter font-semibold transition-all duration-300 transform hover:scale-105 group"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=500&fit=crop"
                alt="Why choose us"
                className="rounded-3xl shadow-2xl w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-luxury-gold/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-luxury-gold/20 rounded-3xl group-hover:scale-110 transition-transform duration-500"></div>
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-luxury-champagne/30 rounded-3xl group-hover:scale-110 transition-transform duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive CTA Section */}
      <section className="py-24 bg-luxury-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-charcoal to-luxury-charcoal/90"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-luxury-gold/10 rounded-full animate-elegant-float"></div>
        <div className="absolute bottom-16 right-16 w-16 h-16 bg-luxury-champagne/10 rounded-full animate-elegant-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-white mb-6">
              Ready to Create Something <span className="text-luxury-gold">Extraordinary</span>?
            </h2>
            <p className="font-inter text-xl text-white/80 mb-12 max-w-3xl mx-auto">
              Let's transform your brand ideas into powerful visual narratives that captivate, connect, and convert.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/contact"
                className="bg-luxury-gold hover:bg-luxury-gold/90 text-white px-8 py-4 rounded-full font-inter font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Start Your Project
              </Link>
              <Link
                to="/services"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-inter font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
