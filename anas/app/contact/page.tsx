'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, Instagram } from 'lucide-react';

// ========== CONTACT DATA - EDIT HERE ==========
const contactData = {
  heading: "Let's Work Together",
  subheading: "Available for freelance projects and full-time opportunities",
  
  description: "I'm a passionate full-stack developer specializing in building exceptional digital experiences. Whether you need a modern website, mobile application, or custom web solution, I'm here to bring your ideas to life. I focus on creating clean, efficient code and user-friendly interfaces that make a real impact.",
  
  availability: {
    status: "Available for hire",
    openTo: ["Full-time positions", "Freelance projects", "Contract work", "Consultations"]
  },
  
  contactInfo: {
    email: "anasputhukkolli09@gmail.com",
    phone: "+91 XXXXX XXXXX", // Add your phone
    location: "Kerala, India"
  },
  
  socialLinks: {
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    twitter: "https://twitter.com/yourhandle",
    instagram: "https://instagram.com/yourhandle"
  },
  
  services: [
    {
      title: "Web Development",
      description: "Full-stack web applications using modern technologies like Next.js, React, Django, and PostgreSQL"
    },
    {
      title: "Mobile Development",
      description: "Cross-platform mobile apps with React Native and Firebase integration"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design with Figma, creating intuitive and beautiful interfaces"
    },
    {
      title: "API Development",
      description: "RESTful APIs and backend solutions with Django and Node.js"
    }
  ]
};
// ========== END OF CONTACT DATA ==========

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    // You can integrate with email services like EmailJS, SendGrid, etc.
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <article className="relative bg-black border border-[#1a1a1a] rounded-[32px] p-8 lg:p-12 shadow-2xl overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-white/3 to-transparent rounded-full blur-3xl -z-10" />
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] -z-10" />

      <header className="mb-12 relative">
        <div className="absolute -left-8 lg:-left-12 top-0 w-1 h-24 bg-gradient-to-b from-white via-gray-400 to-transparent" />
        
        <h2 className="text-4xl lg:text-5xl font-bold relative pb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          {contactData.heading}
          <span className="absolute bottom-0 left-0 h-[3px] w-16 bg-gradient-to-r from-white to-gray-500 rounded-full">
            <span className="absolute inset-0 bg-gradient-to-r from-white to-transparent animate-pulse" />
          </span>
        </h2>
        <p className="text-gray-500 text-sm lg:text-base mt-2 font-light tracking-wide">
          {contactData.subheading}
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Info */}
        <div className="space-y-8">
          {/* About/Description */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-2xl font-semibold text-white mb-4">About Me</h3>
            <p className="text-gray-400 leading-relaxed">
              {contactData.description}
            </p>
          </div>

          {/* Availability Status */}
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <h3 className="text-xl font-semibold text-white">{contactData.availability.status}</h3>
            </div>
            <p className="text-gray-400 mb-3">Currently open to:</p>
            <ul className="space-y-2">
              {contactData.availability.openTo.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-2xl font-semibold text-white mb-6">What I Offer</h3>
            <div className="space-y-4">
              {contactData.services.map((service, index) => (
                <div key={index} className="border-l-2 border-white/20 pl-4 hover:border-white/40 transition-colors duration-300">
                  <h4 className="text-white font-medium mb-1">{service.title}</h4>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <a 
              href={`mailto:${contactData.contactInfo.email}`}
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                <Mail size={20} className="text-white" />
              </div>
              <div>
                <p className="text-gray-500 text-xs">Email</p>
                <p className="text-white font-medium">{contactData.contactInfo.email}</p>
              </div>
            </a>

            <a 
              href={`tel:${contactData.contactInfo.phone}`}
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                <Phone size={20} className="text-white" />
              </div>
              <div>
                <p className="text-gray-500 text-xs">Phone</p>
                <p className="text-white font-medium">{contactData.contactInfo.phone}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="p-3 bg-white/10 rounded-xl">
                <MapPin size={20} className="text-white" />
              </div>
              <div>
                <p className="text-gray-500 text-xs">Location</p>
                <p className="text-white font-medium">{contactData.contactInfo.location}</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Connect With Me</h3>
            <div className="flex gap-4">
              <a
                href={contactData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={20} className="text-white" />
              </a>
              <a
                href={contactData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                <Github size={20} className="text-white" />
              </a>
              <a
                href={contactData.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                <Twitter size={20} className="text-white" />
              </a>
              <a
                href={contactData.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                <Instagram size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="lg:sticky lg:top-8 h-fit">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="group relative w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/20"
              >
                {/* Animated background */}
                <span className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                
                {/* Content */}
                <span className="relative z-10">Send Message</span>
                <Send size={20} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </article>
  );
}