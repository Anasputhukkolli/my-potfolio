const skills = {
  frontend: [
    'JavaScript',
    'Sass',
    'Bootstrap',
    'Css/Scss',
    'Html',
    'React Js',
    'jQuery',
  ],
  backend: ['Java', 'Python', 'Django', 'Node Js', 'C', 'Mern'],
  database: ['MongoDB', 'Postgress', 'My sql', 'Digital Ocean', 'XAMPP'],
  tools: ['Photo Shop', 'Git', 'Canva', 'Cap Cut', 'Figma'],
};

export default function SkillsSection() {
  const categories = [
    { key: 'frontend', label: 'FRONTEND_STACK', color: 'cyan' },
    { key: 'backend', label: 'BACKEND_STACK', color: 'pink' },
    { key: 'database', label: 'DATABASE_SYSTEMS', color: 'cyan' },
    { key: 'tools', label: 'TOOLS', color: 'pink' },
  ];

  return (
    <section className="font-mono">
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs text-cyan-400 uppercase tracking-widest font-bold">SKILLS_MATRIX</span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
        </div>
        <h2 className="text-3xl font-semibold relative pb-4 text-cyan-400">
          {'<TECH_STACK/>'}
          <span className="absolute bottom-0 left-0 w-16 h-[2px] bg-gradient-to-r from-cyan-500 to-pink-500"></span>
        </h2>
      </header>

      <div className="space-y-6">
        {categories.map((category, catIndex) => (
          <div key={category.key} className="relative p-5 bg-black/30 border border-cyan-500/30 hover:border-cyan-500/50 transition-all">
            {/* Corner decorations */}
            <div className="absolute top-1 left-1 w-2 h-2 border-l border-t border-cyan-500/50"></div>
            <div className="absolute top-1 right-1 w-2 h-2 border-r border-t border-pink-500/50"></div>
            <div className="absolute bottom-1 left-1 w-2 h-2 border-l border-b border-pink-500/50"></div>
            <div className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-cyan-500/50"></div>

            {/* Category header */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs text-cyan-400 font-bold">
                [{String(catIndex + 1).padStart(2, '0')}]
              </span>
              <h4 className="text-sm font-medium text-cyan-400 uppercase tracking-wider">
                {category.label}
              </h4>
              <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 to-transparent"></div>
              <span className="text-xs text-cyan-500/50">
                {skills[category.key as keyof typeof skills].length} items
              </span>
            </div>

            {/* Skills grid */}
            <div className="flex flex-wrap gap-2">
              {skills[category.key as keyof typeof skills].map((skill, index) => (
                <span
                  key={index}
                  className="group relative px-3 py-2 bg-cyan-500/10 border border-cyan-500/30 text-gray-300 text-sm hover:bg-cyan-500/20 hover:border-cyan-500 hover:text-cyan-400 transition-all cursor-default uppercase tracking-wide"
                >
                  {/* Hover corner accents */}
                  <span className="absolute top-0 left-0 w-1 h-1 border-l border-t border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="absolute bottom-0 right-0 w-1 h-1 border-r border-b border-pink-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Summary footer */}
     
    </section>
  );
}