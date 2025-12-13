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
  return (
    <section>
      <header className="mb-8">
        <h2 className="text-3xl font-semibold relative pb-4">
          Skills
          <span className="absolute bottom-0 left-0 w-12 h-1 bg-orange-500"></span>
        </h2>
      </header>

      <div className="space-y-6">
        {/* Frontend */}
        <div>
          <h4 className="text-lg font-medium text-gray-300 mb-3">Frontend</h4>
          <div className="flex flex-wrap gap-3">
            {skills.frontend.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#2b2d42] text-gray-200 rounded-lg text-sm hover:bg-orange-500 hover:text-white transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div>
          <h4 className="text-lg font-medium text-gray-300 mb-3">Backend</h4>
          <div className="flex flex-wrap gap-3">
            {skills.backend.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#2b2d42] text-gray-200 rounded-lg text-sm hover:bg-orange-500 hover:text-white transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Database */}
        <div>
          <h4 className="text-lg font-medium text-gray-300 mb-3">Database</h4>
          <div className="flex flex-wrap gap-3">
            {skills.database.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#2b2d42] text-gray-200 rounded-lg text-sm hover:bg-orange-500 hover:text-white transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h4 className="text-lg font-medium text-gray-300 mb-3">Tools</h4>
          <div className="flex flex-wrap gap-3">
            {skills.tools.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#2b2d42] text-gray-200 rounded-lg text-sm hover:bg-orange-500 hover:text-white transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}