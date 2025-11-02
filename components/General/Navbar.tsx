"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import HighlandLifespacesLogo from "@/assets/HighlandMainLogo.webp";
import MenuIcon from "@/assets/MenuIcon.webp";
import { ChevronRight, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and toggle blur background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          isScrolled
            ? "backdrop-blur-md bg-black/40 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-6 md:px-20 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src={HighlandLifespacesLogo}
              alt="Highland Lifespaces Logo"
              width={180}
              className="cursor-pointer"
            />
          </div>

          {/* Menu Icon */}
          <button
            onClick={() => setIsOpen(true)}
            className="transition-transform hover:cursor-pointer hover:scale-105"
          >
            <Image src={MenuIcon} alt="Menu Icon" width={28} height={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar / Right Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`fixed top-0 right-0 h-dvh w-[85%] sm:w-[420px]
     backdrop-blur-xl border-l border-black/10
    shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)]
    ${isOpen ? "translate-x-0" : "translate-x-full"} z-60`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5">
          <Image
            src={HighlandLifespacesLogo}
            alt="Highland Lifespaces"
            width={150}
            className="select-none"
          />
          <button
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="grid h-9 w-9 place-items-center rounded-full border border-black/10
                 bg-white/70 backdrop-blur hover:cursor-pointer hover:scale-105 active:scale-95
                 transition-transform"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Divider */}
        <div className="mx-6 border-t border-black/10" />

        {/* Nav items */}
        <nav className="px-4 py-6">
          <ul className="space-y-2">
            {["Home", "About", "Projects", "Contact"].map((label, i) => (
              <li key={label}>
                <button
                  onClick={() => setIsOpen(false)}
                  className={`group w-full text-left px-4 py-3 rounded-xl
                        font-medium text-white
                        transition-all duration-300
                        hover:bg-black/[0.035] hover:ring-1 hover:cursor-pointer hover:ring-black/10
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20
                        ${
                          isOpen
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-3"
                        }`}
                  style={{ transitionDelay: `${i * 60 + 80}ms` }} // stagger reveal
                >
                  <span className="inline-flex items-center gap-2">
                    <span>{label}</span>
                    <span
                      className="ml-auto opacity-0 -translate-x-1 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                      aria-hidden
                    >
                      <ChevronRight className="h-4 w-4" />
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div
            className={`mt-6 px-4 ${
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            } transition-all duration-500`}
            style={{ transitionDelay: "360ms" }}
          >
            <button
              className="w-full rounded-xl px-5 py-3 font-semibold
                   bg-linear-to-r from-slate-900 to-slate-700 text-white
                   shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20
                   transition-transform hover:scale-[1.01] hover:cursor-pointer active:scale-[0.99]"
              onClick={() => setIsOpen(false)}
            >
              Enquire Now
            </button>
          </div>
        </nav>

        {/* Footer */}
        <div className="mt-auto px-6 pb-6 pt-2 text-sm text-white">
          <div className=" flex items-center gap-3">
            <a className="rounded-lg border hover:cursor-pointer border-black/10 px-3 py-1.5 hover:bg-black/4">
              Instagram
            </a>
            <a className="rounded-lg border hover:cursor-pointer border-black/10 px-3 py-1.5 hover:bg-black/4">
              Facebook
            </a>
            <a className="rounded-lg border hover:cursor-pointer border-black/10 px-3 py-1.5 hover:bg-black/4">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Overlay with soft gradient to the left */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-linear-to-l from-black/40 to-transparent backdrop-blur-[2px]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
