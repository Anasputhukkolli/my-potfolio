import { Mail, Phone, MapPin } from 'lucide-react';

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    display: 'anasputhu*****@gmail.com',
    href: 'mailto:anasputhukkolli09@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    display: '+91 80******32',
    href: 'tel:+918089471732',
  },
  {
    icon: MapPin,
    label: 'Location',
    display: 'Kerala, India',
    href: null,
  },
];

const fredoka = { fontFamily: "'Fredoka One', cursive" } as const;

export default function ContactList() {
  return (
    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
      {contacts.map(({ icon: Icon, label, display, href }) => (
        <li key={label}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            background: '#fff',
            border: '2px solid #111',
            borderRadius: 12,
            padding: '10px 14px',
            boxShadow: '3px 3px 0 #111',
          }}
        >
          {/* Icon badge */}
          <span style={{
            width: 32, height: 32,
            background: '#FFE033',
            border: '2px solid #111',
            borderRadius: 8,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
            boxShadow: '2px 2px 0 #111',
          }}>
            <Icon size={14} color="#111" />
          </span>

          <div>
            <p style={{ ...fredoka, fontSize: 10, color: '#aaa', letterSpacing: '.12em', textTransform: 'uppercase', margin: 0 }}>
              {label}
            </p>
            {href ? (
              <a href={href} style={{
                ...fredoka, fontSize: 13, color: '#111',
                textDecoration: 'none',
                transition: 'color .15s',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = '#c9a000')}
                onMouseLeave={e => (e.currentTarget.style.color = '#111')}
              >
                {display}
              </a>
            ) : (
              <address style={{ ...fredoka, fontSize: 13, color: '#111', fontStyle: 'normal' }}>
                {display}
              </address>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}