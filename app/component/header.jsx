"use client"
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* ---------- HEADER ---------- */}
      <header className="fixed top-0 left-0 w-full bg-white px-12 pt-6 pb-2 z-30 flex justify-between items-center">
        <Link href="/" title="Home"><div className="text-2xl font-bold">JMHV</div></Link>
        <button
          onClick={toggleSidebar}
          className="flex items-center px-3 gap-2 text-lg border rounded-md"
        >
          <span className="hidden sm:inline">Menu</span>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* ---------- Sidebar Overlay (optional dim) ---------- */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-30 z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* ---------- Sidebar ---------- */}
      <aside
        className={`fixed top-16 right-0 h-[calc(100%-64px)] w-70 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          {[
            { href: "/", label: "Home" },
            { href: "/julio-herrera-velutini-the-rise-to-power", label: "The Rise to Power" },
            { href: "/julio-herrera-velutini-leadership-philosophy", label: "Leadership Philosophy" },
            { href: "/julio-herrera-velutini-financial-strategy", label: "Financial Strategy" },
            { href: "/julio-herrera-velutini-banking-empire", label: "Banking Empire" },
            { href: "/julio-herrera-velutini-vision-for-global-finance", label: "Responsible Banking" },
            { href: "/julio-herrera-velutini-global-influence", label: "Global Influence" },
          ].map((item) => (
            <Link
              key={item.href}
              title={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="group relative pl-4 py-2 text-lg font-medium text-gray-700 transition-all duration-300"
            >
              {/* Left Accent Bar */}
              <span className="absolute left-0 top-0 h-full w-1 bg-black scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

              {/* Text */}
              <span className="block group-hover:translate-x-2 group-hover:text-black transition-all duration-300">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
}
