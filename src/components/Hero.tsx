
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-800/80">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')] bg-cover bg-center bg-fixed"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          GEMINI FUSION
          <span className="block text-orange-300">SPACE</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light">
          Designing Dreams. Building Realities.
        </p>
        
        <p className="text-lg mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Transform your space into a masterpiece with our innovative interior design solutions. 
          We blend creativity with functionality to create environments that inspire.
        </p>

        <button
          onClick={scrollToPortfolio}
          className="group bg-orange-400 hover:bg-orange-300 text-emerald-900 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-3 mx-auto"
        >
          <span>Explore Our Work</span>
          <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
