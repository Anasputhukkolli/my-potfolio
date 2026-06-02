'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useCallback } from 'react';
import { User, Briefcase, Mail, LucideIcon } from 'lucide-react';

type Route = '/about' | '/portfolio' | '/contact';

const navItems: Array<{ name: string; path: Route; icon: LucideIcon; emoji: string }> = [
  { name: 'About',     path: '/about',     icon: User,      emoji: '👤' },
  { name: 'Portfolio', path: '/portfolio', icon: Briefcase, emoji: '💼' },
  { name: 'Contact',   path: '/contact',   icon: Mail,      emoji: '✉️' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [clicked, setClicked] = useState<string | null>(null);
  const [bursts, setBursts] = useState<{ id: number; emoji: string; x: number; y: number }[]>([]);

  const handleClick = useCallback((path: string, emoji: string, e: React.MouseEvent) => {
    // Trigger click animation
    setClicked(path);
    setTimeout(() => setClicked(null), 500);

    // Emoji burst
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const id = Date.now();
    const x = rect.left + rect.width / 2;
    const y = rect.top;
    setBursts(prev => [...prev, { id, emoji, x, y }]);
    setTimeout(() => setBursts(prev => prev.filter(b => b.id !== id)), 700);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');

        /* ── fade-down entry ── */
        @keyframes fade-down {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── desktop link ── */
        .desk-link {
          position: relative;
          font-family: 'Fredoka One', cursive;
          font-size: 15px;
          letter-spacing: .06em;
          text-decoration: none;
          color: #bbb;
          padding: 4px 2px;
          transition: color .2s;
          display: inline-block;
        }
        .desk-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 100%; height: 3px;
          background: #FFE033;
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .25s cubic-bezier(.22,1,.36,1);
        }
        .desk-link:hover { color: #111; }
        .desk-link:hover::after { transform: scaleX(1); }
        .desk-link.active { color: #111; }
        .desk-link.active::after { transform: scaleX(1); }

        /* ── desktop click pop ── */
        @keyframes deskPop {
          0%   { transform: scale(1) rotate(0deg); }
          25%  { transform: scale(.84) rotate(-5deg); }
          55%  { transform: scale(1.15) rotate(4deg); }
          75%  { transform: scale(.96) rotate(-2deg); }
          90%  { transform: scale(1.04) rotate(1deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        .desk-link.clicked {
          animation: deskPop .45s cubic-bezier(.36,.07,.19,.97) both;
        }

        /* ── desktop ripple ── */
        .desk-link .ripple {
          position: absolute;
          border-radius: 50%;
          width: 80px; height: 80px;
          left: calc(50% - 40px);
          top: calc(50% - 40px);
          background: #FFE03355;
          transform: scale(0);
          animation: rippleOut .5s linear forwards;
          pointer-events: none;
        }
        @keyframes rippleOut {
          to { transform: scale(3); opacity: 0; }
        }

        /* ── mobile click pop ── */
        @keyframes mobPop {
          0%   { transform: scale(1) rotate(0deg); }
          20%  { transform: scale(.80) rotate(-7deg); }
          50%  { transform: scale(1.20) rotate(5deg); }
          70%  { transform: scale(.94) rotate(-3deg); }
          85%  { transform: scale(1.06) rotate(2deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        .mob-item.clicked {
          animation: mobPop .5s cubic-bezier(.36,.07,.19,.97) both;
        }

        /* ── emoji burst ── */
        .emoji-burst {
          position: fixed;
          pointer-events: none;
          font-size: 22px;
          z-index: 9999;
          animation: emojiFly .65s ease-out forwards;
          transform: translateX(-50%);
        }
        @keyframes emojiFly {
          0%   { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
          60%  { opacity: 1; transform: translateX(-50%) translateY(-36px) scale(1.3); }
          100% { opacity: 0; transform: translateX(-50%) translateY(-56px) scale(.8); }
        }
      `}</style>

      {/* Emoji bursts — rendered at document level */}
      {bursts.map(b => (
        <span
          key={b.id}
          className="emoji-burst"
          style={{ left: b.x, top: b.y - 10 }}
        >
          {b.emoji}
        </span>
      ))}

      {/* ── Desktop nav ── */}
      <nav
        className="hidden lg:flex items-center justify-between mb-12"
        style={{ animation: 'fade-down .4s ease both' }}
      >
        <ul style={{ display: 'flex', gap: 32, listStyle: 'none', padding: 0 }}>
          {navItems.map(({ name, path, emoji }) => (
            <li key={path}>
              <Link
                href={path}
                className={[
                  'desk-link',
                  pathname === path ? 'active' : '',
                  clicked === path  ? 'clicked' : '',
                ].filter(Boolean).join(' ')}
                onClick={(e) => handleClick(path, emoji, e)}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── Mobile bottom pill ── */}
      <nav className="lg:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
        <ul
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            background: '#fff',
            border: '2.5px solid #111',
            borderRadius: 20,
            boxShadow: '5px 5px 0 #111',
            padding: '6px 8px',
            listStyle: 'none',
          }}
        >
          {navItems.map(({ name, path, icon: Icon, emoji }) => {
            const isActive = pathname === path;
            const isClicked = clicked === path;
            return (
              <li key={path}>
                <Link
                  href={path}
                  className={`mob-item${isClicked ? ' clicked' : ''}`}
                  onClick={(e) => handleClick(path, emoji, e)}
                  style={{
                    fontFamily: "'Fredoka One', cursive",
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 3,
                    padding: '8px 16px',
                    borderRadius: 14,
                    fontSize: 10,
                    letterSpacing: '.04em',
                    textDecoration: 'none',
                    border: isActive ? '2px solid #111' : '2px solid transparent',
                    transition: 'background .15s, color .15s, border-color .15s, box-shadow .15s',
                    ...(isActive
                      ? { background: '#FFE033', color: '#111', boxShadow: '3px 3px 0 #111' }
                      : { background: 'transparent', color: '#aaa' }),
                  }}
                >
                  <Icon size={15} />
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}