import { Dribbble, Github, Linkedin, Mail } from 'lucide-react';

export default function SocialLinks() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/anasputhukkolli',
      icon: Github,
      color: 'hover:shadow-[0_0_20px_rgba(0,255,255,0.6)]',
      glowColor: 'bg-cyan-500',
      external: true,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/anas-puthukkolli-0718a1275/',
      icon: Linkedin,
      color: 'hover:shadow-[0_0_20px_rgba(255,0,255,0.6)]',
      glowColor: 'bg-pink-500',
      external: true,
    },
    {
      name: 'Dribble',
      url: 'https://dribbble.com/anasputhukkolli',
      icon: Dribbble,
      color: 'hover:shadow-[0_0_20px_rgba(0,255,255,0.6)]',
      glowColor: 'bg-cyan-500',
      external: true,
    },
    {
      name: 'Email',
      url: 'mailto:anasputhukkolli09@gmail.com',
      icon: Mail,
      color: 'hover:shadow-[0_0_20px_rgba(0,255,0,0.6)]',
      glowColor: 'bg-green-500',
      external: false,
    },
  ];

  return (
    <div className="font-mono">
      {/* Header */}
      <div className="mb-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-500"></div>
          <h3 className="text-xs text-cyan-400 uppercase tracking-widest font-bold">
            {'>'} CONNECT_PROTOCOL
          </h3>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-500"></div>
        </div>
        {/* <div className="text-xs text-pink-500/50">
          [SOCIAL_CHANNELS_ACTIVE]
        </div> */}
      </div>

      {/* Social Links Grid */}
      <ul className="grid grid-cols-4 gap-2">
        {socialLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <li key={link.name} className="group relative">
              <a
                href={link.url}
                className={`
                  relative block w-full h-14 bg-cyan-500/10 border border-cyan-500/50 
                  flex items-center justify-center text-cyan-400 
                  hover:bg-cyan-500/30 hover:border-cyan-500
                  transition-all duration-300 
                  ${link.color}
                  overflow-hidden
                `}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                aria-label={link.name}
                title={link.name}
              >
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-pink-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-pink-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {/* Icon */}
                <Icon className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform" />

                {/* Scan line effect */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>

                {/* Glow dot indicator */}
                <div className={`absolute bottom-1 right-1 w-1 h-1 ${link.glowColor} opacity-50 group-hover:opacity-100 transition-opacity animate-pulse`}></div>
              </a>

              {/* Index number */}
              {/*  */}
            </li>
          );
        })}
      </ul>

      {/* Connection Status */}
      {/* <div className="mt-4 p-2 bg-black/50 border border-cyan-500/20 text-xs text-green-400 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-cyan-400">$</span>
          <span>network_status</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-green-500">[ONLINE]</span>
        </div>
      </div> */}
    </div>
  );
}