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
    phone: "+91 XXXXX XXXXX",
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
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <article className="relative bg-black  p-8 lg:p-12  overflow-hidden font-mono">
      {/* Corner accents */}
      <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-cyan-500"></div>
      <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-cyan-500"></div>
      <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-cyan-500"></div>
      <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-cyan-500"></div>

      {/* Animated border lines */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse"></div>
      <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-pulse"></div>
      <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-pulse"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-50" />

      <header className="mb-12 relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-cyan-500"></div>
            <div className="w-2 h-2 bg-cyan-500"></div>
            <div className="w-2 h-2 bg-cyan-500"></div>
          </div>
          <span className="text-xs text-cyan-400 uppercase tracking-widest">CONTACT_INTERFACE</span>
        </div>
        
        <h2 className="text-4xl lg:text-5xl font-bold relative pb-6 text-cyan-400 tracking-wider">
          {'CONNECT'}
          <span className="absolute bottom-0 left-0 h-[2px] w-32 bg-cyan-500 shadow-[0_0_10px_rgba(0,255,255,0.5)]"></span>
        </h2>

        <div className="flex items-center gap-2 text-cyan-400 text-sm lg:text-base mt-4">
          <span className="text-cyan-400">&gt;</span>
          <p className="tracking-wide">{contactData.subheading.toLowerCase().replace(/ /g, '_')}</p>
          <span className="animate-pulse">_</span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        {/* Left Column - Info */}
        <div className="space-y-6">
          {/* About/Description */}
          <div className="bg-black/30 border border-cyan-500/30 p-6 hover:border-cyan-500/50 transition-all relative">
            <div className="absolute top-1 left-1 w-2 h-2 border-l border-t border-cyan-500/50"></div>
            <div className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-cyan-500/50"></div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4 uppercase tracking-wide">About_Me</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              {contactData.description}
            </p>
          </div>

          {/* Availability Status */}
          <div className="bg-gradient-to-br from-green-500/10 to-black border border-green-500/30 p-6 relative">
            <div className="absolute top-1 left-1 w-2 h-2 border-l border-t border-green-500/50"></div>
            <div className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-cyan-500/50"></div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <h3 className="text-lg font-semibold text-green-400 uppercase tracking-wide">{contactData.availability.status}</h3>
            </div>
            <p className="text-cyan-400 mb-3 text-sm uppercase tracking-wide">Currently_Open_To:</p>
            <ul className="space-y-2">
              {contactData.availability.openTo.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="w-1.5 h-1.5 bg-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="bg-black/30 border border-cyan-500/30 p-6 hover:border-cyan-500/50 transition-all relative">
            <div className="absolute top-1 left-1 w-2 h-2 border-l border-t border-cyan-500/50"></div>
            <div className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-cyan-500/50"></div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-6 uppercase tracking-wide">Services_Offered</h3>
            <div className="space-y-4">
              {contactData.services.map((service, index) => (
                <div key={index} className="border-l-2 border-cyan-500/30 pl-4 hover:border-cyan-500 transition-colors duration-300">
                  <h4 className="text-gray-200 font-medium mb-1 text-sm uppercase tracking-wide">{service.title}</h4>
                  <p className="text-gray-400 text-xs">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <a 
              href={`mailto:${contactData.contactInfo.email}`}
              className="flex items-center gap-4 bg-cyan-500/10 border border-cyan-500/30 p-4 hover:bg-cyan-500/20 hover:border-cyan-500 transition-all duration-300 group relative"
            >
              <div className="absolute top-1 left-1 w-1.5 h-1.5 border-l border-t border-cyan-500/50"></div>
              <div className="p-2 bg-cyan-500/20 border border-cyan-500 group-hover:bg-cyan-500/40 transition-colors">
                <Mail size={18} className="text-cyan-400" />
              </div>
              <div>
                <p className="text-cyan-500/70 text-xs uppercase">Email</p>
                <p className="text-gray-200 font-medium text-sm">{contactData.contactInfo.email}</p>
              </div>
            </a>

            <a 
              href={`tel:${contactData.contactInfo.phone}`}
              className="flex items-center gap-4 bg-cyan-500/10 border border-cyan-500/30 p-4 hover:bg-cyan-500/20 hover:border-cyan-500 transition-all duration-300 group relative"
            >
              <div className="absolute top-1 left-1 w-1.5 h-1.5 border-l border-t border-cyan-500/50"></div>
              <div className="p-2 bg-cyan-500/20 border border-cyan-500 group-hover:bg-cyan-500/40 transition-colors">
                <Phone size={18} className="text-cyan-400" />
              </div>
              <div>
                <p className="text-cyan-500/70 text-xs uppercase">Phone</p>
                <p className="text-gray-200 font-medium text-sm">{contactData.contactInfo.phone}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 bg-cyan-500/10 border border-cyan-500/30 p-4 relative">
              <div className="absolute top-1 left-1 w-1.5 h-1.5 border-l border-t border-cyan-500/50"></div>
              <div className="p-2 bg-cyan-500/20 border border-cyan-500">
                <MapPin size={18} className="text-cyan-400" />
              </div>
              <div>
                <p className="text-cyan-500/70 text-xs uppercase">Location</p>
                <p className="text-gray-200 font-medium text-sm">{contactData.contactInfo.location}</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-black/30 border border-cyan-500/30 p-6 relative">
            <div className="absolute top-1 left-1 w-2 h-2 border-l border-t border-cyan-500/50"></div>
            <div className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-cyan-500/50"></div>
            <h3 className="text-lg font-semibold text-cyan-400 mb-4 uppercase tracking-wide">Social_Links</h3>
            <div className="flex gap-3">
              <a
                href={contactData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-500 hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={18} className="text-cyan-400" />
              </a>
              <a
                href={contactData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-500 hover:scale-110 transition-all duration-300"
              >
                <Github size={18} className="text-cyan-400" />
              </a>
              <a
                href={contactData.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-500 hover:scale-110 transition-all duration-300"
              >
                <Twitter size={18} className="text-cyan-400" />
              </a>
              <a
                href={contactData.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-500 hover:scale-110 transition-all duration-300"
              >
                <Instagram size={18} className="text-cyan-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="lg:sticky lg:top-8 h-fit">
          <div className="bg-black/30 border border-cyan-500/30 p-8 relative">
            <div className="absolute top-1 left-1 w-3 h-3 border-l border-t border-cyan-500/50"></div>
            <div className="absolute top-1 right-1 w-3 h-3 border-r border-t border-cyan-500/50"></div>
            <div className="absolute bottom-1 left-1 w-3 h-3 border-l border-b border-cyan-500/50"></div>
            <div className="absolute bottom-1 right-1 w-3 h-3 border-r border-b border-cyan-500/50"></div>

            <h3 className="text-xl font-semibold text-cyan-400 mb-6 uppercase tracking-wide">&gt; Send_Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-cyan-400 mb-2 uppercase tracking-wider">
                  Your_Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-cyan-500/5 border border-cyan-500/30 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:bg-cyan-500/10 transition-all duration-300"
                  placeholder="john_doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-cyan-400 mb-2 uppercase tracking-wider">
                  Your_Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-cyan-500/5 border border-cyan-500/30 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:bg-cyan-500/10 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-cyan-400 mb-2 uppercase tracking-wider">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-cyan-500/5 border border-cyan-500/30 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:bg-cyan-500/10 transition-all duration-300"
                  placeholder="project_inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-cyan-400 mb-2 uppercase tracking-wider">
                  Your_Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-cyan-500/5 border border-cyan-500/30 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:bg-cyan-500/10 transition-all duration-300 resize-none"
                  placeholder="tell_me_about_your_project..."
                />
              </div>

              <button
                type="submit"
                className="group relative w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-black font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] uppercase tracking-wide"
              >
                {/* Scan effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                
                {/* Corner pixels */}
                <span className="absolute top-0 left-0 w-2 h-2 bg-white"></span>
                <span className="absolute top-0 right-0 w-2 h-2 bg-white"></span>
                <span className="absolute bottom-0 left-0 w-2 h-2 bg-white"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 bg-white"></span>
                
                <span className="relative z-10">Send_Message</span>
                <Send size={20} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Terminal footer */}
     
    </article>
  );
}