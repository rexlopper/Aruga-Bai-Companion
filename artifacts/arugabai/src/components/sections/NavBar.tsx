import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/arugabai-logo.png"
      alt="ArugaBai"
      className={`h-8 w-auto object-contain ${className}`}
    />
  );
}

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="focus:outline-none">
              <Logo />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#for-families" className="text-white/80 hover:text-[#6FD1C2] hover:underline underline-offset-4 transition-colors text-sm font-medium">For Families</a>
            <a href="#for-patients" className="text-white/80 hover:text-[#6FD1C2] hover:underline underline-offset-4 transition-colors text-sm font-medium">For Patients</a>
            <a href="#for-doctors" className="text-white/80 hover:text-[#6FD1C2] hover:underline underline-offset-4 transition-colors text-sm font-medium">For Doctors</a>
            <a href="#signup" className="text-white/80 hover:text-[#6FD1C2] hover:underline underline-offset-4 transition-colors text-sm font-medium">Sign Up</a>
          </div>

          <div className="hidden md:block">
            <a
              href="#signup"
              data-testid="nav-waitlist-btn"
              className="bg-[#1E8C75] hover:bg-[#3FAA8D] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors shadow-sm"
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
        <div className="md:hidden bg-[#073D31] border-t border-[#1E8C75]/30">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <a href="#for-families" onClick={() => setMobileOpen(false)} className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-[#1E8C75]/20">For Families</a>
            <a href="#for-patients" onClick={() => setMobileOpen(false)} className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-[#1E8C75]/20">For Patients</a>
            <a href="#for-doctors" onClick={() => setMobileOpen(false)} className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-[#1E8C75]/20">For Doctors</a>
            <a href="#signup" onClick={() => setMobileOpen(false)} className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-[#1E8C75]/20">Sign Up</a>
            <a href="#signup" onClick={() => setMobileOpen(false)} className="w-full text-center mt-3 bg-[#1E8C75] text-white block px-3 py-3 rounded-lg text-base font-semibold">Join the Waitlist</a>
          </div>
        </div>
      )}
    </nav>
  );
}
