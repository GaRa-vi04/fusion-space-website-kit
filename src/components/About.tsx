
import React from 'react';
import { Award, Users, Star, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '15+' },
    { icon: Users, label: 'Happy Clients', value: '500+' },
    { icon: Star, label: 'Projects Completed', value: '1000+' },
    { icon: Clock, label: 'Awards Won', value: '25+' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4">
              About Gemini Fusion Space
            </h2>
            <div className="w-24 h-1 bg-orange-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are passionate creators who transform ordinary spaces into extraordinary experiences through innovative design and meticulous craftsmanship.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div>
              <h3 className="text-2xl font-bold text-emerald-800 mb-6">Our Mission & Values</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                At Gemini Fusion Space, we believe that great design has the power to transform lives. Our mission is to create spaces that not only look beautiful but also enhance the way people live, work, and connect with their environment.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We combine traditional craftsmanship with modern innovation, sustainable practices with luxurious aesthetics, and functional design with artistic vision. Every project is a unique journey that reflects our clients' personalities and aspirations.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-700">Sustainable and eco-friendly design solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-700">Personalized approach to every project</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-700">Cutting-edge technology and trends</span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Modern interior design"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-orange-400 text-emerald-900 p-6 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-xl p-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <stat.icon className="w-8 h-8 text-emerald-700 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-emerald-800 mb-2">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
