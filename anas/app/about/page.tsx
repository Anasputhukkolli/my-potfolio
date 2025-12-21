import { Metadata } from 'next';
import AboutText from '@/components/About/AboutText';
import ProjectsList from '@/components/About/ProjectsList';
import SkillsSection from '@/components/About/SkillsSection';

export const metadata: Metadata = {
  title: 'About | Anas Portfolio',
  description: 'Full Stack Web Developer and React Native Developer with experience in building web and mobile applications.',
};

export default function AboutPage() {
  return (
    <article className="relative bg-black  p-8 lg:p-12  overflow-hidden font-mono">
      {/* Corner accents */}
      <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-cyan-500"></div>
      <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-pink-500"></div>
      <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-pink-500"></div>
      <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-cyan-500"></div>

      {/* Animated border lines */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-pulse"></div>
      <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-pulse"></div>
      <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-pink-500 to-transparent animate-pulse"></div>

      {/* Decorative pixels */}
      <div className="absolute top-8 left-8 w-2 h-2 bg-cyan-500 animate-pulse"></div>
      <div className="absolute top-8 right-8 w-2 h-2 bg-pink-500 animate-pulse"></div>
      <div className="absolute bottom-8 left-8 w-2 h-2 bg-pink-500 animate-pulse"></div>
      <div className="absolute bottom-8 right-8 w-2 h-2 bg-cyan-500 animate-pulse"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-50" />

      <header className="mb-12 relative z-10">
        {/* Section indicator */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-cyan-500"></div>
            <div className="w-2 h-2 bg-pink-500"></div>
            <div className="w-2 h-2 bg-cyan-500"></div>
          </div>
          <span className="text-xs text-cyan-400 uppercase tracking-widest">SECTION_01</span>
        </div>
        
        <h2 className="text-4xl lg:text-5xl font-bold relative pb-6 text-cyan-400 tracking-wider">
          {'ABOUT_ME'}
          
          {/* Animated underline */}
          <span className="absolute bottom-0 left-0 h-[2px] w-32 bg-gradient-to-r from-cyan-500 via-pink-500 to-cyan-500 shadow-[0_0_10px_rgba(0,255,255,0.5)]">
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-transparent animate-pulse" />
          </span>
        </h2>
        
        {/* Subtitle */}
        <div className="flex items-center gap-2  text-sm lg:text-base mt-4">
          <span className="text-cyan-400">&gt;</span>
          <p className="tracking-wide">crafting_digital_experiences_with_code</p>
          <span className="animate-pulse">_</span>
        </div>

       
      </header>

      {/* Content sections with spacing */}
      <div className="space-y-12 relative z-10">
        <section className="relative p-6 bg-cyan-500/5 border border-cyan-500/30 hover:border-cyan-500/50 transition-all">
          {/* Section header */}
          <div className="flex items-center gap-2 mb-4 text-xs text-cyan-400">
            <span className="font-bold">[01]</span>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
            <span className="uppercase tracking-wider">BIO_DATA</span>
          </div>
          <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-cyan-500/50"></div>
          <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-pink-500/50"></div>
          <AboutText />
        </section>
        
        <section className="relative p-6 bg-cyan-500/5 border border-cyan-500/30 hover:border-cyan-500/50 transition-all">
          {/* Section header */}
          <div className="flex items-center gap-2 mb-4 text-xs text-cyan-400">
            <span className="font-bold">[02]</span>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
            <span className="uppercase tracking-wider">PROJECTS_LOG</span>
          </div>
          <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-cyan-500/50"></div>
          <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-pink-500/50"></div>
          <ProjectsList />
        </section>
        
        <section className="relative p-6 bg-cyan-500/5 border border-cyan-500/30 hover:border-cyan-500/50 transition-all">
          {/* Section header */}
          <div className="flex items-center gap-2 mb-4 text-xs text-cyan-400">
            <span className="font-bold">[03]</span>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
            <span className="uppercase tracking-wider">SKILLS_MATRIX</span>
          </div>
          <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-cyan-500/50"></div>
          <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-pink-500/50"></div>
          <SkillsSection />
        </section>
      </div>

      
    </article>
  );
}