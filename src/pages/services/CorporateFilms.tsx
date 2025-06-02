
import { Link } from "react-router-dom";
import { ArrowRight, Film, Play, Users, Award, Building, Video } from "lucide-react";
import { Footer } from "@/components/Footer";

const CorporateFilms = () => {
  const filmTypes = [
    {
      icon: Building,
      title: "Company Profiles",
      description: "Comprehensive films that showcase your company's story, values, and unique position in the market."
    },
    {
      icon: Users,
      title: "Leadership Messages",
      description: "Executive communications that convey vision, strategy, and company direction with authority and clarity."
    },
    {
      icon: Video,
      title: "Training Videos",
      description: "Educational content that effectively communicates processes, procedures, and knowledge to your team."
    },
    {
      icon: Award,
      title: "Brand Stories",
      description: "Behind-the-scenes narratives that reveal the passion, innovation, and people behind your brand."
    }
  ];

  const process = [
    {
      step: "Concept Development",
      description: "Collaborative script development that translates your message into a powerful visual narrative."
    },
    {
      step: "Pre-Production",
      description: "Complete planning including casting, location scouting, equipment sourcing, and logistics coordination."
    },
    {
      step: "Production",
      description: "Professional filming with state-of-the-art equipment and experienced crew to capture your story."
    },
    {
      step: "Post-Production",
      description: "Expert editing, sound design, and visual effects to create a polished final product that shines."
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
                Corporate Films
              </h1>
              <p className="font-inter text-xl text-luxury-charcoal/80 mb-8 leading-relaxed">
                At Yuj Productions, we believe that every brand has a story worth telling—and we bring that story to life through cinematic corporate films that inspire, inform, and engage.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-luxury-gold hover:bg-luxury-gold/90 text-white px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl group"
              >
                <span>Create Your Film</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=500&fit=crop"
                alt="Corporate film production"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
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
              Our Filmmaking Philosophy
            </h2>
            <p className="font-inter text-xl text-luxury-charcoal/70 max-w-3xl mx-auto">
              Creating corporate films that capture attention and reflect the credibility, ethos, and innovation of your brand.
            </p>
          </div>

          <div className="space-y-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h3 className="font-playfair font-bold text-3xl text-luxury-charcoal mb-6">
                  Strategic Storytelling
                </h3>
                <p className="font-inter text-lg text-luxury-charcoal/80 mb-6 leading-relaxed">
                  Our process begins with a deep understanding of your company's vision, values, and objectives. We collaborate closely with your team to develop a compelling concept and a script that translates your message into a powerful visual narrative.
                </p>
                <p className="font-inter text-lg text-luxury-charcoal/80 leading-relaxed">
                  Whether it's a brand origin story, a leadership message, a company profile, or a behind-the-scenes look at your operations, we ensure the storytelling is as polished as it is purposeful.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=500&h=400&fit=crop"
                  alt="Strategic storytelling"
                  className="rounded-2xl shadow-xl w-full h-80 object-cover"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <img
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=400&fit=crop"
                  alt="Professional production"
                  className="rounded-2xl shadow-xl w-full h-80 object-cover"
                />
              </div>
              <div className="order-1 lg:order-2 animate-fade-in">
                <h3 className="font-playfair font-bold text-3xl text-luxury-charcoal mb-6">
                  Complete Production Excellence
                </h3>
                <p className="font-inter text-lg text-luxury-charcoal/80 mb-6 leading-relaxed">
                  Our in-house experts handle the entire production process—casting, location scouting, artist management, equipment sourcing, shooting, and post-production. With a strong command over visuals, voiceovers, and sound design, we make sure your investment doesn't just speak—it shines on screen.
                </p>
                <p className="font-inter text-lg text-luxury-charcoal/80 leading-relaxed">
                  Having worked with reputed names and growing businesses alike, Yuj Productions is proud to be among the most trusted corporate filmmakers in Jaipur and beyond—delivering content that is both strategic and striking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Film Types */}
      <section className="py-24 bg-luxury-pearl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair font-bold text-4xl text-luxury-charcoal mb-6">
              Types of Corporate Films
            </h2>
            <p className="font-inter text-xl text-luxury-charcoal/70 max-w-3xl mx-auto">
              From company profiles to training videos, we create films that serve your specific business objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filmTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-luxury-gold/10 rounded-xl flex items-center justify-center">
                    <type.icon className="w-7 h-7 text-luxury-gold" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-2xl text-luxury-charcoal mb-3">
                      {type.title}
                    </h3>
                    <p className="font-inter text-luxury-charcoal/70 leading-relaxed">
                      {type.description}
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
              Our Production Process
            </h2>
            <p className="font-inter text-xl text-luxury-charcoal/70 max-w-3xl mx-auto">
              A comprehensive approach that ensures your corporate film meets the highest standards of quality and impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-luxury-gold rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-luxury-gold/90 transition-colors duration-300">
                  <Film className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-playfair font-semibold text-xl text-luxury-charcoal mb-4">
                  {step.step}
                </h3>
                <p className="font-inter text-luxury-charcoal/70 leading-relaxed text-sm">
                  {step.description}
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
              Why Choose Corporate Films?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-luxury-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-luxury-gold" />
              </div>
              <h3 className="font-playfair font-semibold text-2xl text-luxury-charcoal mb-4">
                Enhanced Credibility
              </h3>
              <p className="font-inter text-luxury-charcoal/70 leading-relaxed">
                Professional films establish trust and authority, showcasing your company's expertise and values.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-luxury-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Play className="w-8 h-8 text-luxury-gold" />
              </div>
              <h3 className="font-playfair font-semibold text-2xl text-luxury-charcoal mb-4">
                Engaging Communication
              </h3>
              <p className="font-inter text-luxury-charcoal/70 leading-relaxed">
                Video content captures attention and communicates complex messages more effectively than text alone.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-luxury-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-luxury-gold" />
              </div>
              <h3 className="font-playfair font-semibold text-2xl text-luxury-charcoal mb-4">
                Lasting Impact
              </h3>
              <p className="font-inter text-luxury-charcoal/70 leading-relaxed">
                Well-crafted corporate films create memorable impressions that resonate with your audience long after viewing.
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
              Your Brand Has a Story
            </h2>
            <p className="font-inter text-xl text-white/80 mb-12 max-w-3xl mx-auto">
              Let us turn it into a film worth watching. Create corporate content that not only looks professional but delivers real business impact.
            </p>
            <Link
              to="/contact"
              className="bg-luxury-gold hover:bg-luxury-gold/90 text-white px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Start Your Corporate Film
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CorporateFilms;
