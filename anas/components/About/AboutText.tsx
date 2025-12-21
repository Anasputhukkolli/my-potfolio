export default function AboutText() {
  return (
    <section className="mb-10 relative">
      {/* Terminal-style text container */}
      <div className="relative p-6 bg-black/30 border border-cyan-500/20 font-mono">
        {/* Scan line effect */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
        
       

        {/* Content with line numbers */}
        <div className="space-y-4">
          <div className="flex gap-4">
            <span className="text-cyan-500/40 text-sm select-none font-bold min-w-[2rem]">01</span>
            <p className="text-gray-300 leading-relaxed text-base flex-1">
              I am a BTech student with solid skills in Django full-stack development and UI/UX design, gained through real-world projects. I also bring experience in video editing, content creation, and digital design, allowing me to think beyond just code.
            </p>
          </div>

          <div className="flex gap-4">
            <span className="text-cyan-500/40 text-sm select-none font-bold min-w-[2rem]">02</span>
            <p className="text-gray-300 leading-relaxed text-base flex-1">
              By working on projects, workshops, and team initiatives, I have built leadership, communication, and problem-solving skills.
            </p>
          </div>

          <div className="flex gap-4">
            <span className="text-cyan-500/40 text-sm select-none font-bold min-w-[2rem]">03</span>
            <p className="text-gray-300 leading-relaxed text-base flex-1">
              A company needs me because I learn fast, adapt quickly, and deliver practical solutions, not just theoretical ideas. I am not just a student—I am a confident, continuous learner who turns skills into real results.
            </p>
          </div>
        </div>

        {/* End of file indicator */}
        

        {/* Corner decorations */}
        <div className="absolute top-1 left-1 w-2 h-2 border-l border-t border-cyan-500/50"></div>
        <div className="absolute top-1 right-1 w-2 h-2 border-r border-t border-pink-500/50"></div>
        <div className="absolute bottom-1 left-1 w-2 h-2 border-l border-b border-pink-500/50"></div>
        <div className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-cyan-500/50"></div>
      </div>
    </section>
  );
}