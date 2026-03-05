import React, { useEffect, useRef, useState } from "react";
import { FiHome, FiUser, FiFolder, FiMail, FiPhone } from "react-icons/fi";

const navItems = [
  { id: "home", label: "Home", icon: <FiHome size={20} /> },
  { id: "about", label: "About", icon: <FiUser size={20} /> },
  { id: "how", label: "How It Works", icon: <FiMail size={20} /> },
  { id: "projects", label: "Projects", icon: <FiFolder size={20} /> },
  { id: "contact", label: "Contact", icon: <FiPhone size={20} /> },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [showTopBar, setShowTopBar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const triggerLine = scrollY + window.innerHeight / 2;

      let current = "home";

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const section = document.getElementById(item.id);
        if (!section) continue;

        const top = section.offsetTop;
        if (triggerLine >= top) {
          current = item.id;
          break;
        }
      }

      if (window.innerHeight + scrollY >= document.body.offsetHeight - 5) {
        current = "contact";
      }

      setActive((prev) => (prev === current ? prev : current));

      if (window.innerWidth < 768) {
        const delta = scrollY - lastScrollY.current;
        if (delta > 10) setShowTopBar(false);
        if (delta < -10) setShowTopBar(true);
        lastScrollY.current = scrollY;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <nav className="hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 w-[97%] px-10 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[7rem] justify-between items-center z-50">
        <h1 className="text-white text-xl">
          &lt;CLOU<span className="text-[var(--primary-color)]">DC</span>ODE/&gt;
        </h1>

        <ul className="flex gap-12">
          {navItems.map((item) => (
            <li key={item.id}>
              {item.id === "contact" ? (
                <a
                  href={`#${item.id}`}
                  className="px-6 py-2 rounded-full bg-black/60 text-white font-semibold transition-colors duration-300 hover:bg-[var(--primary-color)]/40"
                >
                  {item.label}
                </a>
              ) : (
                <a
                  href={`#${item.id}`}
                  className={`transition-colors duration-300 ${
                    active === item.id
                      ? "text-[var(--primary-color)]"
                      : "text-white hover:text-white/70"
                  }`}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* ================= MOBILE TOP BAR ================= */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-12 backdrop-blur-xl bg-black/20 border-b border-white/10 z-40 transition-transform duration-300 ${
          showTopBar ? "translate-y-0" : "-translate-y-full"
        } flex items-center justify-center`}
      >
        <h1 className="text-white text-lg">
          &lt;CLOU<span className="text-[var(--primary-color)]">DC</span>ODE/&gt;
        </h1>
      </div>

      {/* ================= MOBILE BOTTOM NAVBAR ================= */}
      <nav className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 w-[92%] backdrop-blur-2xl bg-white/5 border border-white/20 rounded-full px-4 py-3 flex justify-between items-center shadow-2xl z-50">
        {navItems.map((item) => {
          const isActive = active === item.id;

          // Contact button
          if (item.id === "contact") {
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="w-[88px] flex items-center justify-center gap-2 rounded-full px-4 py-2 bg-[var(--primary-color)]/40 text-white font-semibold transition-all duration-300 active:scale-95"
              >
                {item.icon}
                <span className="text-sm font-medium"></span>
              </a>
            );
          }

          // Other nav items with active styles
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`w-[50px] h-[50px] flex flex-col items-center justify-center gap-1 rounded-full transition-all duration-300 active:scale-95 ${
                isActive ? "bg-white/20 text-white" : "text-white/60"
              }`}
            >
              <span
                className={`text-lg transition-transform duration-300 ${
                  isActive ? "scale-125 text-[var(--primary-color)]" : ""
                }`}
              >
                {item.icon}
              </span>
            </a>
          );
        })}
      </nav>
    </>
  );
}