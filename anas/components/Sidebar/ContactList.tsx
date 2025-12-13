import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactList() {
  return (
    <ul className="space-y-4 lg:space-y-5">
      <li className="flex items-start gap-4 group">
        <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center text-black flex-shrink-0 border border-gray-200 group-hover:bg-black group-hover:text-white transition-all shadow-md">
          <Mail className="w-5 h-5" />
        </div>

        <div className="text-left flex-1 min-w-0">
          <p className="text-xs text-gray-400 mb-1.5 uppercase tracking-wider font-medium">
            Email
          </p>
          <a
            href="mailto:anasputhukkolli09@gmail.com"
            className="text-sm text-gray-200 hover:text-blue-500 transition-colors block truncate"
          >
            anasputhukkolli**@gmail.com
          </a>
        </div>
      </li>

      <li className="flex items-start gap-4 group">
        <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center text-black flex-shrink-0 border border-gray-200 group-hover:bg-black group-hover:text-white transition-all shadow-md">
          <Phone className="w-5 h-5" />
        </div>

        <div className="text-left flex-1 min-w-0">
          <p className="text-xs text-gray-400 mb-1.5 uppercase tracking-wider font-medium">
            Phone
          </p>
          <a
            href="tel:+918089471732"
            className="text-sm text-gray-200 hover:text-blue-500 transition-colors block"
          >
            +91 80******32
          </a>
        </div>
      </li>

      <li className="flex items-start gap-4 group">
        <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center text-black flex-shrink-0 border border-gray-200 group-hover:bg-black group-hover:text-white transition-all shadow-md">
          <MapPin className="w-5 h-5" />
        </div>

        <div className="text-left flex-1 min-w-0">
          <p className="text-xs text-gray-400 mb-1.5 uppercase tracking-wider font-medium">
            Location
          </p>
          <address className="text-sm text-gray-200 not-italic">
            Kerala, India
          </address>
        </div>
      </li>
    </ul>
  );
}