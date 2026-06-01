"use client";

import { useState } from "react";
import { ExternalLink, Github, Figma, Play, Image as ImageIcon } from "lucide-react";

const fredoka = { fontFamily: "'Fredoka One', cursive" } as const;

const portfolioData = {
  projects: [
    {
      id: 1,
      title: "IEEE MEA SB",
      category: "Web development",
      image: "/images/project/ieeemea.png",
      description: "IEEE MEA Student Branch website with event management and member portal",
      technologies: ["WordPress", "Digital Ocean"],
      links: { live: "https://www.ieeemeasb.org/" },
    },
  ],
};

const getLinkIcon = (type: string) => {
  switch (type) {
    case "github":   return <Github size={13} />;
    case "figma":    return <Figma size={13} />;
    case "video":    return <Play size={13} />;
    case "dribbble": return <ImageIcon size={13} />;
    default:         return <ExternalLink size={13} />;
  }
};

const getLinkLabel = (type: string) => {
  switch (type) {
    case "github":   return "GitHub";
    case "figma":    return "Figma";
    case "video":    return "Video";
    case "dribbble": return "Dribbble";
    case "live":     return "Live";
    default:         return "Link";
  }
};

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === activeCategory);

  return (
    <article className="min-h-screen bg-white px-6  max-w-5xl mx-auto"
      style={{ fontFamily: "'Nunito', sans-serif" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@700;800;900&display=swap');
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .port-card {
          display: flex; flex-direction: column;
          border: 2.5px solid #111;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 5px 5px 0 #111;
          background: #fff;
          transition: transform .18s cubic-bezier(.34,1.56,.64,1), box-shadow .18s;
          animation: fade-up .4s ease both;
        }
        .port-card:hover {
          transform: translate(-3px,-3px);
          box-shadow: 8px 8px 0 #111;
        }
        .port-tag {
          font-family: 'Fredoka One', cursive;
          font-size: 11px;
          background: #FFE033;
          border: 2px solid #111;
          border-radius: 8px;
          padding: 3px 9px;
          color: #111;
          box-shadow: 2px 2px 0 #111;
        }
        .filter-btn {
          font-family: 'Fredoka One', cursive;
          font-size: 12px;
          letter-spacing: .04em;
          padding: 7px 16px;
          border-radius: 10px;
          border: 2.5px solid #111;
          cursor: pointer;
          transition: transform .15s, box-shadow .15s, background .15s;
          box-shadow: 3px 3px 0 #111;
        }
        .filter-btn:hover {
          transform: translate(-1px,-1px);
          box-shadow: 4px 4px 0 #111;
        }
        .connect-card {
          display: flex; align-items: center; gap: 12px;
          border: 2.5px solid #111;
          border-radius: 14px;
          padding: 14px 18px;
          box-shadow: 4px 4px 0 #111;
          background: #fff;
          text-decoration: none;
          transition: transform .18s cubic-bezier(.34,1.56,.64,1), box-shadow .18s, background .18s;
        }
        .connect-card:hover {
          transform: translate(-2px,-2px);
          box-shadow: 6px 6px 0 #111;
          background: #FFE033;
        }
        .link-btn {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'Fredoka One', cursive;
          font-size: 12px;
          color: #111;
          text-decoration: none;
          background: #fff;
          border: 2px solid #111;
          border-radius: 8px;
          padding: 4px 10px;
          box-shadow: 2px 2px 0 #111;
          transition: background .15s, transform .15s, box-shadow .15s;
        }
        .link-btn:hover {
          background: #FFE033;
          transform: translate(-1px,-1px);
          box-shadow: 3px 3px 0 #111;
        }
      `}</style>

      {/* Header */}
      <header className="mb-10" style={{ animation: 'fade-up .4s ease both' }}>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
          style={{ background: '#FFE033', border: '2px solid #111', boxShadow: '3px 3px 0 #111' }}>
          <span style={{ ...fredoka, fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase' }}>Work</span>
        </div>
        <h1 style={{ ...fredoka, fontSize: 48, color: '#111', lineHeight: 1.05, margin: 0 }}>Portfolio</h1>
        <p style={{ ...fredoka, fontSize: 15, color: '#888', marginTop: 8 }}>Projects, designs and experiments.</p>
      </header>

      <div style={{ height: 3, background: '#111', borderRadius: 2, marginBottom: 28 }} />

      {/* Filter tabs */}
      

      {/* Projects grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {filteredProjects.map((project, i) => (
            <div key={project.id} className="port-card" style={{ animationDelay: `${i * 0.08}s` }}>

              {/* Image */}
              <div style={{ position: 'relative', height: 180, overflow: 'hidden', borderBottom: '2.5px solid #111', background: '#f5f5f5' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span style={{
                  position: 'absolute', top: 10, left: 10,
                  ...fredoka, fontSize: 10,
                  background: '#FFE033', border: '2px solid #111',
                  borderRadius: 8, padding: '3px 10px',
                  boxShadow: '2px 2px 0 #111', color: '#111',
                  letterSpacing: '.06em',
                }}>
                  {project.category}
                </span>
              </div>

              {/* Info */}
              <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
                <div>
                  <h3 style={{ ...fredoka, fontSize: 16, color: '#111', margin: 0 }}>{project.title}</h3>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#888', marginTop: 4, lineHeight: 1.5 }}
                    className="line-clamp-2">{project.description}</p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className="port-tag">{tech}</span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: 8, marginTop: 'auto', paddingTop: 10, borderTop: '2px solid #eee' }}>
                  {Object.entries(project.links).map(([type, url]) => (
                    <a key={type} href={url} target="_blank" rel="noopener noreferrer" className="link-btn">
                      {getLinkIcon(type)}
                      {getLinkLabel(type)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ padding: '60px 0', textAlign: 'center', ...fredoka, color: '#aaa', fontSize: 14 }}>
          No projects in this category yet.
        </div>
      )}

      {/* Connect section */}
      <div style={{ height: 3, background: '#111', borderRadius: 2, marginBottom: 28 }} />

      <section>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
          style={{ background: '#FFE033', border: '2px solid #111', boxShadow: '3px 3px 0 #111' }}>
          <span style={{ ...fredoka, fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase' }}>Find more work</span>
        </div>
        <div className="flex flex-wrap gap-3">
          {[
            { label: "GitHub",   sub: "View repositories", icon: <Github size={18} />,    url: "https://github.com/anasputhukkolli" },
            { label: "Dribbble", sub: "Design shots",       icon: <ImageIcon size={18} />, url: "https://dribbble.com/anasputhukkolli" },
            { label: "Figma",    sub: "Design files",       icon: <Figma size={18} />,     url: "https://figma.com/@yourusername" },
          ].map(({ label, sub, icon, url }) => (
            <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="connect-card">
              <span style={{ color: '#111' }}>{icon}</span>
              <div>
                <p style={{ ...fredoka, fontSize: 14, color: '#111', margin: 0 }}>{label}</p>
                <p style={{ ...fredoka, fontSize: 11, color: '#888', margin: 0 }}>{sub}</p>
              </div>
              <ExternalLink size={13} style={{ marginLeft: 4, color: '#aaa' }} />
            </a>
          ))}
        </div>
      </section>

    </article>
  );
}