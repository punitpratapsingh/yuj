
import { Link } from "react-router-dom";
import { ArrowRight, Camera, Palette, Image, Lightbulb, Eye, Zap } from "lucide-react";
import { Footer } from "@/components/Footer";

const BrandPhotography = () => {
  const services = [
    {
      icon: Camera,
      title: "Product Photography",
      description: "High-quality product shots that showcase your offerings in their most compelling light."
    },
    {
      icon: Eye,
      title: "Corporate Portraits",
      description: "Professional portraits that capture the essence and personality of your team members."
    },
    {
      icon: Image,
      title: "Social Media Content",
      description: "Engaging visual content optimized for social media platforms and digital marketing."
    },
    {
      icon: Zap,
      title: "Brand Campaigns",
      description: "Comprehensive photography for advertising campaigns and brand storytelling."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Brand Essence Discovery",
      description: "We dive deep into your brand's personality, purpose, and audience to understand your unique visual identity needs."
    },
    {
      step: "02",
      title: "Concept & Planning",
      description: "From mood boards to location scouting and talent casting, we handle every pre-production detail with precision."
    },
    {
      step: "03",
      title: "Expert Photography",
      description: "Our photographers capture high-quality visuals that showcase your brand in its most compelling light."
    },
    {
      step: "04",
      title: "Post-Production Excellence",
      description: "Meticulous editing and retouching to ensure every image meets your brand standards and vision."
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
                Brand Photography
              </h1>
              <p className="font-inter text-xl text-luxury-charcoal/80 mb-8 leading-relaxed">
                At Yuj Productions, brand photography is an artful collaboration—where your brand's story meets our visual imagination to create compelling brand moments that captivate.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-luxury-gold hover:bg-luxury-gold/90 text-white px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl group"
              >
                <span>Book Your Shoot</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=500&fit=crop"
                alt="Brand photography services"
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
              Our Photography Philosophy
            </h2>
            <p className="font-inter text-xl text-luxury-charcoal/70 max-w-3xl mx-auto">
              We believe in creating not just images, but brand moments that tell your story and leave a lasting impression.
            </p>
          </div>

          <div className="space-y-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h3 className="font-playfair font-bold text-3xl text-luxury-charcoal mb-6">
                  Tailored Visual Identity
                </h3>
                <p className="font-inter text-lg text-luxury-charcoal/80 mb-6 leading-relaxed">
                  We start by diving deep into your brand's essence—its personality, purpose, and audience. Whether you're a legacy brand or a fresh startup, we tailor every photoshoot to reflect your unique visual identity.
                </p>
                <p className="font-inter text-lg text-luxury-charcoal/80 leading-relaxed">
                  From concept planning and mood boards to location scouting and talent casting, we handle the pre-production with precision, ensuring every detail aligns with your brand's aesthetics and message.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=500&h=400&fit=crop"
                  alt="Brand identity photography"
                  className="rounded-2xl shadow-xl w-full h-80 object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-luxury-pearl rounded-2xl"></div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <img
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&h=400&fit=crop"
                  alt="Professional photography"
                  className="rounded-2xl shadow-xl w-full h-80 object-cover"
                />
                <div className="absolute -top-6 -left-6 w-28 h-28 bg-luxury-champagne/30 rounded-2xl"></div>
              </div>
              <div className="order-1 lg:order-2 animate-fade-in">
                <h3 className="font-playfair font-bold text-3xl text-luxury-charcoal mb-6">
                  Expert Execution & Polish
                </h3>
                <p className="font-inter text-lg text-luxury-charcoal/80 mb-6 leading-relaxed">
                  During the shoot, our expert photographers bring your vision to life, capturing high-quality visuals that showcase your products, services, or people in their most compelling light.
                </p>
                <p className="font-inter text-lg text-luxury-charcoal/80 leading-relaxed">
                  In post-production, we meticulously edit and retouch each image to ensure it meets your brand standards—delivering a consistent and striking visual language that elevates your presence across platforms.
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
              Photography Services
            </h2>
            <p className="font-inter text-xl text-luxury-charcoal/70 max-w-3xl mx-auto">
              Comprehensive photography solutions for every aspect of your brand's visual needs.
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

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair font-bold text-4xl text-luxury-charcoal mb-6">
              Our Photography Process
            </h2>
            <p className="font-inter text-xl text-luxury-charcoal/70 max-w-3xl mx-auto">
              A meticulous approach that ensures every image reflects your brand's excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-luxury-gold rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-luxury-gold/90 transition-colors duration-300">
                  <span className="font-playfair font-bold text-xl text-white">{step.step}</span>
                </div>
                <h3 className="font-playfair font-semibold text-xl text-luxury-charcoal mb-4">
                  {step.title}
                </h3>
                <p className="font-inter text-luxury-charcoal/70 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 bg-luxury-pearl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair font-bold text-4xl text-luxury-charcoal mb-6">
              Perfect for Every Platform
            </h2>
            <p className="font-inter text-xl text-luxury-charcoal/70 max-w-3xl mx-auto">
              Whether it's for advertising, social media, lookbooks, or campaigns, our photography speaks volumes and builds lasting brand identity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Advertising Campaigns",
              "Social Media Content",
              "Brand Lookbooks",
              "Website Photography",
              "Product Catalogs",
              "Corporate Profiles",
              "Marketing Materials",
              "Digital Platforms"
            ].map((application, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-luxury-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-6 h-6 text-luxury-gold" />
                </div>
                <h3 className="font-playfair font-semibold text-lg text-luxury-charcoal">
                  {application}
                </h3>
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
              Ready to Capture Your Brand's Essence?
            </h2>
            <p className="font-inter text-xl text-white/80 mb-12 max-w-3xl mx-auto">
              Let's create photography that not only captures attention but also reflects the credibility and innovation of your brand.
            </p>
            <Link
              to="/contact"
              className="bg-luxury-gold hover:bg-luxury-gold/90 text-white px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Schedule Your Photoshoot
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BrandPhotography;
