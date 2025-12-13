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

type Route = '/about' | '/resume' | '/portfolio' | '/contact';

interface IndicatorStyle {
  left: number;
  width: number;
}

const navItems: Array<{ name: string; path: Route; icon: LucideIcon }> = [
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
      <nav className="hidden lg:block relative bg-gradient-to-br from-black via-[#0a0a0a] to-black border border-[#252525] rounded-[24px] px-6 lg:px-10 mb-6 shadow-2xl backdrop-blur-sm">
        <div
          className="absolute bottom-0 h-[3px] bg-gradient-to-r from-white via-gray-300 to-white rounded-full transition-all duration-500 ease-out"
          style={indicatorStyle}
        />
        
        <ul ref={navRef} className="flex gap-2 lg:gap-6 relative">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            const linkClasses = isActive
              ? 'active-link group relative text-sm lg:text-base font-medium py-5 lg:py-6 px-4 inline-block transition-all duration-500 ease-out whitespace-nowrap text-white'
              : 'group relative text-sm lg:text-base font-medium py-5 lg:py-6 px-4 inline-block transition-all duration-500 ease-out whitespace-nowrap text-gray-500 hover:text-gray-200';
            
            return (
              <li key={item.path}>
                <Link href={item.path as Route} className={linkClasses}>
                  <span className="absolute inset-0 rounded-lg bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></span>
                  <span className="relative z-10">{item.name}</span>
                  {isActive && (
                    <span className="absolute inset-0 rounded-lg bg-white/5 animate-pulse"></span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black via-[#0a0a0a] to-black border-t border-[#252525] shadow-2xl backdrop-blur-lg z-50">
        <ul className="flex justify-around items-center px-4 py-3">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            const Icon = item.icon;
            const linkClasses = isActive
              ? 'flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-xl transition-all duration-300 ease-out text-white'
              : 'flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-xl transition-all duration-300 ease-out text-gray-500';
            
            const iconContainerClasses = isActive
              ? 'relative p-2 rounded-full transition-all duration-300 ease-out bg-white/10'
              : 'relative p-2 rounded-full transition-all duration-300 ease-out bg-transparent';
            
            const iconClasses = isActive 
              ? 'transition-all duration-300 scale-110' 
              : 'transition-all duration-300 scale-100';
            
            const labelClasses = isActive
              ? 'text-[10px] font-medium transition-all duration-300 opacity-100 scale-100'
              : 'text-[10px] font-medium transition-all duration-300 opacity-60 scale-95';
            
            return (
              <li key={item.path} className="flex-1">
                <Link href={item.path as Route} className={linkClasses}>
                  <div className={iconContainerClasses}>
                    <Icon size={20} className={iconClasses} />
                    {isActive && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    )}
                  </div>
                  <span className={labelClasses}>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="lg:hidden h-20"></div>
    </>
  );
}