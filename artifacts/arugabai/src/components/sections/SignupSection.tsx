import { Shield, Bell, Heart } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/i18n/LanguageContext";

export function SignupSection() {
  const { t } = useLanguage();

  const trustItems = [
    { icon: Shield, label: t.signup.trust1 },
    { icon: Bell,   label: t.signup.trust2 },
    { icon: Heart,  label: t.signup.trust3 },
  ];

  return (
    <section
      id="signup"
      data-testid="signup-section"
      className="bg-[#073D31] py-36 px-6 sm:px-10 lg:px-16"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

        <div className="pt-4">
          <h2 className="font-nunito text-4xl sm:text-5xl font-extrabold text-white mb-8 leading-tight">
            {t.signup.headline}
          </h2>
          <p className="text-xl text-white/80 leading-relaxed mb-16">
            {t.signup.body}
          </p>

          <div className="flex flex-col gap-8">
            {trustItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-4 text-white">
                <Icon className="w-5 h-5 text-[#6FD1C2] shrink-0" />
                <span className="font-semibold">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl px-10 py-12">
          <form method="POST" action="ACTION_URL_PLACEHOLDER" className="space-y-7">

            <div className="space-y-2">
              <Label htmlFor="name" className="text-[#1A2B28] font-bold text-sm tracking-wide">{t.signup.nameLabel}</Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                data-testid="form-name"
                placeholder="Juan dela Cruz"
                className="w-full border-[#D4E2DE] focus:ring-[#1E8C75] focus:border-[#1E8C75] rounded-xl py-3 text-base"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#1A2B28] font-bold text-sm tracking-wide">{t.signup.emailLabel}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                data-testid="form-email"
                placeholder="juan@example.com"
                className="w-full border-[#D4E2DE] focus:ring-[#1E8C75] focus:border-[#1E8C75] rounded-xl py-3 text-base"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role" className="text-[#1A2B28] font-bold text-sm tracking-wide">{t.signup.roleLabel}</Label>
              <select
                id="role"
                name="role"
                required
                data-testid="form-role"
                className="w-full rounded-xl border border-[#D4E2DE] bg-white px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#1E8C75] focus:border-[#1E8C75] text-[#1A2B28]"
                defaultValue=""
              >
                <option value="" disabled>{t.signup.rolePlaceholder}</option>
                <option value="caregiver">{t.signup.roleCaregiver}</option>
                <option value="patient">{t.signup.rolePatient}</option>
                <option value="doctor">{t.signup.roleDoctor}</option>
                <option value="admin">{t.signup.roleAdmin}</option>
                <option value="other">{t.signup.roleOther}</option>
              </select>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                data-testid="form-submit"
                className="w-full bg-[#1E8C75] hover:bg-[#3FAA8D] text-white px-6 py-4 rounded-xl text-lg font-bold transition-colors shadow-md"
              >
                {t.signup.submit}
              </button>
            </div>

          </form>

          <p className="text-xs text-center text-[#4A6B63] mt-8 leading-relaxed">
            {t.signup.privacy}
          </p>
        </div>

      </div>
    </section>
  );
}
