import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Studio',
      info: 'B-515 Apurupa Jagapathi Heights,\nAdarsh Nagar, Uppal, Hyd -500039'
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: '+1 (555) 123-4567'
    },
    {
      icon: Mail,
      title: 'Email Us',
      info: 'hello@geminifusionspace.com'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      info: 'Mon - Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your space? Let's discuss your vision and create something extraordinary together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 transition-colors duration-300 outline-none"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 transition-colors duration-300 outline-none"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 transition-colors duration-300 outline-none"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                      Project Type
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 transition-colors duration-300 outline-none"
                    >
                      <option value="">Select a service</option>
                      <option value="Interior Design">Interior Design</option>
                      <option value="Architectural Design">Architectural Design</option>
                      <option value="Construction">Construction</option>
                      <option value="Custom Furnishing">Custom Furnishing</option>
                      <option value="Green Solutions">Green Solutions</option>
                      <option value="Landscape & Gardens">Landscape & Gardens</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 transition-colors duration-300 outline-none resize-vertical"
                    placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-3 group"
                >
                  <Send className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Contact Information</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We'd love to hear from you. Get in touch and let's start a conversation about your next project.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                    <div className="bg-blue-900 p-3 rounded-lg">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 whitespace-pre-line">{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">Studio Location</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
