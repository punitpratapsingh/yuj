
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting Yuj Productions. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["Jaipur, Rajasthan", "Pan-India Presence"]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 8209830890", "Rakhi"]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["yujproduction@gmail.com"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: By Appointment"]
    }
  ];

  const services = [
    "Advertising",
    "Brand Photography",
    "Corporate Films",
    "Celebrity Management",
    "Brand Consultancy"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 luxury-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="font-playfair font-bold text-5xl md:text-6xl text-luxury-charcoal mb-6">
              Get In Touch
            </h1>
            <p className="font-inter text-xl text-luxury-charcoal/80 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your brand story? Let's discuss how we can bring your vision to life through compelling visual narratives.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <h2 className="font-playfair font-bold text-3xl text-luxury-charcoal mb-8">
                Start Your Project
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-inter font-medium text-luxury-charcoal mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-luxury-platinum rounded-lg font-inter focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-inter font-medium text-luxury-charcoal mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-luxury-platinum rounded-lg font-inter focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block font-inter font-medium text-luxury-charcoal mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-luxury-platinum rounded-lg font-inter focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-colors duration-300"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block font-inter font-medium text-luxury-charcoal mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-luxury-platinum rounded-lg font-inter focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-colors duration-300"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block font-inter font-medium text-luxury-charcoal mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-luxury-platinum rounded-lg font-inter focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-colors duration-300"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-inter font-medium text-luxury-charcoal mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-luxury-platinum rounded-lg font-inter focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project, goals, and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-white px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in">
              <h2 className="font-playfair font-bold text-3xl text-luxury-charcoal mb-8">
                Contact Information
              </h2>
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-luxury-gold/10 rounded-xl flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-luxury-gold" />
                    </div>
                    <div>
                      <h3 className="font-playfair font-semibold text-xl text-luxury-charcoal mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="font-inter text-luxury-charcoal/70">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-12 bg-luxury-pearl rounded-2xl p-8">
                <h3 className="font-playfair font-semibold text-2xl text-luxury-charcoal mb-4">
                  Why Choose Yuj Productions?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                    <span className="font-inter text-luxury-charcoal/80">100+ Distinctive Projects</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                    <span className="font-inter text-luxury-charcoal/80">80+ Brand Collaborations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                    <span className="font-inter text-luxury-charcoal/80">Pan-India Presence</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                    <span className="font-inter text-luxury-charcoal/80">Expert Creative Team</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-luxury-pearl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair font-bold text-4xl text-luxury-charcoal mb-6">
              Find Us
            </h2>
            <p className="font-inter text-xl text-luxury-charcoal/70 max-w-3xl mx-auto">
              Based in Jaipur with a pan-India presence, we're always ready to bring your creative vision to life.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="aspect-video bg-luxury-cream rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-luxury-gold mx-auto mb-4" />
                <h3 className="font-playfair font-semibold text-2xl text-luxury-charcoal mb-2">
                  Jaipur, Rajasthan
                </h3>
                <p className="font-inter text-luxury-charcoal/70">
                  Interactive map will be integrated here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-luxury-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-white mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="font-inter text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Yuj Productions is where your vision finds voice, your story finds shape, and your audience finds connection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+918209830890"
                className="bg-luxury-gold hover:bg-luxury-gold/90 text-white px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Call Now
              </a>
              <a
                href="mailto:yujproduction@gmail.com"
                className="border-2 border-white text-white hover:bg-white hover:text-luxury-charcoal px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
