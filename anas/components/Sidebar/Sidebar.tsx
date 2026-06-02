"use client";

import { useState } from "react";
import Image from "next/image";
import ContactList from "./ContactList";
import SocialLinks from "./SocialLinks";
import { ChevronDown } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
        @keyframes tilt-hover {
          from { transform: rotate(0deg) scale(1); }
          to   { transform: rotate(-6deg) scale(1.07); }
        }
        .avatar-frame {
          width: 96px; height: 96px;
          border-radius: 24px;
          overflow: hidden;
          border: 3px solid #111;
          box-shadow: 5px 5px 0 #111;
          transition: transform .3s cubic-bezier(.34,1.56,.64,1), box-shadow .3s;
          cursor: pointer;
          flex-shrink: 0;
        }
        .avatar-frame:hover {
          transform: rotate(-6deg) scale(1.07);
          box-shadow: 7px 7px 0 #FFE033, 10px 10px 0 #111;
        }
        .avatar-frame-sm {
          width: 40px; height: 40px;
          border-radius: 12px;
          overflow: hidden;
          border: 2.5px solid #111;
          box-shadow: 3px 3px 0 #111;
          transition: transform .3s cubic-bezier(.34,1.56,.64,1);
          cursor: pointer;
          flex-shrink: 0;
        }
        .avatar-frame-sm:hover {
          transform: rotate(-6deg) scale(1.1);
          box-shadow: 4px 4px 0 #FFE033, 6px 6px 0 #111;
        }
        .cartoon-tag {
          font-family: 'Fredoka One', cursive;
          font-size: 11px;
          background: #FFE033;
          border: 2px solid #111;
          border-radius: 8px;
          padding: 3px 10px;
          color: #111;
          box-shadow: 2px 2px 0 #111;
        }
        .online-dot {
          position: absolute;
          bottom: -3px; right: -3px;
          width: 13px; height: 13px;
          border-radius: 50%;
          background: #4ade80;
          border: 2.5px solid #fff;
          box-shadow: 0 0 0 2px #111;
        }
       @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');

.logo-fun {
  animation: logoWiggle 2s ease-in-out infinite;
  transform-origin: center bottom;
  display: inline-block;
  cursor: pointer;
}



@keyframes logoWiggle {
  0%   { transform: rotate(-3deg) scale(1); }
  15%  { transform: rotate(3deg) scale(1.05); }
  30%  { transform: rotate(-2deg) scale(1); }
  45%  { transform: rotate(2deg) scale(1.03); }
  60%  { transform: rotate(-1deg) scale(1); }
  75%  { transform: rotate(1deg) scale(1.02); }
  100% { transform: rotate(-3deg) scale(1); }
}

@keyframes logoSpin360 {
  from { transform: rotate(0deg) scale(1); }
  to   { transform: rotate(360deg) scale(1.1); }
}
      `}</style>

      {/* ── Mobile ── */}
      <aside
        className="lg:hidden fixed top-0 left-0 right-0 z-50"
        style={{
          background: "#fff",
          borderBottom: "3px solid #111",
          boxShadow: "0 4px 0 #FFE033",
        }}
      >
        <div className="flex items-center justify-between px-5 h-14">
          <span style={{ display: "inline-block" }}>
            <Image
              src="/images/logofull.png"
              alt="Anas"
              width={65}
              height={60}
              className="logo-fun w-full h-full object-cover"
              priority
            />
          </span>
          <div className="flex items-center gap-3">
            <div className="avatar-frame-sm" style={{ position: "relative" }}>
              <Image
                src="/images/profile/anas.png"
                alt="Anas"
                width={40}
                height={40}
                className="w-full h-full object-cover"
                priority
              />
              <span className="online-dot" style={{ width: 9, height: 9 }} />
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle info"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#888",
              }}
            >
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div
            className="px-5 pt-4 pb-6 space-y-5"
            style={{ background: "#fffdf0" }}
          >
            <div
              className="flex items-center gap-4 p-4"
              style={{
                background: "#FFE033",
                border: "2.5px solid #111",
                borderRadius: 16,
                boxShadow: "4px 4px 0 #111",
              }}
            >
              <div style={{ position: "relative" }}>
                <div className="avatar-frame">
                  <Image
                    src="/images/profile/anas.png"
                    alt="Anas"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <span className="online-dot" />
              </div>
              <div>
                <h1
                  style={{
                    fontFamily: "'Fredoka One', cursive",
                    fontSize: 17,
                    color: "#111",
                    margin: 0,
                  }}
                >
                  Anas Puthukkolli
                </h1>
                <p
                  style={{
                    fontFamily: "'Fredoka One', cursive",
                    fontSize: 12,
                    color: "#555",
                    marginTop: 2,
                  }}
                >
                  Full Stack Developer
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {["Django", "React", "UI/UX"].map((tag) => (
                    <span key={tag} className="cartoon-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <ContactList />
            <div style={{ height: 2, background: "#111", borderRadius: 2 }} />
            <SocialLinks />
          </div>
        </div>
      </aside>

      <div className="lg:hidden h-14" />

      {/* ── Desktop ── */}
      <aside
        className="hidden lg:flex flex-col sticky top-5 max-h-[calc(100vh-40px)] w-72 overflow-y-auto"
        style={{
          borderRadius: 20,
          border: "2.5px solid #111",
          background: "#fff",
          boxShadow: "6px 6px 0 #111",
        }}
      >
        <div className="relative">
          <div
            className="h-28 rounded-t-2xl"
            style={{
              borderBottom: "2.5px solid #111",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Image
              src="/images/profile/banner.png"
              alt="banner"
              fill
              className="object-cover"
              priority
            />
          </div>{" "}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-12">
            <div style={{ position: "relative" }}>
              <div className="avatar-frame">
                <Image
                  src="/images/profile/anas.png"
                  alt="Anas"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <span className="online-dot" />
            </div>
          </div>
        </div>

        <div
          className="mt-14 px-6 pb-5 text-center"
          style={{ borderBottom: "2px solid #eee" }}
        >
          <h1
            style={{
              fontFamily: "'Fredoka One', cursive",
              fontSize: 19,
              color: "#111",
            }}
          >
            Anas Puthukkolli
          </h1>
          <p
            style={{
              fontFamily: "'Fredoka One', cursive",
              fontSize: 12,
              color: "#888",
              marginTop: 4,
              letterSpacing: ".04em",
            }}
          >
            Full Stack Developer
          </p>
          <div className="flex flex-wrap justify-center gap-1.5 mt-3">
            {["Django", "React", "UI/UX"].map((tag) => (
              <span key={tag} className="cartoon-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="px-6 py-6 space-y-6 flex-1">
          <ContactList />
          <div style={{ height: 2, background: "#111", borderRadius: 2 }} />
          <SocialLinks />
        </div>
      </aside>
    </>
  );
}
