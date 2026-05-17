import { Logo } from "./NavBar";

export function Footer() {
  return (
    <footer data-testid="footer" className="bg-[#073D31] pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          <div className="flex flex-col items-center md:items-start gap-4">
            <Logo dark={true} />
            <p className="text-white/80 text-sm font-medium">
              aruga — to deeply care for. bai — a trusted friend.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold">
            <a href="#for-families" className="text-white hover:text-[#6FD1C2] transition-colors">For Families</a>
            <a href="#for-patients" className="text-white hover:text-[#6FD1C2] transition-colors">For Patients</a>
            <a href="#for-doctors" className="text-white hover:text-[#6FD1C2] transition-colors">For Doctors</a>
            <a href="#signup" className="text-[#6FD1C2] hover:text-white transition-colors">Join Waitlist</a>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© 2025 ArugaBai. All rights reserved.</p>
          <p className="font-semibold">arugabai.com</p>
        </div>
      </div>
    </footer>
  );
}
