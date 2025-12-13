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
    <aside className="sticky top-5 max-h-[calc(100vh-40px)] w-80 max-lg:w-full max-lg:max-h-none max-lg:relative bg-[#0d1117] border border-[#30363d] rounded-3xl p-0 overflow-hidden transition-all duration-300 shadow-2xl">
      {/* Profile Section */}
      <div className="relative px-8 pt-10 pb-8 bg-gradient-to-b from-[#161b22] to-[#0d1117]">
        {/* Desktop Layout - Centered */}
        <div className="hidden lg:block text-center">
          {/* Profile Image */}
          <div className="relative inline-block mb-6">
            <figure className="relative w-36 h-36 rounded-3xl overflow-hidden border-4 border-white/40 shadow-2xl shadow-white/20 bg-gradient-to-br from-gray-200 to-white p-1">
              <div className="w-full h-full rounded-[22px] overflow-hidden bg-white">
                <Image
                  src="/images/profile/me.png"
                  alt="Anas profile"
                  width={144}
                  height={144}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </figure>
            {/* Status Indicator */}
            <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 border-4 border-[#0d1117] rounded-full shadow-lg"></div>
          </div>

          {/* Name and Title */}
          <div className="mb-6">
            <h1 className="text-4xl font-bold mb-3 text-white tracking-tight">
              Anas
            </h1>

            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/20 px-6 py-2.5 rounded-full">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <p className="text-sm font-medium text-gray-300">
                Digital Creator
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Horizontal */}
        <div className="flex lg:hidden items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* Profile Image - Mobile */}
            <div className="relative flex-shrink-0">
              <figure className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-white/40 shadow-lg shadow-white/20 bg-gradient-to-br from-gray-200 to-white p-0.5">
                <div className="w-full h-full rounded-[14px] overflow-hidden bg-white">
                  <Image
                    src="/images/me.png"
                    alt="Anas profile"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </figure>
              {/* Status Indicator - Mobile */}
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-[#0d1117] rounded-full shadow-lg"></div>
            </div>

            {/* Name and Title - Mobile */}
            <div className="text-left">
              <h1 className="text-xl font-bold text-white tracking-tight mb-1">
                Anas
              </h1>
              <p className="text-xs text-gray-400">
                Web Developer
              </p>
            </div>
          </div>

          {/* Mobile Toggle Button - Icon Only */}
          <button
            className="flex items-center justify-center w-12 h-12 bg-white hover:bg-gray-200 rounded-xl text-black cursor-pointer transition-all shadow-lg flex-shrink-0"
            onClick={toggleSidebar}
            aria-label="Toggle contact information"
          >
            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      {/* Contact Information */}
      <div className={`px-8 pb-8 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-lg:max-h-[1000px] max-lg:opacity-100' : 'max-lg:max-h-0 max-lg:opacity-0 max-lg:pb-0'} lg:max-h-none lg:opacity-100`}>
        {/* Divider */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-[#30363d] to-transparent mb-8"></div>

        <ContactList />

        {/* Divider */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-[#30363d] to-transparent my-8"></div>

        <SocialLinks />
      </div>
    </aside>
  );
}