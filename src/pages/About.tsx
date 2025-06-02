
import { useState, useEffect } from "react";
import { Users, Award, Globe, Heart, Target, Lightbulb, Play, Star, ChevronRight } from "lucide-react";
import { Footer } from "@/components/Footer";

const About = () => {
  const [activeValue, setActiveValue] = useState(0);
  const [counters, setCounters] = useState({ projects: 0, brands: 0, experience: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate counters
          const animateCounter = (target: number, key: keyof typeof counters) => {
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
            }, 50);
          };

          animateCounter(100, 'projects');
          animateCounter(80, 'brands');
          animateCounter(5, 'experience');
        }
      },
      { threshold: 0.5 }
    );

    const statsSection = document.getElementById('stats-section');
    if (statsSection) observer.observe(statsSection);

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Heart,
      title: "Passion for Storytelling",
      description: "Every project begins with understanding the heart of your story and translating it into compelling visual narratives.",
      color: "bg-red-50 text-red-600",
      hoverColor: "group-hover:bg-red-100"
    },
    {
      icon: Target,
      title: "Results-Driven Approach", 
      description: "We create content that doesn't just look beautiful but delivers measurable impact for your brand.",
      color: "bg-blue-50 text-blue-600",
      hoverColor: "group-hover:bg-blue-100"
    },
    {
      icon: Users,
      title: "Collaborative Partnership",
      description: "Great stories are co-created. We work hand-in-hand with our clients to bring their vision to life.",
      color: "bg-green-50 text-green-600",
      hoverColor: "group-hover:bg-green-100"
    },
    {
      icon: Lightbulb,
      title: "Creative Innovation",
      description: "Bridging traditional storytelling with modern techniques to create content that stands out.",
      color: "bg-yellow-50 text-yellow-600",
      hoverColor: "group-hover:bg-yellow-100"
    }
  ];

  const team = [
    {
      role: "Directors",
      description: "Visionary leaders who shape the creative direction of every project.",
      icon: "🎬",
      count: "5+"
    },
    {
      role: "Writers",
      description: "Storytellers who craft compelling narratives that resonate with audiences.",
      icon: "✍️",
      count: "8+"
    },
    {
      role: "DOPs",
      description: "Technical masters who bring visual excellence to every frame.",
      icon: "📸",
      count: "6+"
    },
    {
      role: "Editors",
      description: "Post-production experts who polish content to perfection.",
      icon: "🎞️",
      count: "7+"
    },
    {
      role: "Voice Artists",
      description: "Talented performers who give voice to your brand's message.",
      icon: "🎤",
      count: "12+"
    }
  ];

  const milestones = [
    { year: "2020", event: "Founded Yuj Productions in Jaipur", icon: "🎯" },
    { year: "2021", event: "First major brand collaboration", icon: "🤝" },
    { year: "2022", event: "Expanded to pan-India presence", icon: "🌍" },
    { year: "2023", event: "100+ projects milestone achieved", icon: "🎉" },
    { year: "2024", event: "Celebrity partnerships & growth", icon: "⭐" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Interactive Hero Section */}
      <section className="py-24 luxury-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/5 to-luxury-champagne/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg">
              <Star className="w-5 h-5 text-luxury-gold mr-2" />
              <span className="font-inter text-luxury-charcoal font-medium">Award-Winning Creative Studio</span>
            </div>
            <h1 className="font-playfair font-bold text-5xl md:text-6xl text-luxury-charcoal mb-6">
              About Yuj Productions
            </h1>
            <p className="font-inter text-xl text-luxury-charcoal/80 max-w-4xl mx-auto leading-relaxed mb-8">
              A dynamic, future-forward creative production house rooted in Jaipur, with a pan-India presence, specializing in transforming brand ideas into powerful visual narratives.
            </p>
            <button className="group bg-luxury-gold hover:bg-luxury-gold/90 text-white px-8 py-4 rounded-full font-inter font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl">
              <span className="flex items-center">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Our Story
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Stats Section */}
      <section id="stats-section" className="py-24 bg-luxury-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-white mb-6">
              Our Journey in Numbers
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group cursor-pointer">
              <div className="w-32 h-32 bg-luxury-gold/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-luxury-gold/30 transition-all duration-500 group-hover:scale-110">
                <Award className="w-16 h-16 text-luxury-gold group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="font-playfair font-bold text-5xl text-luxury-gold mb-2">
                {counters.projects}+
              </h3>
              <p className="font-inter text-white/80 text-lg">Distinctive Projects</p>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="w-32 h-32 bg-luxury-gold/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-luxury-gold/30 transition-all duration-500 group-hover:scale-110">
                <Users className="w-16 h-16 text-luxury-gold group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="font-playfair font-bold text-5xl text-luxury-gold mb-2">
                {counters.brands}+
              </h3>
              <p className="font-inter text-white/80 text-lg">Brand Collaborations</p>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="w-32 h-32 bg-luxury-gold/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-luxury-gold/30 transition-all duration-500 group-hover:scale-110">
                <Globe className="w-16 h-16 text-luxury-gold group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="font-playfair font-bold text-5xl text-luxury-gold mb-2">
                {counters.experience}+
              </h3>
              <p className="font-inter text-white/80 text-lg">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-luxury-charcoal mb-6">
              Our Journey
            </h2>
            <p className="font-inter text-xl text-luxury-charcoal/70 max-w-3xl mx-auto">
              From humble beginnings to becoming a trusted creative partner across India.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-luxury-gold/30"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-12`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <div className="group cursor-pointer bg-white border-2 border-luxury-gold/20 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-luxury-gold hover:scale-105">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-2xl">{milestone.icon}</span>
                      <span className="font-playfair font-bold text-2xl text-luxury-gold">{milestone.year}</span>
                    </div>
                    <p className="font-inter text-luxury-charcoal/80 leading-relaxed">{milestone.event}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-luxury-gold rounded-full border-4 border-white shadow-lg hover:scale-125 transition-transform duration-300 cursor-pointer"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Values Section */}
      <section className="py-24 bg-luxury-pearl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-luxury-charcoal mb-6">
              Our Values
            </h2>
            <p className="font-inter text-xl text-luxury-charcoal/70 max-w-3xl mx-auto">
              The principles that guide everything we do and every story we tell.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105"
                onMouseEnter={() => setActiveValue(index)}
              >
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 ${value.color} ${value.hoverColor} rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                    <value.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-playfair font-semibold text-2xl text-luxury-charcoal mb-3 group-hover:text-luxury-gold transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="font-inter text-luxury-charcoal/80 leading-relaxed group-hover:text-luxury-charcoal transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>
                  <ChevronRight className="w-6 h-6 text-luxury-gold opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Team Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-luxury-charcoal mb-6">
              Our Creative Powerhouse
            </h2>
            <p className="font-inter text-xl text-luxury-charcoal/70 max-w-3xl mx-auto">
              A diverse team of creative professionals, each bringing their unique expertise to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-luxury-cream to-luxury-pearl rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-luxury-gold/10 rounded-bl-3xl transform group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    {member.icon}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-playfair font-semibold text-2xl text-luxury-charcoal group-hover:text-luxury-gold transition-colors duration-300">
                      {member.role}
                    </h3>
                    <span className="bg-luxury-gold/20 text-luxury-gold px-3 py-1 rounded-full font-inter font-semibold text-sm">
                      {member.count}
                    </span>
                  </div>
                  
                  <p className="font-inter text-luxury-charcoal/70 leading-relaxed group-hover:text-luxury-charcoal transition-colors duration-300">
                    {member.description}
                  </p>
                  
                  <div className="mt-6 flex items-center text-luxury-gold opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <span className="font-inter font-medium">Learn More</span>
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main About Content with Interactive Elements */}
      <section className="py-24 bg-luxury-pearl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-fade-in">
              <div className="inline-flex items-center bg-luxury-gold/10 rounded-full px-6 py-3 mb-6">
                <Heart className="w-5 h-5 text-luxury-gold mr-2" />
                <span className="font-inter text-luxury-charcoal font-medium">Our Story</span>
              </div>
              <h2 className="font-playfair font-bold text-4xl text-luxury-charcoal mb-6">
                Who We Are
              </h2>
              <div className="space-y-6 font-inter text-lg text-luxury-charcoal/80 leading-relaxed">
                <p className="hover:text-luxury-charcoal transition-colors duration-300 cursor-default">
                  Yuj Productions is a dynamic, future-forward creative production house rooted in Jaipur, with a pan-India presence. We specialize in transforming brand ideas into powerful visual narratives that stir emotions, spark curiosity, and drive results.
                </p>
                <p className="hover:text-luxury-charcoal transition-colors duration-300 cursor-default">
                  Founded with a passion for storytelling and visual craftsmanship, Yuj Productions has become a trusted name in delivering impactful commercials, monologue films, branded content, and regional campaigns.
                </p>
              </div>
            </div>
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=500&fit=crop"
                alt="About Yuj Productions"
                className="rounded-3xl shadow-2xl w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-luxury-gold/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-luxury-gold/20 rounded-3xl group-hover:scale-110 transition-transform duration-500"></div>
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-luxury-champagne/30 rounded-3xl group-hover:scale-110 transition-transform duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
