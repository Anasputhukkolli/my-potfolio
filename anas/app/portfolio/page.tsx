"use client";

import { useState } from "react";
import {
  ExternalLink,
  Github,
  Figma,
  Play,
  Image as ImageIcon,
} from "lucide-react";
import Image from "next/image";

// ========== PORTFOLIO DATA - EDIT HERE ==========
const portfolioData = {
  categories: [
    "All",
    "Web design",
    "Applications",
    "Web development",
    "Video editing",
    "Design",
  ],

  projects: [
    {
      id: 1,
      title: "IEEE MEA SB",
      category: "Web development",
      image: "/images/project/ieeemea.png",
      description:
        "IEEE MEA Student Branch website with event management and member portal",
      technologies: ["WORD PRESS", "Digital Ocean"],
      links: {
        live: "https://www.ieeemeasb.org/",
      },
    },
    {
      id: 2,
      title: "XT Website Design+Development",
      category: "Web design",
      image: "/images/project/xt.png",
      description: "Modern tech fest website design with vibrant colors",
      technologies: [
        "Figma",
        "UI/UX",
        "HTML 5",
        "CSS",
        "JavaScript",
        "BOOTSTRAP",
      ],
      links: {
        figma: "https://figma.com/@yourdesign/xt-design",
        live: "https://anasputhukkolli.github.io/xtrinea/",
      },
    },
    {
      id: 3,
      title: "AI Chat",
      category: "Applications",
      image: "/projects/aichat.jpg",
      description:
        "AI-powered chatbot application with natural language processing",
      technologies: ["Python", "Django", "Groq API"],
      links: {
        github: "https://github.com/Anasputhukkolli/My_Chat_Ai.git",
      },
    },
    {
      id: 4,
      title: "Travel App Ui Development",
      category: "Web development",
      image: "/images/project/heaven.png",
      description: "Travel booking app interface Development",
      technologies: ["HTML 5", "CSS", "JavaScript"],
      links: {
        github: "https://anasputhukkolli.github.io/travel/",
      },
    },
    {
      id: 5,
      title: "KALKUS",
      category: "Web development",
      image: "/images/project/kalkus.png",
      description: "Digital Marketing Agency website with modern design",
      technologies: ["Next.js", "JavaScript", "Tailwind CSS"],
      links: {
        live: "https://kalkus.in/",
      },
    },
    // {
    //   id: 6,
    //   title: "Brand Promo Video",
    //   category: "Video editing",
    //   image: "/projects/promo.jpg",
    //   description: "Corporate brand promotion video with motion graphics",
    //   technologies: ["After Effects", "Premiere Pro"],
    //   links: {
    //     video: "https://youtube.com/watch?v=your-video",
    //   },
    // },
    {
      id: 6,
      title: "Zappq",
      category: "Web development",
      image: "/images/project/exclusive.png",
      description: "EXCLUSIVE is a sleek and minimalistic web interface designed for modern web projects ",
      technologies: ["HTML 5", "CSS", "Tailwind CSS", "JavaScript"],
      links: {
        live: "https://anasputhukkolli.github.io/exclusive/",
        github: "https://github.com/Anasputhukkolli/exclusive.git",
      },
    },
    {
      id: 7,
      title: "TookDeal",
      category: "Web development",
      image: "/images/project/tookdeal.png",
      description: "Full-featured e-commerce platform with admin dashboard",
      technologies: ["Django", "React", "PostgreSQL"],
      links: {
        live: "https://www.tookdeal.com",
      },
    },
    // {
    //   id: 8,
    //   title: "Event Poster Series",
    //   category: "Design",
    //   image: "/projects/posters.jpg",
    //   description: "Collection of event posters for college tech fest",
    //   technologies: ["Photoshop", "Illustrator"],
    //   links: {
    //     dribbble: "https://dribbble.com/shots/event-posters",
    //     behance: "https://behance.net/gallery/event-posters",
    //   },
    // },
    {
      id: 8,
      title: "Evora",
      category: "Web development",
      image: "/images/project/evora.png",
      description: "A Ai-based platform to streamline event organization and participation in colleges. ",
      technologies: ["HTML 5", "CSS", "JavaScript","Django","Python","api integration"],
      links: {
        live: "https://github.com/Anasputhukkolli/Evora-Ai_based_college_event_management_system-.git",
        github: "https://github.com/Anasputhukkolli/Evora-Ai_based_college_event_management_system-.git",
      },
    },
    {
      id: 9,
      title: "Quadware",
      category: "Web development",
      image: "/images/project/qtr.png",
      description: "A Ai-based platform to streamline event organization and participation in colleges. ",
      technologies: ["Next js","Typescript","api integration","Tailwind CSS"],
      links: {
        live: "https://quadvare.vercel.app/",
        github: "https://github.com/Anasputhukkolli/quadvare.git",
      },
    },
    // {
    //   id: 9,
    //   title: "Tech Tutorial Series",
    //   category: "Video editing",
    //   image: "/projects/tutorial.jpg",
    //   description: "Educational video series on web development",
    //   technologies: ["Premiere Pro", "After Effects"],
    //   links: {
    //     video: "https://youtube.com/playlist?list=your-playlist",
    //   },
    // },
    {
      id: 10,
      title: "Aima BloodDonationApp",
      category: "Applications",
      image: "/images/project/aima.png",
      description: "Secure mobile banking application with biometric auth",
      technologies: ["Flutter", "Dart", "Android studio"],
      links: {
        github: "https://github.com/shahinshpbr10/BloodDonationApp.git",
      },
    },
    {
      id: 11,
      title: "Dashboard UI Kit",
      category: "Web design",
      image: "/projects/dashboard.jpg",
      description: "Complete admin dashboard UI kit with dark mode",
      technologies: ["Figma", "Design System"],
      links: {
        figma: "https://figma.com/@yourdesign/dashboard-kit",
        dribbble: "https://dribbble.com/shots/dashboard-ui",
      },
    },
    {
      id: 12,
      title: "Zappq",
      category: "Web development",
      image: "/images/project/Zapq.png",
      description: "Personal portfolio with modern animations",
      technologies: ["HTML 5", "CSS", "Tailwind CSS", "JavaScript"],
      links: {
        live: "http://zappq.com/",
        github: "https://github.com/Anasputhukkolli/zapq.git",
      },
    },
    {
      id: 13,
      title: "Tacs Mea",
      category: "Web development",
      image: "/images/project/tacs.png",
      description: "Computer science department website",
      technologies: ["React js", "CSS", "Tailwind CSS", "JavaScript"],
      links: {
        live: "http://tacsmea.org/",
      },
    },
    {
      id: 14,
      title: "Euphoria",
      category: "Web development",
      image: "/images/project/euphoria.png",
      description: "Ecommerce website Frontent for fashion products",
      technologies: ["html", "CSS", "Tailwind CSS", "JavaScript"],
      links: {
        live: "https://anasputhukkolli.github.io/euphoria/",
      },
    },
    {
      id: 15,
      title: "Talrop GPT",
      category: "Web development",
      image: "/images/project/",
      description: "Ai Chatbot application ",
      technologies: ["llm", "Next js", "TypeScript", "Tailwind CSS","lamma models"],
      links: {
        live: "https://github.com/hawks23/talrop_gpt.git",
      },
    },
    {
      id: 16,
      title: "Wibbitz",
      category: "Web development",
      image: "/images/project/wibbitz.png",
      description: "Ai Chatbot application ",
      technologies: ["Django", "Html", "Python", " CSS","JavaScript"],
      links: {
        live: "https://github.com/Anasputhukkolli/backwibbits.git",
      },
    },
  ],
};
// ========== END OF PORTFOLIO DATA ==========

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter(
          (project) => project.category === activeCategory
        );

  const getLinkIcon = (type: string) => {
    switch (type) {
      case "github":
        return <Github size={20} />;
      case "figma":
        return <Figma size={20} />;
      case "video":
        return <Play size={20} />;
      case "dribbble":
        return <ImageIcon size={20} />;
      case "behance":
        return <ImageIcon size={20} />;
      case "live":
        return <ExternalLink size={20} />;
      default:
        return <ExternalLink size={20} />;
    }
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
          <span className="text-xs text-cyan-400 uppercase tracking-widest">
            PROJECTS_ARCHIVE
          </span>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold relative pb-6 text-cyan-400 tracking-wider">
          {"PORTFOLIO"}
          <span className="absolute bottom-0 left-0 h-[2px] w-32 bg-cyan-500 shadow-[0_0_10px_rgba(0,255,255,0.5)]"></span>
        </h2>

        <div className="flex items-center gap-2 text-cyan-400 text-sm lg:text-base mt-4">
          <span className="text-cyan-400">&gt;</span>
          <p className="tracking-wide">featured_projects_and_work</p>
          <span className="animate-pulse">_</span>
        </div>
      </header>

      {/* Filter Categories */}
      <div className="mb-12 relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs text-cyan-400 uppercase tracking-widest font-bold">
            FILTER_BY:
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 to-transparent"></div>
        </div>
        <ul className="flex flex-wrap gap-3">
          {portfolioData.categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => setActiveCategory(category)}
                className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 uppercase tracking-wide ${
                  activeCategory === category
                    ? "text-cyan-400 bg-cyan-500/20 border border-cyan-500 shadow-[0_0_10px_rgba(0,255,255,0.3)]"
                    : "text-gray-400 bg-cyan-500/5 border border-cyan-500/30 hover:text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50"
                }`}
              >
                {activeCategory === category && (
                  <>
                    <span className="absolute top-0 left-0 w-1.5 h-1.5 border-l border-t border-cyan-400"></span>
                    <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-r border-b border-cyan-400"></span>
                  </>
                )}
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 relative z-10">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="group relative bg-black/30 border border-cyan-500/30 overflow-hidden hover:border-cyan-500 transition-all duration-500"
          >
            {/* Corner decorations */}
            <div className="absolute top-1 left-1 w-2 h-2 border-l border-t border-cyan-500/50 z-20"></div>
            <div className="absolute top-1 right-1 w-2 h-2 border-r border-t border-cyan-500/50 z-20"></div>
            <div className="absolute bottom-1 left-1 w-2 h-2 border-l border-b border-cyan-500/50 z-20"></div>
            <div className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-cyan-500/50 z-20"></div>

            {/* Project number */}
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-black border border-cyan-500/50 flex items-center justify-center text-xs text-cyan-400 font-bold z-20">
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* Project Image */}
            <div className="relative h-56 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
              {/* Placeholder for image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-80"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-10">
                {Object.entries(project.links).map(([type, url]) => (
                  <a
                    key={type}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-cyan-500/20 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/40 transition-all duration-300 hover:scale-110"
                    title={type.charAt(0).toUpperCase() + type.slice(1)}
                  >
                    {getLinkIcon(type)}
                  </a>
                ))}
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 border border-cyan-500/50 text-xs text-cyan-400 uppercase tracking-wider z-10">
                {project.category}
              </div>

              {/* Scan line effect */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity z-10"></div>
            </div>

            {/* Project Info */}
            <div className="p-5 bg-black/50">
              <h3 className="text-lg font-semibold text-gray-200 mb-2 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-cyan-500/20">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/30 text-xs text-gray-400 uppercase tracking-wide"
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
        <div className="text-center py-12 relative z-10">
          <div className="inline-block p-6 bg-cyan-500/5 border border-cyan-500/30">
            <p className="text-cyan-400 text-lg font-mono">
              &gt; NO_PROJECTS_FOUND_IN_THIS_CATEGORY
            </p>
          </div>
        </div>
      )}

      {/* Get More Section */}
      <div className="mt-16 relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-cyan-500"></div>
            <div className="w-2 h-2 bg-cyan-500"></div>
            <div className="w-2 h-2 bg-cyan-500"></div>
          </div>
          <span className="text-xs text-cyan-400 uppercase tracking-widest">
            CONNECT_WITH_ME
          </span>
        </div>

        <div className="bg-black/30 border border-cyan-500/30 p-8">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 tracking-wider">
            {">"} GET_MORE_WORK
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl">
            Explore more of my work and connect with me on these platforms:
          </p>

          <div className="flex flex-wrap gap-4">
            {/* GitHub Link */}
            <a
              href="https://github.com/anasputhukkolli"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-4 bg-cyan-500/5 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-500 transition-all duration-300"
            >
              <Github size={24} className="text-cyan-400" />
              <div>
                <p className="text-cyan-400 font-medium">GitHub</p>
                <p className="text-gray-500 text-sm">View repositories</p>
              </div>
              <ExternalLink
                size={16}
                className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity ml-auto"
              />
            </a>

            {/* Dribbble Link */}
            <a
              href="https://dribbble.com/anasputhukkolli"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-4 bg-cyan-500/5 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-500 transition-all duration-300"
            >
              <ImageIcon size={24} className="text-cyan-400" />
              <div>
                <p className="text-cyan-400 font-medium">Dribbble</p>
                <p className="text-gray-500 text-sm">Design shots</p>
              </div>
              <ExternalLink
                size={16}
                className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity ml-auto"
              />
            </a>

            {/* Figma Link */}
            <a
              href="https://figma.com/@yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-4 bg-cyan-500/5 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-500 transition-all duration-300"
            >
              <Figma size={24} className="text-cyan-400" />
              <div>
                <p className="text-cyan-400 font-medium">Figma</p>
                <p className="text-gray-500 text-sm">Design files</p>
              </div>
              <ExternalLink
                size={16}
                className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity ml-auto"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Terminal footer */}
    </article>
  );
}
