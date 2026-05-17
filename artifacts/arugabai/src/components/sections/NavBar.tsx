import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

export function Logo({ dark = true }: { dark?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <svg width="26" height="28" viewBox="0 0 60 66" fill="none" className="shrink-0">
        <defs>
          <linearGradient id="aruga-lg" x1="0" y1="0" x2="60" y2="66" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3FAA8D"/>
            <stop offset="60%" stopColor="#6FD1C2"/>
            <stop offset="100%" stopColor="#4DA6FF"/>
          </linearGradient>
        </defs>
        <circle cx="30" cy="9" r="8" fill="url(#aruga-lg)"/>
        <path d="M30 62 C10 50 2 40 2 30 C2 20 10 14 18 18 C22 20 26 24 30 30 C34 24 38 20 42 18 C50 14 58 20 58 30 C58 40 50 50 30 62Z" fill="url(#aruga-lg)"/>
      </svg>
      <span className={`font-nunito font-bold text-xl tracking-tight ${dark ? "text-white" : "text-[#073D31]"}`}>
        aruga<span className="text-[#6FD1C2]">bai</span>
      </span>
    </div>
  );
}

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      data-testid="nav-bar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#073D31]/95 backdrop-blur-md shadow-sm" : "bg-[#073D31]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="focus:outline-none">
              <Logo dark={true} />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#for-families" className="text-white hover:text-[#6FD1C2] hover:underline underline-offset-4 transition-colors px-3 py-2 text-sm font-medium">For Families</a>
              <a href="#for-patients" className="text-white hover:text-[#6FD1C2] hover:underline underline-offset-4 transition-colors px-3 py-2 text-sm font-medium">For Patients</a>
              <a href="#for-doctors" className="text-white hover:text-[#6FD1C2] hover:underline underline-offset-4 transition-colors px-3 py-2 text-sm font-medium">For Doctors</a>
              <a href="#signup" className="text-white hover:text-[#6FD1C2] hover:underline underline-offset-4 transition-colors px-3 py-2 text-sm font-medium">Sign Up</a>
            </div>
          </div>

          <div className="hidden md:block">
            <a 
              href="#signup" 
              data-testid="nav-waitlist-btn"
              className="bg-[#1E8C75] hover:bg-[#3FAA8D] text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors shadow-sm"
            >
              Join the Waitlist
            </a>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#1E8C75] focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {mobileOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#073D31] border-t border-[#1E8C75]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#for-families" onClick={() => setMobileOpen(false)} className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-[#1E8C75]">For Families</a>
            <a href="#for-patients" onClick={() => setMobileOpen(false)} className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-[#1E8C75]">For Patients</a>
            <a href="#for-doctors" onClick={() => setMobileOpen(false)} className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-[#1E8C75]">For Doctors</a>
            <a href="#signup" onClick={() => setMobileOpen(false)} className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-[#1E8C75]">Sign Up</a>
            <a href="#signup" onClick={() => setMobileOpen(false)} className="w-full text-center mt-4 bg-[#1E8C75] text-white block px-3 py-3 rounded-md text-base font-semibold">Join the Waitlist</a>
          </div>
        </div>
      )}
    </nav>
  );
}
