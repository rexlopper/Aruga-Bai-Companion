import { Logo } from "./NavBar";
import { useLanguage } from "@/i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer
      id="footer"
      data-testid="footer"
      className="bg-[#073D31] pt-20 pb-10 px-6 sm:px-10 lg:px-16 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">

          <div className="flex flex-col items-center md:items-start gap-4">
            <Logo dark={true} />
            <p className="text-white/60 text-sm font-medium leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-8 text-sm font-semibold">
            <a href="#for-families" className="text-white/70 hover:text-[#6FD1C2] transition-colors">{t.nav.forFamilies}</a>
            <a href="#for-patients" className="text-white/70 hover:text-[#6FD1C2] transition-colors">{t.nav.forPatients}</a>
            <a href="#for-doctors" className="text-white/70 hover:text-[#6FD1C2] transition-colors">{t.nav.forDoctors}</a>
            <a href="#signup" className="text-[#6FD1C2] hover:text-white transition-colors">{t.footer.joinWaitlist}</a>
          </nav>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>{t.footer.copyright}</p>
          <p className="font-semibold">arugabai.com</p>
        </div>
      </div>
    </footer>
  );
}
