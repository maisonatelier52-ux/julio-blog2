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
        <div className="text-2xl font-bold">JMHV</div>
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
        className={`fixed top-16 right-0 h-[calc(100%-64px)] w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 gap-6">
          <Link
            href="/"
            className="text-lg hover:text-gray-500"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/the-rise"
            className="text-lg hover:text-gray-500"
            onClick={() => setIsOpen(false)}
          >
            The Rise
          </Link>
          <Link
            href="/leadership"
            className="text-lg hover:text-gray-500"
            onClick={() => setIsOpen(false)}
          >
            Leadership
          </Link>
          <Link
            href="/finance"
            className="text-lg hover:text-gray-500"
            onClick={() => setIsOpen(false)}
          >
            Finance
          </Link>
          <Link
            href="/banking"
            className="text-lg hover:text-gray-500"
            onClick={() => setIsOpen(false)}
          >
            Banking
          </Link>
          <Link
            href="/vision"
            className="text-lg hover:text-gray-500"
            onClick={() => setIsOpen(false)}
          >
            Vision
          </Link>
          <Link
            href="/global-impact"
            className="text-lg hover:text-gray-500"
            onClick={() => setIsOpen(false)}
          >
            Global Impact
          </Link>
        </div>
      </aside>
    </>
  );
}
