'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { User, FileText, Briefcase, Mail, LucideIcon } from 'lucide-react';

interface NavItem {
  name: string;
  path: string;
  icon: LucideIcon;
}

interface IndicatorStyle {
  left: number;
  width: number;
}

const navItems: NavItem[] = [
  { name: 'About', path: '/about', icon: User },
  { name: 'Resume', path: '/resume', icon: FileText },
  { name: 'Portfolio', path: '/portfolio', icon: Briefcase },
  { name: 'Contact', path: '/contact', icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname();
  const [indicatorStyle, setIndicatorStyle] = useState<IndicatorStyle>({ left: 0, width: 0 });
  const navRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const activeLink = navRef.current?.querySelector('.active-link') as HTMLElement;
    if (activeLink) {
      setIndicatorStyle({
        left: activeLink.offsetLeft,
        width: activeLink.offsetWidth,
      });
    }
  }, [pathname]);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden lg:block relative bg-gradient-to-br from-black via-[#0a0a0a] to-black border border-[#252525] rounded-[24px] px-6 lg:px-10 mb-6 shadow-2xl backdrop-blur-sm">
        {/* Animated indicator */}
        <div
          className="absolute bottom-0 h-[3px] bg-gradient-to-r from-white via-gray-300 to-white rounded-full transition-all duration-500 ease-out"
          style={indicatorStyle}
        />
        
        <ul ref={navRef} className="flex gap-2 lg:gap-6 relative">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            
            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`
                    ${isActive ? 'active-link' : ''}
                    group relative text-sm lg:text-base font-medium py-5 lg:py-6 px-4 inline-block transition-all duration-500 ease-out whitespace-nowrap
                    ${
                      isActive
                        ? 'text-white'
                        : 'text-gray-500 hover:text-gray-200'
                    }
                  `}
                >
                  {/* Hover background effect */}
                  <span className="absolute inset-0 rounded-lg bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out" />
                  
                  {/* Text */}
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Subtle glow on active */}
                  {isActive && (
                    <span className="absolute inset-0 rounded-lg bg-white/5 animate-pulse" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black via-[#0a0a0a] to-black border-t border-[#252525] shadow-2xl backdrop-blur-lg z-50">
        <ul className="flex justify-around items-center px-4 py-3">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            const Icon = item.icon;
            
            return (
              <li key={item.path} className="flex-1">
                <Link
                  href={item.path}
                  className={`
                    flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-xl transition-all duration-300 ease-out
                    ${
                      isActive
                        ? 'text-white'
                        : 'text-gray-500'
                    }
                  `}
                >
                  {/* Icon with background */}
                  <div className={`
                    relative p-2 rounded-full transition-all duration-300 ease-out
                    ${isActive ? 'bg-white/10' : 'bg-transparent'}
                  `}>
                    <Icon 
                      size={20} 
                      className={`transition-all duration-300 ${isActive ? 'scale-110' : 'scale-100'}`}
                    />
                    
                    {/* Active indicator dot */}
                    {isActive && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-pulse" />
                    )}
                  </div>
                  
                  {/* Label */}
                  <span className={`
                    text-[10px] font-medium transition-all duration-300
                    ${isActive ? 'opacity-100 scale-100' : 'opacity-60 scale-95'}
                  `}>
                    {item.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Spacer for mobile to prevent content from being hidden behind fixed navbar */}
      <div className="lg:hidden h-20" />
    </>
  );
}