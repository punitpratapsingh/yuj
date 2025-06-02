
import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Target, TrendingUp, Search, Palette, MessageSquare } from "lucide-react";
import { Footer } from "@/components/Footer";

const BrandConsultancy = () => {
  const services = [
    {
      icon: Target,
      title: "Brand Positioning & Narrative",
      description: "Defining your unique position in the market and crafting compelling brand stories that resonate."
    },
    {
      icon: Search,
      title: "Market & Consumer Research",
      description: "Deep insights into market trends, consumer behavior, and competitive landscapes to inform strategy."
    },
    {
      icon: Palette,
      title: "Visual & Verbal Identity Development",
      description: "Creating cohesive brand identities that communicate your values across all touchpoints."
    },
    {
      icon: TrendingUp,
      title: "Competitor & Industry Analysis",
      description: "Comprehensive analysis of your competitive environment and industry positioning opportunities."
    },
    {
      icon: MessageSquare,
      title: "Communication Strategy & Media Planning",
      description: "Strategic communication frameworks that amplify your brand message effectively."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Brand Audit",
      description: "Comprehensive analysis of your brand's current strengths, weaknesses, opportunities, and threats in the market."
    },
    {
      step: "02",
      title: "Strategic Planning",
      description: "Developing custom roadmaps that leverage your brand's unique assets to achieve long-term business goals."
    },
    {
      step: "03",
      title: "Identity Development",
      description: "Creating or refining visual and verbal brand elements that authentically represent your values and vision."
    },
    {
      step: "04",
      title: "Implementation",
      description: "Guiding the execution of brand strategy across all channels with ongoing support and optimization."
    }
  ];

  const clients = [
    {
      category: "Startups",
      description: "Helping new ventures establish strong brand foundations from day one."
    },
    {
      category: "Legacy Brands",
      description: "Revitalizing established brands for modern markets while preserving core values."
    },
    {
      category: "Government Bodies",
      description: "Supporting public sector organizations in communicating effectively with citizens."
    },
    {
      category: "Lifestyle Labels",
      description: "Positioning lifestyle brands to connect authentically with target demographics."
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
                Brand Consultancy
              </h1>
              <p className="font-inter text-xl text-luxury-charcoal/80 mb-8 leading-relaxed">
                At Yuj Productions, we go beyond creating compelling visuals—we help shape your brand's identity, strategy, and future, empowering it to thrive in an ever-evolving market.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-luxury-gold hover:bg-luxury-gold/90 text-white px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl group"
              >
                <span>Transform Your Brand</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=500&fit=crop"
                alt="Brand consultancy services"
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
              Our Consultancy Philosophy
            </h2>
            <p className="font-inter text-xl text-luxury-charcoal/70 max-w-3xl mx-auto">
              Bringing clarity, purpose, and direction to your brand through strategic thinking and creative execution.
            </p>
          </div>

          <div className="space-y-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h3 className="font-playfair font-bold text-3xl text-luxury-charcoal mb-6">
                  Strategic Brand Foundation
                </h3>
                <p className="font-inter text-lg text-luxury-charcoal/80 mb-6 leading-relaxed">
                  We begin with a comprehensive audit of your brand—analyzing its strengths, weaknesses, opportunities, and threats. This strategic groundwork helps us understand where your brand currently stands and what it needs to reach its full potential.
                </p>
                <p className="font-inter text-lg text-luxury-charcoal/80 leading-relaxed">
                  Whether you're launching a new brand, reimagining an existing one, or looking to refine your market approach, we collaborate closely with your team to create a custom roadmap for success.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=400&fit=crop"
                  alt="Strategic brand foundation"
                  className="rounded-2xl shadow-xl w-full h-80 object-cover"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <img
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&h=400&fit=crop"
                  alt="Creative strategy execution"
                  className="rounded-2xl shadow-xl w-full h-80 object-cover"
                />
              </div>
              <div className="order-1 lg:order-2 animate-fade-in">
                <h3 className="font-playfair font-bold text-3xl text-luxury-charcoal mb-6">
                  Creative Strategy Execution
                </h3>
                <p className="font-inter text-lg text-luxury-charcoal/80 mb-6 leading-relaxed">
                  Backed by a young, passionate, and creative team, we bring fresh ideas, result-oriented thinking, and a design-centric approach to every challenge. Our strength lies in our ability to merge strategy with creativity.
                </p>
                <p className="font-inter text-lg text-luxury-charcoal/80 leading-relaxed">
                  We ensure that your brand not only looks good but communicates with impact and evolves with purpose, leveraging your unique assets to achieve long-term business goals.
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
              Our Consulting Services
            </h2>
            <p className="font-inter text-xl text-luxury-charcoal/70 max-w-3xl mx-auto">
              Comprehensive brand strategy services that cover every aspect of your brand's development and evolution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-14 h-14 bg-luxury-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-luxury-gold" />
                </div>
                <h3 className="font-playfair font-semibold text-xl text-luxury-charcoal mb-3">
                  {service.title}
                </h3>
                <p className="font-inter text-luxury-charcoal/70 leading-relaxed">
                  {service.description}
                </p>
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
              Our Consultancy Process
            </h2>
            <p className="font-inter text-xl text-luxury-charcoal/70 max-w-3xl mx-auto">
              A systematic approach that ensures your brand strategy is both comprehensive and actionable.
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

      {/* Client Portfolio */}
      <section className="py-24 bg-luxury-pearl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair font-bold text-4xl text-luxury-charcoal mb-6">
              Diverse Client Portfolio
            </h2>
            <p className="font-inter text-xl text-luxury-charcoal/70 max-w-3xl mx-auto">
              From startups to legacy brands, government bodies to lifestyle labels, Yuj Productions has empowered diverse clients across India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 elegant-hover text-center">
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-luxury-gold" />
                </div>
                <h3 className="font-playfair font-semibold text-xl text-luxury-charcoal mb-3">
                  {client.category}
                </h3>
                <p className="font-inter text-luxury-charcoal/70 leading-relaxed">
                  {client.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair font-bold text-4xl text-luxury-charcoal mb-6">
              Why Choose Our Consultancy?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-luxury-cream rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-luxury-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-luxury-gold" />
              </div>
              <h3 className="font-playfair font-semibold text-2xl text-luxury-charcoal mb-4">
                Fresh Perspective
              </h3>
              <p className="font-inter text-luxury-charcoal/70 leading-relaxed">
                Young, passionate team bringing innovative ideas and result-oriented thinking to every challenge.
              </p>
            </div>

            <div className="bg-luxury-cream rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-luxury-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-luxury-gold" />
              </div>
              <h3 className="font-playfair font-semibold text-2xl text-luxury-charcoal mb-4">
                Strategic Expertise
              </h3>
              <p className="font-inter text-luxury-charcoal/70 leading-relaxed">
                Merging strategy with creativity to ensure brands communicate with impact and evolve with purpose.
              </p>
            </div>

            <div className="bg-luxury-cream rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-luxury-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-luxury-gold" />
              </div>
              <h3 className="font-playfair font-semibold text-2xl text-luxury-charcoal mb-4">
                Proven Results
              </h3>
              <p className="font-inter text-luxury-charcoal/70 leading-relaxed">
                Crafting brands that resonate with audiences and achieve sustainable business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-luxury-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-white mb-6">
              Your Vision is Our Blueprint
            </h2>
            <p className="font-inter text-xl text-white/80 mb-12 max-w-3xl mx-auto">
              Let's build a brand the world remembers. Transform your vision into a powerful brand strategy that drives lasting success.
            </p>
            <Link
              to="/contact"
              className="bg-luxury-gold hover:bg-luxury-gold/90 text-white px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Start Your Brand Transformation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BrandConsultancy;
