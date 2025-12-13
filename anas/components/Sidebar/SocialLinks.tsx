import { Dribbble, Github, Linkedin, Mail } from 'lucide-react';

export default function SocialLinks() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/anasputhukkolli',
      icon: Github,
      color: 'hover:bg-gray-700 hover:border-gray-600',
      external: true,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/anas-puthukkolli-0718a1275/',
      icon: Linkedin,
      color: 'hover:bg-blue-600 hover:border-blue-500',
      external: true,
    },
    {
      name: 'Dribble',
      url: 'https://dribbble.com/anasputhukkolli',
      icon: Dribbble,
      color: 'hover:bg-blue-600 hover:border-blue-500',
      external: true,
    },
    {
      name: 'Email',
      url: 'mailto:anasputhukkolli09@gmail.com',
      icon: Mail,
      color: 'hover:bg-orange-600 hover:border-orange-500',
      external: false,
    },
  ];

  return (
    <div>
      <h3 className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-4 text-center">
        Connect With Me
      </h3>
      <ul className="flex gap-3 justify-center">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <li key={link.name}>
              <a
                href={link.url}
                className={`
                  w-14 h-14 bg-[#21262d] border border-[#30363d] rounded-2xl 
                  flex items-center justify-center text-gray-400 
                  hover:text-white hover:scale-110 hover:shadow-xl
                  transition-all duration-300 
                  ${link.color}
                `}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                aria-label={link.name}
                title={link.name}
              >
                <Icon className="w-6 h-6" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}