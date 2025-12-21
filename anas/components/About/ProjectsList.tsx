'use client';

import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'KALKUS',
    category: 'Website',
    image: '/images/project/kalkus.png',
    url: 'https://kalkus.in/',
    tags: ['Next.js',  'JavaScript', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: 'IEEE MEA SB',
    category: 'Website',
    image: '/images/project/ieeemea.png',
    url: 'https://www.ieeemeasb.org/',
    tags: ['WORD PRESS', 'Digital Ocean'],
  },
  {
    id: 3,
    title: 'xtrinia6',
    category: 'Website',
    image: '/images/project/Xt.png',
    url: 'https://anasputhukkolli.github.io/xtrinea/',
    tags: ['HTML 5', 'CSS', 'JavaScript', 'BOOTSTRAP'],
  },
  {
    id: 4,
    title: 'TookDeal',
    category: 'Web Site',
    image: '/images/project/tookdeal.png',
    url: 'https://www.tookdeal.com',
    tags: ['Next.js', 'Tailwind CSS', 'JavaScript', 'Supabase', 'Groq ApI'],
  },
  {
    id: 5,
    title: 'Aima BloodDonationApp',
    category: 'Application',
    image: '/images/project/aima.png',
    url: 'https://github.com/shahinshpbr10/BloodDonationApp.git',
    tags: ['Flutter', 'Dart', 'Android studio'],
  },
  {
    id: 6,
    title: 'Zappq',
    category: 'Web Development',
    image: '/images/project/Zapq.png',
    url: 'http://zappq.com/',
    tags: ['HTML 5', 'CSS','Tailwind CSS', 'JavaScript'],
  },
];

export default function ProjectsList() {
  const displayedProjects = projects.slice(0, 6);

  return (
    <section className="mb-10">
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs text-cyan-400 uppercase tracking-widest font-mono font-bold">PROJECTS_ARCHIVE</span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
        </div>
        <h2 className="text-3xl font-semibold relative pb-4 text-cyan-400 font-mono">
          {'<RECENT_WORK/>'}
          <span className="absolute bottom-0 left-0 w-16 h-[2px] bg-gradient-to-r from-cyan-500 to-pink-500"></span>
        </h2>
      </header>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {displayedProjects.map((project, index) => (
          <li key={project.id} className="group relative">
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div className="relative h-full p-4 bg-black/30 border border-cyan-500/30 hover:border-cyan-500 transition-all font-mono">
                {/* Corner decorations */}
                <div className="absolute top-1 left-1 w-2 h-2 border-l border-t border-cyan-500/50"></div>
                <div className="absolute top-1 right-1 w-2 h-2 border-r border-t border-pink-500/50"></div>
                <div className="absolute bottom-1 left-1 w-2 h-2 border-l border-b border-pink-500/50"></div>
                <div className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-cyan-500/50"></div>

                {/* Project number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-black border border-cyan-500/50 flex items-center justify-center text-xs text-cyan-400 font-bold">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* External link icon */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all z-10">
                  <ExternalLink className="w-4 h-4 text-cyan-400" />
                </div>

                {/* Scan line effect */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity"></div>

                <figure className="relative w-full h-48 overflow-hidden mb-4 bg-black border border-cyan-500/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-80"
                  />
                  {/* Image overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity"></div>
                </figure>

                {/* Project info */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-medium text-gray-200 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs text-cyan-500/70 uppercase tracking-wider">
                    {project.category}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-cyan-500/20">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2 py-1 bg-cyan-500/10 border border-cyan-500/30 text-gray-400 uppercase tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>

      {/* View More Button */}
      <div className="flex justify-center">
        <a
          href="/portfolio"
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 font-medium hover:bg-cyan-500/20 hover:border-cyan-500 transition-all duration-300 font-mono overflow-hidden"
        >
          {/* Corner accents */}
          <span className="absolute top-0 left-0 w-2 h-2 border-l border-t border-cyan-500"></span>
          <span className="absolute top-0 right-0 w-2 h-2 border-r border-t border-pink-500"></span>
          <span className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-pink-500"></span>
          <span className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-cyan-500"></span>

          {/* Scan line */}
          <span className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></span>

          <span className="relative z-10">&gt; VIEW_ALL_PROJECTS</span>
          <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </section>
  );
}