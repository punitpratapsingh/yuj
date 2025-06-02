
import { Link } from "react-router-dom";
import { ArrowRight, Target, TrendingUp, Globe, Monitor, Smartphone, Tv } from "lucide-react";
import { Footer } from "@/components/Footer";

const Advertising = () => {
  const features = [
    {
      icon: Target,
      title: "Strategic Research",
      description: "In-depth research and insight mining to understand your brand's core values, audience behavior, and market trends."
    },
    {
      icon: TrendingUp,
      title: "Campaign Optimization",
      description: "Real-time monitoring and optimization of campaign performance to ensure maximum impact and ROI."
    },
    {
      icon: Globe,
      title: "Multi-Channel Reach",
      description: "Campaigns executed across television, digital, social, and print platforms for comprehensive brand coverage."
    }
  ];

  const platforms = [
    { icon: Tv, name: "Television", description: "High-impact TV commercials that capture attention and drive brand recall." },
    { icon: Monitor, name: "Digital", description: "Engaging digital campaigns optimized for online platforms and search engines." },
    { icon: Smartphone, name: "Social Media", description: "Social-first content designed to maximize engagement and viral potential." }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 luxury-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="font-playfair font-bold text-5xl md:text-6xl text-luxury-charcoal mb-6">
                Advertising
              </h1>
              <p className="font-inter text-xl text-luxury-charcoal/80 mb-8 leading-relaxed">
                At Yuj Productions, advertising is more than just messaging—it's about meaningful storytelling that connects your brand with the right audience at the right time.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-luxury-gold hover:bg-luxury-gold/90 text-white px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl group"
              >
                <span>Start Your Campaign</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=500&fit=crop"
                alt="Advertising services"
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
              Our Advertising Approach
            </h2>
            <p className="font-inter text-xl text-luxury-charcoal/70 max-w-3xl mx-auto">
              A comprehensive methodology that transforms insights into impactful advertising campaigns.
            </p>
          </div>

          <div className="space-y-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h3 className="font-playfair font-bold text-3xl text-luxury-charcoal mb-6">
                  Research & Strategy Foundation
                </h3>
                <p className="font-inter text-lg text-luxury-charcoal/80 mb-6 leading-relaxed">
                  Our approach begins with in-depth research and insight mining. We take time to understand your brand's core values, audience behavior, market trends, and the competitive landscape. This groundwork forms the foundation of every campaign we create.
                </p>
                <p className="font-inter text-lg text-luxury-charcoal/80 leading-relaxed">
                  From there, our team of seasoned creatives, strategists, and production experts craft innovative concepts that reflect your brand's vision while resonating with your target demographic.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=400&fit=crop"
                  alt="Research and strategy"
                  className="rounded-2xl shadow-xl w-full h-80 object-cover"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <img
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&h=400&fit=crop"
                  alt="Campaign execution"
                  className="rounded-2xl shadow-xl w-full h-80 object-cover"
                />
              </div>
              <div className="order-1 lg:order-2 animate-fade-in">
                <h3 className="font-playfair font-bold text-3xl text-luxury-charcoal mb-6">
                  Creative Execution & Delivery
                </h3>
                <p className="font-inter text-lg text-luxury-charcoal/80 mb-6 leading-relaxed">
                  Whether it's a high-impact TV commercial, a digital campaign, or a regional monologue film, each piece is designed to drive engagement and action. With a strong grip on regional languages and cultural nuances, we create communication that feels personal and powerful.
                </p>
                <p className="font-inter text-lg text-luxury-charcoal/80 leading-relaxed">
                  Throughout the campaign lifecycle, we monitor performance metrics and audience responses to optimize strategies in real time, ensuring your brand stays ahead in a fast-evolving marketplace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-luxury-pearl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair font-bold text-4xl text-luxury-charcoal mb-6">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-luxury-gold" />
                </div>
                <h3 className="font-playfair font-semibold text-2xl text-luxury-charcoal mb-4">
                  {feature.title}
                </h3>
                <p className="font-inter text-luxury-charcoal/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair font-bold text-4xl text-luxury-charcoal mb-6">
              Multi-Channel Platform Expertise
            </h2>
            <p className="font-inter text-xl text-luxury-charcoal/70 max-w-3xl mx-auto">
              We execute campaigns across multiple platforms, ensuring every touchpoint reinforces your brand identity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-luxury-cream rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 elegant-hover">
                <div className="w-14 h-14 bg-luxury-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <platform.icon className="w-7 h-7 text-luxury-gold" />
                </div>
                <h3 className="font-playfair font-semibold text-xl text-luxury-charcoal mb-3">
                  {platform.name}
                </h3>
                <p className="font-inter text-luxury-charcoal/70 leading-relaxed">
                  {platform.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 bg-luxury-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-white mb-6">
              Delivering Results That Matter
            </h2>
            <p className="font-inter text-xl text-white/80 mb-12 max-w-3xl mx-auto">
              Yuj Productions delivers advertising that is bold in vision, precise in execution, and unforgettable in impact.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <h3 className="font-playfair font-bold text-3xl text-luxury-gold mb-2">Bold Vision</h3>
                <p className="font-inter text-white/80">Creative concepts that break through the noise</p>
              </div>
              <div className="text-center">
                <h3 className="font-playfair font-bold text-3xl text-luxury-gold mb-2">Precise Execution</h3>
                <p className="font-inter text-white/80">Flawless delivery across all touchpoints</p>
              </div>
              <div className="text-center">
                <h3 className="font-playfair font-bold text-3xl text-luxury-gold mb-2">Unforgettable Impact</h3>
                <p className="font-inter text-white/80">Campaigns that drive lasting brand recall</p>
              </div>
            </div>

            <Link
              to="/contact"
              className="bg-luxury-gold hover:bg-luxury-gold/90 text-white px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Launch Your Campaign
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Advertising;
