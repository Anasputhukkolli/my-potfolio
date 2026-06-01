import { Dribbble, Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub',   url: 'https://github.com/anasputhukkolli',                        icon: Github,   external: true  },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/anas-puthukkolli-0718a1275/',   icon: Linkedin, external: true  },
  { name: 'Dribbble', url: 'https://dribbble.com/anasputhukkolli',                      icon: Dribbble, external: true  },
  { name: 'Email',    url: 'mailto:anasputhukkolli09@gmail.com',                        icon: Mail,     external: false },
];

export default function SocialLinks() {
  return (
    <ul style={{ display: 'flex', gap: 8, listStyle: 'none', padding: 0 }}>
      {socialLinks.map(({ name, url, icon: Icon, external }) => (
        <li key={name}>
          <a
            href={url}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            aria-label={name}
            title={name}
            style={{
              width: 38, height: 38,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: '#fff',
              border: '2.5px solid #111',
              borderRadius: 10,
              boxShadow: '3px 3px 0 #111',
              color: '#111',
              textDecoration: 'none',
              transition: 'transform .18s cubic-bezier(.34,1.56,.64,1), box-shadow .18s, background .18s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = 'translate(-2px,-2px) rotate(-6deg)';
              el.style.boxShadow = '5px 5px 0 #FFE033, 7px 7px 0 #111';
              el.style.background = '#FFE033';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = '';
              el.style.boxShadow = '3px 3px 0 #111';
              el.style.background = '#fff';
            }}
          >
            <Icon size={15} />
          </a>
        </li>
      ))}
    </ul>
  );
}