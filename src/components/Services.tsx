
import React from 'react';
import { Home, Building, Hammer, Sofa, Leaf, TreePine } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Interior Design',
      description: 'Complete interior design solutions from concept to completion, creating spaces that reflect your personality and lifestyle.',
      features: ['Space Planning', 'Color Schemes', 'Furniture Selection', 'Lighting Design']
    },
    {
      icon: Building,
      title: 'Architectural Design',
      description: 'Innovative architectural solutions that blend form and function, creating structures that stand the test of time.',
      features: ['Building Design', '3D Visualization', 'Technical Drawings', 'Planning Permission']
    },
    {
      icon: Hammer,
      title: 'Construction',
      description: 'Expert construction services with attention to detail, quality materials, and skilled craftsmanship.',
      features: ['Project Management', 'Quality Control', 'Timeline Delivery', 'Safety Standards']
    },
    {
      icon: Sofa,
      title: 'Custom Furnishing',
      description: 'Bespoke furniture and furnishing solutions tailored to your space and preferences.',
      features: ['Custom Furniture', 'Upholstery', 'Window Treatments', 'Accessories']
    },
    {
      icon: Leaf,
      title: 'Green Solutions',
      description: 'Sustainable design practices that minimize environmental impact while maximizing comfort and style.',
      features: ['Eco Materials', 'Energy Efficiency', 'Air Quality', 'Sustainable Practices']
    },
    {
      icon: TreePine,
      title: 'Landscape & Vertical Gardens',
      description: 'Transform outdoor and indoor spaces with beautiful landscapes and innovative vertical garden solutions.',
      features: ['Garden Design', 'Plant Selection', 'Irrigation Systems', 'Maintenance Plans']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive design and construction services to bring your vision to life with exceptional quality and attention to detail.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="p-8">
                  {/* Icon */}
                  <div className="bg-gradient-to-br from-blue-900 to-blue-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-blue-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effect */}
                <div className="h-1 bg-gradient-to-r from-blue-900 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
