'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  url: string;
  tags: string[];
};

function ensureHttps(url: string): string {
  if (!url || url === '#') return '#';
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  return 'https://' + url;
}

export default function ProjectsList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase
        .from('projects')
        .select('id, title, category, image, links, technologies')
        .order('created_at', { ascending: false })
        .limit(3);

      if (!error && data) {
        setProjects(
          data.map((p) => ({
            id: p.id,
            title: p.title,
            category: p.category,
            image: p.image,
            url: ensureHttps(p.links?.live ?? p.links?.github ?? '#'), // ← fixed here
            tags: p.technologies ?? [],
          }))
        );
      }
      setLoading(false);
    }
    fetchProjects();
  }, []);

  return (
    <section className="space-y-6">
      <ul className="grid grid-cols-2 gap-4" style={{ listStyle: 'none', padding: 0 }}>
        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <li key={i}>
                <div
                  className="rounded-[18px] overflow-hidden"
                  style={{
                    height: 220,
                    background: '#f0f0f0',
                    border: '2.5px solid #ddd',
                    boxShadow: '5px 5px 0 #ddd',
                    animation: 'pulse 1.5s ease-in-out infinite',
                  }}
                />
              </li>
            ))
          : projects.map((project, i) => (
              <li key={project.id}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col h-full rounded-[18px] overflow-hidden no-underline"
                  style={{
                    background: '#FFE033',
                    border: '2.5px solid #111',
                    boxShadow: '5px 5px 0 #111',
                    transition: 'transform .17s, box-shadow .17s',
                    animationDelay: `${i * 0.08}s`,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.transform = 'translate(-3px,-3px)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '8px 8px 0 #111';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.transform = '';
                    (e.currentTarget as HTMLElement).style.boxShadow = '5px 5px 0 #111';
                  }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ height: 130, borderBottom: '2.5px solid #111', background: '#f5f5f5' }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: '#FFE033', border: '2px solid #111', borderRadius: 8, padding: '4px 6px', boxShadow: '2px 2px 0 #111' }}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex flex-col gap-2 p-4 flex-1">
                    <div>
                      <p style={{ fontFamily: "'Fredoka One', cursive", fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: '#666', marginBottom: 2 }}>
                        {project.category}
                      </p>
                      <h3 style={{ fontFamily: "'Fredoka One', cursive", fontSize: 17, color: '#111', lineHeight: 1.1 }}>
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {project.tags.map(tag => (
                        <span key={tag} style={{ background: '#fff', border: '2px solid #111', borderRadius: 8, padding: '3px 9px', fontFamily: "'Fredoka One', cursive", fontSize: 11, color: '#111' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </li>
            ))}
      </ul>

      {/* Explore more */}
      <a
        href="/portfolio"
        style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#111', border: '2.5px solid #111', borderRadius: 12, padding: '10px 20px', boxShadow: '4px 4px 0 #555', fontFamily: "'Fredoka One', cursive", fontSize: 14, color: '#FFE033', letterSpacing: '.06em', textDecoration: 'none', transition: 'transform .15s, box-shadow .15s' }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translate(-2px,-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '6px 6px 0 #555'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = '4px 4px 0 #555'; }}
      >
        Explore more
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FFE033" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
        </svg>
      </a>
    </section>
  );
}