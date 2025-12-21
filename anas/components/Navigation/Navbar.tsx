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
    const updateIndicator = () => {
      const activeLink = navRef.current?.querySelector('.active-link') as HTMLElement;
      if (activeLink) {
        setIndicatorStyle({
          left: activeLink.offsetLeft,
          width: activeLink.offsetWidth,
        });
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(updateIndicator, 50);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden lg:block relative bg-black  px-6 lg:px-10 mb-6 shadow-[0_0_30px_rgba(0,255,255,0.3)] backdrop-blur-sm font-mono overflow-hidden">
        {/* Animated top border */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse"></div>
        
        {/* Corner accents */}
        <div className="absolute top-1 left-1 w-3 h-3 border-l-2 border-t-2 border-cyan-500"></div>
        <div className="absolute top-1 right-1 w-3 h-3 border-r-2 border-t-2 border-pink-500"></div>
        <div className="absolute bottom-1 left-1 w-3 h-3 border-l-2 border-b-2 border-pink-500"></div>
        <div className="absolute bottom-1 right-1 w-3 h-3 border-r-2 border-b-2 border-cyan-500"></div>
        
        {/* Active indicator */}
        <div
          className="absolute bottom-0 h-[2px] bg-gradient-to-r from-cyan-500 via-pink-500 to-cyan-500 shadow-[0_0_10px_rgba(0,255,255,0.8)] transition-all duration-500 ease-out"
          style={indicatorStyle}
        />
        
        <ul ref={navRef} className="flex gap-2 lg:gap-6 relative">
          {navItems.map((item, index) => {
            const isActive = pathname === item.path;
            const Icon = item.icon;
            const linkClasses = isActive
              ? 'active-link group relative text-sm lg:text-base font-medium py-5 lg:py-6 px-4 inline-block transition-all duration-300 whitespace-nowrap text-cyan-400'
              : 'group relative text-sm lg:text-base font-medium py-5 lg:py-6 px-4 inline-block transition-all duration-300 whitespace-nowrap text-gray-500 hover:text-cyan-400';
            
            return (
              <li key={item.path} className="relative">
                <Link href={item.path as Route} className={linkClasses}>
                  {/* Hover background */}
                  <span className="absolute inset-0 bg-cyan-500/10 scale-0 group-hover:scale-100 transition-transform duration-300 border border-cyan-500/0 group-hover:border-cyan-500/50"></span>
                  
                  {/* Icon & Text */}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    {item.name}
                  </span>
                  
                  {/* Active state glow */}
                  {isActive && (
                    <>
                      <span className="absolute inset-0 bg-cyan-500/5 border border-cyan-500/30"></span>
                      <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse"></span>
                    </>
                  )}
                  
                  {/* Index number */}
                  <span className="absolute -top-2 -left-2 w-4 h-4 bg-black border border-cyan-500/30 flex items-center justify-center text-[8px] text-cyan-500/70 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    {index + 1}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        

      </nav>

      {/* Mobile Navbar */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-black border-t-2 border-cyan-500 shadow-[0_-5px_30px_rgba(0,255,255,0.3)] backdrop-blur-lg z-50 font-mono">
        {/* Animated top border */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse"></div>
        
        <ul className="flex justify-around items-center px-2 py-3 relative">
          {navItems.map((item, index) => {
            const isActive = pathname === item.path;
            const Icon = item.icon;
            const linkClasses = isActive
              ? 'flex flex-col items-center justify-center gap-1.5 py-2 px-3 transition-all duration-300 text-cyan-400 relative'
              : 'flex flex-col items-center justify-center gap-1.5 py-2 px-3 transition-all duration-300 text-gray-500';
            
            const iconContainerClasses = isActive
              ? 'relative p-2 border border-cyan-500 bg-cyan-500/20 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.5)]'
              : 'relative p-2 border border-cyan-500/30 bg-cyan-500/5 transition-all duration-300';
            
            const iconClasses = isActive 
              ? 'transition-all duration-300' 
              : 'transition-all duration-300';
            
            const labelClasses = isActive
              ? 'text-[10px] font-medium transition-all duration-300 text-cyan-400 uppercase tracking-wider'
              : 'text-[10px] font-medium transition-all duration-300 text-gray-500 uppercase tracking-wider';
            
            return (
              <li key={item.path} className="flex-1 relative">
                <Link href={item.path as Route} className={linkClasses}>
                  <div className={iconContainerClasses}>
                    <Icon size={18} className={iconClasses} />
                    {isActive && (
                      <>
                        {/* Pulsing dot */}
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(0,255,255,0.8)]"></span>
                        {/* Corner accents */}
                        <span className="absolute top-0 left-0 w-1.5 h-1.5 border-l border-t border-cyan-400"></span>
                        <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-r border-b border-pink-400"></span>
                      </>
                    )}
                  </div>
                  <span className={labelClasses}>{item.name}</span>
                  
                  {/* Index indicator */}
                  {isActive && (
                    <span className="absolute -top-1 left-1/2 -translate-x-1/2 text-[8px] text-cyan-500/70">
                      [{index + 1}]
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
        
        {/* Bottom status bar */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
      </nav>

      <div className="lg:hidden h-20"></div>
    </>
  );
}