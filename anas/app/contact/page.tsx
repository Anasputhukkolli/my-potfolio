'use client';

import { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const inputClass = "w-full px-4 py-3 rounded-xl border-[3px] border-black bg-white font-bold text-sm text-black placeholder-gray-400 shadow-[3px_3px_0_#000] focus:outline-none focus:shadow-[1px_1px_0_#000] focus:translate-x-[2px] focus:translate-y-[2px] transition-all";

  return (
    <article className="min-h-screen bg-white px-6  max-w-4xl mx-auto"
      style={{ fontFamily: "'Nunito', sans-serif" }}>

      {/* Google Font */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@700;800;900&display=swap');`}</style>

      {/* Header */}
      <header className="mb-10">
        <p className="text-xs font-black uppercase tracking-[4px] text-gray-400 mb-2"
          style={{ fontFamily: "'Fredoka One', cursive" }}>
          Contact
        </p>
        <h1 className="text-5xl font-black text-black leading-tight mb-2"
          style={{ fontFamily: "'Fredoka One', cursive" }}>
          Get in touch!
        </h1>
        <p className="text-base font-bold text-gray-500">
          Open for freelance & full-time opportunities.
        </p>
      </header>

      {/* Thick divider */}
      <div className="h-[3px] bg-black rounded-full mb-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Left — contact details */}
        <div className="space-y-4">
          {[
            { icon: Mail,   label: 'Email',    value: 'anasputhukkolli09@gmail.com', href: 'mailto:anasputhukkolli09@gmail.com' },
            { icon: Phone,  label: 'Phone',    value: '+91 80******32',              href: 'tel:+918089471732' },
            { icon: MapPin, label: 'Location', value: 'Kerala, India',               href: null },
          ].map(({ icon: Icon, label, value, href }) => (
            <div
              key={label}
              className="flex items-center gap-4 bg-[#FFE033] border-[3px] border-black rounded-2xl p-4 shadow-[5px_5px_0_#000]"
            >
              <div className="w-11 h-11 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon size={20} className="text-[#FFE033]" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[3px] text-black/50">{label}</p>
                {href ? (
                  <a href={href} className="text-sm font-black text-black hover:underline">{value}</a>
                ) : (
                  <p className="text-sm font-black text-black">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right — form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#FFE033] border-[3px] border-black rounded-2xl p-6 shadow-[6px_6px_0_#000] space-y-4"
        >
          <h2 className="text-2xl font-black text-black mb-2"
            style={{ fontFamily: "'Fredoka One', cursive" }}>
            Send a message
          </h2>

          <div>
            <label className="block text-xs font-black uppercase tracking-[2px] text-black mb-1.5">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-[2px] text-black mb-1.5">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-[2px] text-black mb-1.5">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Tell me about your project..."
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3.5 bg-black text-[#FFE033] rounded-xl border-[3px] border-black font-black text-base shadow-[4px_4px_0_#555] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#555] transition-all"
            style={{ fontFamily: "'Fredoka One', cursive", fontSize: '18px' }}
          >
            Send it! <Send size={18} />
          </button>
        </form>

      </div>
    </article>
  );
}