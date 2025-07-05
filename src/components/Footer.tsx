import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const socialLinks = [{
    icon: Facebook,
    href: '#',
    label: 'Facebook'
  }, {
    icon: Instagram,
    href: '#',
    label: 'Instagram'
  }, {
    icon: Twitter,
    href: '#',
    label: 'Twitter'
  }, {
    icon: Linkedin,
    href: '#',
    label: 'LinkedIn'
  }];
  const quickLinks = [{
    name: 'Home',
    action: () => scrollToSection('home')
  }, {
    name: 'About',
    action: () => scrollToSection('about')
  }, {
    name: 'Services',
    action: () => scrollToSection('services')
  }, {
    name: 'Portfolio',
    action: () => scrollToSection('portfolio')
  }, {
    name: 'Contact',
    action: () => scrollToSection('contact')
  }];
  const services = ['Interior Design', 'Architectural Design', 'Construction', 'Custom Furnishing', 'Green Solutions', 'Landscape Design'];
  return <footer className="bg-emerald-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img alt="Gemini Fusion Space Logo" className="h-12 w-auto filter brightness-0 invert" src="/lovable-uploads/c5966f89-e357-4143-9279-cc762fe88a8f.jpg" />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Transforming spaces into masterpieces through innovative design, sustainable practices, and exceptional craftsmanship.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => <a key={index} href={social.href} aria-label={social.label} className="bg-emerald-800 hover:bg-orange-400 hover:text-emerald-900 p-3 rounded-lg transition-all duration-300 transform hover:scale-110">
                  <social.icon size={20} />
                </a>)}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-orange-300">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => <li key={index}>
                  <button onClick={link.action} className="text-gray-300 hover:text-orange-300 transition-colors duration-300 hover:translate-x-1 transform inline-block">
                    {link.name}
                  </button>
                </li>)}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-orange-300">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => <li key={index}>
                  <span className="text-gray-300 hover:text-orange-300 transition-colors duration-300">
                    {service}
                  </span>
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-orange-300">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-300 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  B-515 Apurupa Jagapathi Heights
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-300 flex-shrink-0" />
                <span className="text-gray-300">+91 7995006877
+91 8790311020
              </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-300 flex-shrink-0" />
                <span className="text-gray-300">geminifusionspace@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-emerald-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">© 2025 Gemini Fusion Space. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-300 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-300 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-300 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;