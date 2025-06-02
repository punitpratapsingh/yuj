
import { useState, useEffect } from "react";
import { Play, ArrowRight, Star, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const InteractiveHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const heroSlides = [
    {
      title: "Transforming Ideas into Visual Stories",
      subtitle: "Creative Excellence in Every Frame",
      description: "We craft compelling narratives that resonate with your audience and drive meaningful engagement.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=1200&h=800&fit=crop",
      color: "from-luxury-gold/20 to-luxury-champagne/30"
    },
    {
      title: "Award-Winning Production House",
      subtitle: "Trusted by 80+ Brands Across India",
      description: "From concept to execution, we deliver cinematic excellence that elevates your brand presence.",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=1200&h=800&fit=crop",
      color: "from-blue-100/20 to-luxury-pearl/30"
    },
    {
      title: "Regional Voices, National Impact",
      subtitle: "Authentic Storytelling Across Cultures",
      description: "Bridging traditional roots with modern narratives to create content that truly connects.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&h=800&fit=crop",
      color: "from-green-100/20 to-luxury-cream/30"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePlayClick = () => {
    setIsPlaying(true);
    // Add video play logic here
    setTimeout(() => setIsPlaying(false), 3000); // Demo timeout
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
        <img
          src={heroSlides[currentSlide].image}
          alt="Hero background"
          className="w-full h-full object-cover scale-110 transition-transform duration-[5000ms] ease-out hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${heroSlides[currentSlide].color} transition-all duration-1000`}></div>
        <div className="absolute inset-0 bg-white/60"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-elegant-float">
        <div className="w-16 h-16 bg-luxury-gold/20 rounded-2xl backdrop-blur-sm"></div>
      </div>
      <div className="absolute bottom-32 right-16 animate-elegant-float" style={{ animationDelay: '1s' }}>
        <div className="w-12 h-12 bg-luxury-champagne/30 rounded-full backdrop-blur-sm"></div>
      </div>
      <div className="absolute top-1/3 right-20 animate-elegant-float" style={{ animationDelay: '2s' }}>
        <Sparkles className="w-8 h-8 text-luxury-gold/40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Subtitle with Icon */}
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg hover:bg-white/90 transition-all duration-300 cursor-default">
            <Star className="w-5 h-5 text-luxury-gold mr-2 animate-pulse" />
            <span className="font-inter text-luxury-charcoal font-medium">
              {heroSlides[currentSlide].subtitle}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-playfair font-bold text-5xl md:text-7xl text-luxury-charcoal mb-6 leading-tight">
            <span className="block">{heroSlides[currentSlide].title.split(' ').slice(0, 2).join(' ')}</span>
            <span className="block bg-gradient-to-r from-luxury-gold to-luxury-champagne bg-clip-text text-transparent">
              {heroSlides[currentSlide].title.split(' ').slice(2).join(' ')}
            </span>
          </h1>

          {/* Description */}
          <p className="font-inter text-xl text-luxury-charcoal/80 max-w-3xl mx-auto leading-relaxed mb-12">
            {heroSlides[currentSlide].description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={handlePlayClick}
              className="group bg-luxury-gold hover:bg-luxury-gold/90 text-white px-8 py-4 rounded-full font-inter font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-3"
            >
              <Play className={`w-6 h-6 transition-all duration-300 ${isPlaying ? 'animate-pulse' : 'group-hover:scale-110'}`} />
              <span>{isPlaying ? 'Playing...' : 'Watch Our Reel'}</span>
            </button>

            <Link
              to="/services"
              className="group bg-white/90 backdrop-blur-sm hover:bg-white text-luxury-charcoal px-8 py-4 rounded-full font-inter font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-3"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mt-16">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-luxury-gold scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-luxury-gold/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-luxury-gold/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
