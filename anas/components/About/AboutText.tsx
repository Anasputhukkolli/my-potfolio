export default function AboutText() {
  const paragraphs = [
    'BTech student with solid skills in Django full-stack development and UI/UX design, gained through real-world projects. I also bring experience in video editing, content creation, and digital design — allowing me to think beyond just code.',
    'Through projects, workshops, and team initiatives, I have built strong leadership, communication, and problem-solving skills.',
    'I learn fast, adapt quickly, and deliver practical solutions — not just theoretical ideas. A confident, continuous learner who turns skills into real results.',
  ];

  return (
    <section className="space-y-4">
      {paragraphs.map((text, i) => (
        <div
          key={i}
          className="flex gap-4 bg-[#FFE033] border-[3px] border-black rounded-2xl px-5 py-4 shadow-[4px_4px_0_#000]"
        >
          <span
            className="text-black font-black text-lg leading-none mt-0.5 flex-shrink-0"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            {String(i + 1).padStart(2, '0')}
          </span>
          <p className="text-sm font-bold text-black leading-relaxed">{text}</p>
        </div>
      ))}
    </section>
  );
}