import { Metadata } from 'next';
import AboutText from '@/components/About/AboutText';
import ProjectsList from '@/components/About/ProjectsList';
import SkillsSection from '@/components/About/SkillsSection';

export const metadata: Metadata = {
  title: 'About | Anas Portfolio',
  description:
    'Full Stack Web Developer and React Native Developer with experience in building web and mobile applications.',
};

const sections = [
  { id: '01', label: 'Bio', component: <AboutText /> },
  { id: '02', label: 'Projects', component: <ProjectsList /> },
  { id: '03', label: 'Skills', component: <SkillsSection /> },
];

export default function AboutPage() {
  return (
    <article className="min-h-screen bg-white px-6 py-12 lg:py-16 max-w-3xl mx-auto"
      style={{ fontFamily: "'Nunito', sans-serif" }}>

      <style>{`@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@700;800;900&display=swap');`}</style>

      {/* Header */}
      <header className="mb-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFE033] border-[2px] border-black shadow-[3px_3px_0_#000] mb-6">
          <span className="w-2 h-2 rounded-full bg-black" />
          <span className="text-xs font-black text-black uppercase tracking-widest">Available for work</span>
        </div>

        <h1 className="text-5xl font-black text-black leading-tight mb-3"
          style={{ fontFamily: "'Fredoka One', cursive" }}>
          Muhammed Anas  
        </h1>
        <p className="text-base font-bold text-gray-500 max-w-xl leading-relaxed">
          Full Stack & React Native developer — crafting thoughtful web and mobile experiences.
        </p>
      </header>

      {/* Divider */}
      <div className="h-[3px] bg-black rounded-full mb-10" />

      {/* Sections */}
      <div className="space-y-14">
        {sections.map(({ id, label, component }) => (
          <section key={id}>

            {/* Section label */}
            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-xs font-black text-[#FFE033] bg-black rounded-lg px-2.5 py-1 tabular-nums shadow-[3px_3px_0_#555]"
                style={{ fontFamily: "'Fredoka One', cursive" }}
              >
                {id}
              </span>
              <h2
                className="text-base font-black text-black uppercase tracking-widest"
                style={{ fontFamily: "'Fredoka One', cursive" }}
              >
                {label}
              </h2>
              <div className="h-[2px] flex-1 bg-black/10 rounded-full" />
            </div>

            {/* Content */}
            <div className="text-gray-600 font-bold leading-relaxed">
              {component}
            </div>

          </section>
        ))}
      </div>

    </article>
  );
}