'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { User, Briefcase, Mail, LucideIcon } from 'lucide-react';

type Route = '/about' | '/portfolio' | '/contact';

const navItems: Array<{ name: string; path: Route; icon: LucideIcon }> = [
  { name: 'About',     path: '/about',     icon: User      },
  { name: 'Portfolio', path: '/portfolio', icon: Briefcase },
  { name: 'Contact',   path: '/contact',   icon: Mail      },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <style>{`
        @keyframes fade-down {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .desk-link {
          position: relative;
          font-family: 'Fredoka One', cursive;
          font-size: 15px;
          letter-spacing: .06em;
          text-decoration: none;
          color: #bbb;
          padding: 4px 0;
          transition: color .2s;
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
      `}</style>

      {/* Desktop */}
      <nav
        className="hidden lg:flex items-center justify-between mb-12"
        style={{ animation: 'fade-down .4s ease both' }}
      >
       

        <ul style={{ display: 'flex', gap: 32, listStyle: 'none', padding: 0 }}>
          {navItems.map(({ name, path }) => (
            <li key={path}>
              <Link
                href={path}
                className={`desk-link${pathname === path ? ' active' : ''}`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile bottom pill */}
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
          {navItems.map(({ name, path, icon: Icon }) => {
            const isActive = pathname === path;
            return (
              <li key={path}>
                <Link
                  href={path}
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
                    transition: 'all .15s',
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