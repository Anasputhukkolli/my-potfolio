"use client";
const skills = {
  Frontend: ['HTML', 'CSS / Sass', 'JavaScript', 'React', 'Bootstrap', 'jQuery'],
  Backend: ['Python', 'Django', 'Node.js', 'Java', 'C', 'MERN'],
  Database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Digital Ocean', 'XAMPP'],
  Tools: ['Figma', 'Photoshop', 'Canva', 'Git', 'CapCut'],
};

const groupStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
};

const catStyle: React.CSSProperties = {
  fontFamily: "'Fredoka One', cursive",
  fontSize: 11,
  letterSpacing: '.18em',
  textTransform: 'uppercase',
  color: '#888',
};

const pillStyle: React.CSSProperties = {
  background: '#FFE033',
  border: '2.5px solid #111',
  borderRadius: 10,
  padding: '6px 14px',
  fontFamily: "'Fredoka One', cursive",
  fontSize: 13,
  color: '#111',
  boxShadow: '3px 3px 0 #111',
  transition: 'transform .15s, box-shadow .15s, background .15s',
  cursor: 'default',
};

export default function SkillsSection() {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} style={groupStyle}>
          <p style={catStyle}>{category}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {items.map((skill) => (
              <span
                key={skill}
                style={pillStyle}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = 'translate(-2px,-2px)';
                  el.style.boxShadow = '5px 5px 0 #111';
                  el.style.background = '#fff';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = '';
                  el.style.boxShadow = '3px 3px 0 #111';
                  el.style.background = '#FFE033';
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}