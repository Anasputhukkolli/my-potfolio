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
    <article className="relative bg-black border border-[#1a1a1a] rounded-[32px] p-8 lg:p-12 shadow-2xl overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-white/3 to-transparent rounded-full blur-3xl -z-10" />
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] -z-10" />

      <header className="mb-12 relative">
        {/* Accent line decoration */}
        <div className="absolute -left-8 lg:-left-12 top-0 w-1 h-24 bg-gradient-to-b from-white via-gray-400 to-transparent" />
        
        <h2 className="text-4xl lg:text-5xl font-bold relative pb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          About me
          
          {/* Animated underline */}
          <span className="absolute bottom-0 left-0 h-[3px] w-16 bg-gradient-to-r from-white to-gray-500 rounded-full">
            <span className="absolute inset-0 bg-gradient-to-r from-white to-transparent animate-pulse" />
          </span>
        </h2>
        
        {/* Subtitle or tagline */}
        <p className="text-gray-500 text-sm lg:text-base mt-2 font-light tracking-wide">
          Crafting digital experiences with code
        </p>
      </header>

      {/* Content sections with spacing */}
      <div className="space-y-12">
        <section className="relative">
          <div className="absolute -left-4 top-2 w-2 h-2 bg-white/20 rounded-full" />
          <AboutText />
        </section>
        
        <section className="relative">
          <div className="absolute -left-4 top-2 w-2 h-2 bg-white/20 rounded-full" />
          <ProjectsList />
        </section>
        
        <section className="relative">
          <div className="absolute -left-4 top-2 w-2 h-2 bg-white/20 rounded-full" />
          <SkillsSection />
        </section>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </article>
  );
}