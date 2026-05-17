import { Shield, BadgeCheck, Users } from "lucide-react";

export function TrustBar() {
  return (
    <section data-testid="trust-bar" className="bg-[#F4F7F6] border-y border-[#D4E2DE] py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#4A6B63] font-medium text-center lg:text-left">
          Built with insights from 23 Filipino families and healthcare professionals · AIM MIB 2025 Research
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm text-[#1A2B28] font-semibold">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#1E8C75]" />
            <span>NPC-compliant privacy</span>
          </div>
          <div className="flex items-center gap-2">
            <BadgeCheck className="w-4 h-4 text-[#1E8C75]" />
            <span>Doctor-verified records</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#1E8C75]" />
            <span>Family-controlled access</span>
          </div>
        </div>
      </div>
    </section>
  );
}
