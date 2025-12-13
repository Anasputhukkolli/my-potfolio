'use client';

import { useState } from 'react';
import { ExternalLink, Github, Figma, Play, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

// ========== PORTFOLIO DATA - EDIT HERE ==========
const portfolioData = {
  categories: ['All', 'Web design', 'Applications', 'Web development', 'Video editing', 'Design'],
  
  projects: [
    {
      id: 1,
      title: 'IEEE MEA SB',
      category: 'Web development',
      image: '/projects/ieee.jpg',
      description: 'IEEE MEA Student Branch website with event management and member portal',
      technologies: ['Next.js', 'Django', 'PostgreSQL'],
      links: {
        live: 'https://ieeemeasb.org',
        github: 'https://github.com/yourusername/ieee-mea'
      }
    },
    {
      id: 2,
      title: 'XT Website Design',
      category: 'Web design',
      image: '/projects/xt-design.jpg',
      description: 'Modern tech fest website design with vibrant colors',
      technologies: ['Figma', 'UI/UX'],
      links: {
        figma: 'https://figma.com/@yourdesign/xt-design'
      }
    },
    {
      id: 3,
      title: 'AI Chat',
      category: 'Applications',
      image: '/projects/aichat.jpg',
      description: 'AI-powered chatbot application with natural language processing',
      technologies: ['Python', 'Django', 'OpenAI API'],
      links: {
        live: 'https://aichat-demo.com',
        github: 'https://github.com/yourusername/ai-chat'
      }
    },
    {
      id: 4,
      title: 'Travel App UI',
      category: 'Web design',
      image: '/projects/travell.jpg',
      description: 'Travel booking app interface design',
      technologies: ['Figma', 'Adobe XD'],
      links: {
        figma: 'https://figma.com/@yourdesign/travel-ui',
        dribbble: 'https://dribbble.com/shots/travel-ui'
      }
    },
    {
      id: 5,
      title: 'Smart Shopping Cart',
      category: 'Applications',
      image: '/projects/cart.jpg',
      description: 'IoT-based shopping cart with RFID scanning and mobile app',
      technologies: ['React Native', 'Firebase', 'Arduino'],
      links: {
        github: 'https://github.com/yourusername/smart-cart',
        live: 'https://play.google.com/store/apps/details?id=com.smartcart'
      }
    },
    {
      id: 6,
      title: 'Brand Promo Video',
      category: 'Video editing',
      image: '/projects/promo.jpg',
      description: 'Corporate brand promotion video with motion graphics',
      technologies: ['After Effects', 'Premiere Pro'],
      links: {
        video: 'https://youtube.com/watch?v=your-video'
      }
    },
    {
      id: 7,
      title: 'E-Commerce Platform',
      category: 'Web development',
      image: '/projects/ecommerce.jpg',
      description: 'Full-featured e-commerce platform with admin dashboard',
      technologies: ['Django', 'React', 'PostgreSQL'],
      links: {
        live: 'https://shop-demo.com',
        github: 'https://github.com/yourusername/ecommerce'
      }
    },
    {
      id: 8,
      title: 'Event Poster Series',
      category: 'Design',
      image: '/projects/posters.jpg',
      description: 'Collection of event posters for college tech fest',
      technologies: ['Photoshop', 'Illustrator'],
      links: {
        dribbble: 'https://dribbble.com/shots/event-posters',
        behance: 'https://behance.net/gallery/event-posters'
      }
    },
    {
      id: 9,
      title: 'Tech Tutorial Series',
      category: 'Video editing',
      image: '/projects/tutorial.jpg',
      description: 'Educational video series on web development',
      technologies: ['Premiere Pro', 'After Effects'],
      links: {
        video: 'https://youtube.com/playlist?list=your-playlist'
      }
    },
    {
      id: 10,
      title: 'Mobile Banking App',
      category: 'Applications',
      image: '/projects/banking.jpg',
      description: 'Secure mobile banking application with biometric auth',
      technologies: ['React Native', 'Node.js', 'MongoDB'],
      links: {
        live: 'https://play.google.com/store/apps/details?id=com.banking',
        github: 'https://github.com/yourusername/banking-app'
      }
    },
    {
      id: 11,
      title: 'Dashboard UI Kit',
      category: 'Web design',
      image: '/projects/dashboard.jpg',
      description: 'Complete admin dashboard UI kit with dark mode',
      technologies: ['Figma', 'Design System'],
      links: {
        figma: 'https://figma.com/@yourdesign/dashboard-kit',
        dribbble: 'https://dribbble.com/shots/dashboard-ui'
      }
    },
    {
      id: 12,
      title: 'Portfolio Website',
      category: 'Web development',
      image: '/projects/portfolio.jpg',
      description: 'Personal portfolio with modern animations',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      links: {
        live: 'https://yourportfolio.com',
        github: 'https://github.com/yourusername/portfolio'
      }
    }
  ]
};
// ========== END OF PORTFOLIO DATA ==========

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(project => project.category === activeCategory);

  // Get icon based on link type
  const getLinkIcon = (type: string) => {
    switch(type) {
      case 'github': return <Github size={20} />;
      case 'figma': return <Figma size={20} />;
      case 'video': return <Play size={20} />;
      case 'dribbble': return <ImageIcon size={20} />;
      case 'behance': return <ImageIcon size={20} />;
      case 'live': return <ExternalLink size={20} />;
      default: return <ExternalLink size={20} />;
    }
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
          Portfolio
          <span className="absolute bottom-0 left-0 h-[3px] w-16 bg-gradient-to-r from-white to-gray-500 rounded-full">
            <span className="absolute inset-0 bg-gradient-to-r from-white to-transparent animate-pulse" />
          </span>
        </h2>
        <p className="text-gray-500 text-sm lg:text-base mt-2 font-light tracking-wide">
          Featured projects and work
        </p>
      </header>

      {/* Filter Categories */}
      <div className="mb-12">
        <ul className="flex flex-wrap gap-3">
          {portfolioData.categories.map((category) => (
            <li key={category}>
              <button 
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                  activeCategory === category
                    ? 'text-white bg-white/20 border-2 border-white/40 shadow-lg'
                    : 'text-gray-400 bg-white/5 border border-white/10 hover:text-white hover:bg-white/10 hover:border-white/20'
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-500"
          >
            {/* Project Image */}
            <div className="relative h-56 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
              {/* Placeholder for image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-sm">
                {project.title}
              </div>
              {/* Uncomment when you have images:
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              */}
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                {Object.entries(project.links).map(([type, url]) => (
                  <a
                    key={type}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-black rounded-xl hover:bg-gray-200 transition-all duration-300 hover:scale-110"
                    title={type.charAt(0).toUpperCase() + type.slice(1)}
                  >
                    {getLinkIcon(type)}
                  </a>
                ))}
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg text-xs text-gray-300">
                {project.category}
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gray-200 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No results message */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No projects found in this category.</p>
        </div>
      )}

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </article>
  );
}