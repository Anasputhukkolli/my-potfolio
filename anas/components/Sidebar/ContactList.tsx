import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactList() {
  return (
    <ul className="space-y-3 font-mono">
      <li className="group">
        <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 hover:border-cyan-500 hover:bg-cyan-500/20 transition-all relative overflow-hidden">
          {/* Scan line effect */}
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity"></div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/40 transition-all">
              <Mail className="w-5 h-5 text-cyan-400" />
            </div>

            <div className="text-left flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-cyan-400 uppercase tracking-wider">
                  EMAIL
                </span>
                <span className="text-xs text-cyan-500/50">:</span>
              </div>
              <a
                href="mailto:anasputhukkolli09@gmail.com"
                className="text-sm  hover:text-pink-300 transition-colors block truncate group-hover:underline"
              >
                anasputhukkolli**@gmail.com
              </a>
            </div>

            {/* Decorative pixel */}
            <div className="w-2 h-2 bg-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity animate-pulse"></div>
          </div>
        </div>
      </li>

      <li className="group">
        <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 hover:border-cyan-500 hover:bg-cyan-500/20 transition-all relative overflow-hidden">
          {/* Scan line effect */}
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity"></div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/40 transition-all">
              <Phone className="w-5 h-5 text-cyan-400" />
            </div>

            <div className="text-left flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-cyan-400 uppercase tracking-wider">
                  PHONE
                </span>
                <span className="text-xs text-cyan-500/50">:</span>
              </div>
              <a
                href="tel:+918089471732"
                className="text-sm  hover:text-pink-300 transition-colors block group-hover:underline"
              >
                +91 80******32
              </a>
            </div>

            {/* Decorative pixel */}
            <div className="w-2 h-2 bg-pink-500 opacity-50 group-hover:opacity-100 transition-opacity animate-pulse"></div>
          </div>
        </div>
      </li>

      <li className="group">
        <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 hover:border-cyan-500 hover:bg-cyan-500/20 transition-all relative overflow-hidden">
          {/* Scan line effect */}
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity"></div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/40 transition-all">
              <MapPin className="w-5 h-5 text-cyan-400" />
            </div>

            <div className="text-left flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-cyan-400 uppercase tracking-wider">
                  LOCATION
                </span>
                <span className="text-xs text-cyan-500/50">:</span>
              </div>
              <address className="text-sm  not-italic">
                Kerala, India
              </address>
            </div>

            {/* Decorative pixel */}
            <div className="w-2 h-2 bg-green-500 opacity-50 group-hover:opacity-100 transition-opacity animate-pulse"></div>
          </div>
        </div>
      </li>

      {/* Status Bar */}
      {/* <li className="mt-4 p-2 bg-black/50 border border-cyan-500/20 text-xs text-green-400 flex items-center gap-2">
        <span className="text-cyan-400">$</span>
        <span>contact_info_loaded</span>
        <span className="ml-auto text-cyan-500/50">[OK]</span>
      </li> */}
    </ul>
  );
}