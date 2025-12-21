'use client';

import { useState } from 'react';
import Image from 'next/image';
import ContactList from './ContactList';
import SocialLinks from './SocialLinks';
import { ChevronDown } from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className="sticky top-5 max-h-[calc(100vh-40px)] w-80 max-lg:w-full max-lg:max-h-none max-lg:relative bg-black rounded-none p-0 overflow-hidden transition-all duration-300  relative">
     
      <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-500"></div>
      <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-pink-500"></div>
      <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-pink-500"></div>
      <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-cyan-500"></div>

      {/* Profile Section */}
      <div className="relative px-8 pt-10 pb-8 bg-gradient-to-b from-gray-900/50 to-black z-10">
        {/* Desktop Layout - Centered */}
        <div className="hidden lg:block text-center">
          {/* Profile Image */}
          <div className="relative inline-block mb-6">
            <figure className="relative w-36 h-36 border-4 border-cyan-500 overflow-hidden bg-gradient-to-br from-cyan-500/20 to-pink-500/20 shadow-[0_0_20px_rgba(0,255,255,0.5)]">
              <Image
                src="/images/profile/me.png"
                alt="Anas profile"
                width={144}
                height={144}
                className="w-full h-full object-cover"
                priority
              />
            </figure>
            {/* Status Indicator */}
            <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 border-4 border-black shadow-[0_0_10px_rgba(0,255,0,0.8)] animate-pulse"></div>
            
            {/* Decorative Pixels */}
            <div className="absolute -top-2 -left-2 w-2 h-2 bg-cyan-500 animate-pulse"></div>
            <div className="absolute -top-2 -right-2 w-2 h-2 bg-pink-500 animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-pink-500 animate-pulse"></div>
            <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-cyan-500 animate-pulse"></div>
          </div>

          {/* Name and Title */}
          <div className="">
            <h1 className="text-4xl font-bold mb-3 text-cyan-400 tracking-wider font-mono">
              {'ANAS'}
            </h1>

            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/50 px-6 py-2.5">
              <div className="w-2 h-2 bg-cyan-400 animate-pulse"></div>
              <p className="text-sm font-medium  font-mono">
                &gt; DIGITAL_CREATOR_
              </p>
            </div>
          </div>

          {/* Glitch Effect Text */}
          {/* <div className=" font-mono text-xs text-green-400">
            <div className="flex justify-center gap-1">
              <span className="opacity-50">[</span>
              <span className="animate-pulse">SYSTEM_ONLINE</span>
              <span className="opacity-50">]</span>
            </div>
          </div> */}
        </div>

        {/* Mobile Layout - Horizontal */}
        <div className="flex lg:hidden items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* Profile Image - Mobile */}
            <div className="relative flex-shrink-0">
              <figure className="relative w-16 h-16  overflow-hidden bg-gradient-to-br from-cyan-500/20 to-pink-500/20 shadow-[0_0_15px_rgba(0,255,255,0.5)]">
                <Image
                  src="/images/profile/me.png"
                  alt="Anas profile"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                  priority
                />
              </figure>
              {/* Status Indicator - Mobile */}
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-black shadow-[0_0_8px_rgba(0,255,0,0.8)] animate-pulse"></div>
            </div>

            {/* Name and Title - Mobile */}
            <div className="text-left">
              <h1 className="text-xl font-bold text-cyan-400 tracking-tight mb-1 font-mono">
                {'<ANAS/>'}
              </h1>
              <p className="text-xs text-pink-400 font-mono">
                &gt; CREATOR_
              </p>
            </div>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="flex items-center justify-center w-12 h-12 bg-cyan-500/10 hover:bg-cyan-500/30 border border-cyan-500 text-cyan-400 cursor-pointer transition-all shadow-[0_0_10px_rgba(0,255,255,0.3)] flex-shrink-0"
            onClick={toggleSidebar}
            aria-label="Toggle contact information"
          >
            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      {/* Contact Information */}
      <div className={`px-8 pb-8 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-lg:max-h-[1000px] max-lg:opacity-100' : 'max-lg:max-h-0 max-lg:opacity-0 max-lg:pb-0'} lg:max-h-none lg:opacity-100 relative z-10`}>
        {/* Divider */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent "></div>

        <ContactList />

        {/* Divider */}
        <div className="relative h-px  my-8"></div>

        <SocialLinks />

        {/* Terminal Footer */}
        {/* <div className="mt-8 p-3 bg-cyan-500/5 border border-cyan-500/30 font-mono text-xs text-green-400">
          <div className="flex items-center gap-2">
            <span className="text-cyan-400">$</span>
            <span className="animate-pulse">status: ready_</span>
          </div>
        </div> */}
      </div>
    </aside>
  );
}