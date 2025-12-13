'use client';

import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'KALKUS',
    category: 'Website',
    image: '/images/project/kalkus.png',
    url: 'https://kalkus.in/',
    tags: ['Next.js',  'JavaScript', '', 'Tailwind CSS'],
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
    title: 'Zapp',
    category: 'Web Development',
    image: '/images/project/Zapq.png',
    url: 'http://zappq.com/',
    tags: ['HTML 5', 'CSS','Tailwind CSS', 'JavaScript' ],
  },
];

export default function ProjectsList() {
  // Show only first 6 projects (2 rows of 3)
  const displayedProjects = projects.slice(0, 6);

  return (
    <section className="mb-10">
      <header className="mb-8">
        <h2 className="text-3xl font-semibold relative pb-4 text-white">
          Projects
          <span className="absolute bottom-0 left-0 w-12 h-1 bg-white"></span>
        </h2>
      </header>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {displayedProjects.map((project) => (
          <li key={project.id} className="group">
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <figure className="relative w-full h-48 rounded-2xl overflow-hidden mb-4 bg-white/5 border border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </figure>

              <h3 className="text-xl font-medium mb-2 text-white group-hover:text-gray-300 transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-gray-400 mb-3">{project.category}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 bg-white/10 border border-white/20 text-gray-300 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </li>
        ))}
      </ul>

      {/* View More Button */}
      <div className="flex justify-center">
        <a
          href="/portfolio"
          className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/20 text-white rounded-2xl font-medium hover:bg-white/10 hover:border-white/30 transition-all duration-300"
        >
          <span>View All Projects</span>
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </section>
  );
}