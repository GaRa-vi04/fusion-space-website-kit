
import React, { useState } from 'react';
import { ExternalLink, ZoomIn } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Residential', 'Commercial', 'Hospitality', 'Landscape'];

  const projects = [
    {
      id: 1,
      title: 'Modern Penthouse',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Luxurious penthouse with panoramic city views'
    },
    {
      id: 2,
      title: 'Corporate Office',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Contemporary office space promoting productivity'
    },
    {
      id: 3,
      title: 'Boutique Hotel Lobby',
      category: 'Hospitality',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Elegant hotel lobby with sophisticated ambiance'
    },
    {
      id: 4,
      title: 'Zen Garden Residence',
      category: 'Landscape',
      image: 'https://images.unsplash.com/photo-1558618047-b27b8a071d81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Serene landscape design with zen elements'
    },
    {
      id: 5,
      title: 'Minimalist Apartment',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Clean lines and functional minimalism'
    },
    {
      id: 6,
      title: 'Restaurant Interior',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Warm and inviting dining atmosphere'
    },
    {
      id: 7,
      title: 'Luxury Villa',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Opulent villa with classical elegance'
    },
    {
      id: 8,
      title: 'Vertical Garden Wall',
      category: 'Landscape',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Living wall bringing nature indoors'
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Our Portfolio
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our diverse collection of successful projects that showcase our commitment to excellence and innovation in design.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-900 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-900 hover:text-white shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-200 mb-4">{project.description}</p>
                    <div className="flex space-x-3">
                      <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors duration-300">
                        <ZoomIn size={16} />
                      </button>
                      <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors duration-300">
                        <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-yellow-500 text-blue-900 px-3 py-1 rounded-full text-xs font-medium">
                  {project.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
