import { Heart, Share2, Globe } from "lucide-react";

export function FamiliesSection() {
  return (
    <section id="for-families" data-testid="families-section" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <p className="text-[#1E8C75] uppercase tracking-wider font-bold text-sm mb-3">For Families</p>
          <h2 className="font-nunito text-3xl sm:text-4xl font-extrabold text-[#073D31] mb-6 leading-tight">
            Stop managing your parent's health from memory.
          </h2>
          <p className="text-lg text-[#4A6B63] leading-relaxed">
            You've become the family health coordinator — fielding Viber messages from siblings, photographing every prescription, Googling every side effect. ArugaBai gives your family one organized system, so you can stop worrying and start knowing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="border border-[#D4E2DE] bg-[#F4F7F6]/50 rounded-2xl p-8 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#1E8C75]/10 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-6 h-6 text-[#1E8C75]" />
            </div>
            <h3 className="font-nunito font-bold text-xl text-[#073D31] mb-3">One family record</h3>
            <p className="text-[#4A6B63] leading-relaxed">
              ArugaVault stores every prescription, lab result, and doctor's note in one organized place. No more digging through camera rolls.
            </p>
          </div>

          <div className="border border-[#D4E2DE] bg-[#F4F7F6]/50 rounded-2xl p-8 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#1E8C75]/10 rounded-full flex items-center justify-center mb-6">
              <Share2 className="w-6 h-6 text-[#1E8C75]" />
            </div>
            <h3 className="font-nunito font-bold text-xl text-[#073D31] mb-3">Share with anyone</h3>
            <p className="text-[#4A6B63] leading-relaxed">
              Send your sibling to the consultation instead. Everything they need is already there — history, current meds, doctor's notes.
            </p>
          </div>

          <div className="border border-[#D4E2DE] bg-[#F4F7F6]/50 rounded-2xl p-8 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#1E8C75]/10 rounded-full flex items-center justify-center mb-6">
              <Globe className="w-6 h-6 text-[#1E8C75]" />
            </div>
            <h3 className="font-nunito font-bold text-xl text-[#073D31] mb-3">Always in the loop</h3>
            <p className="text-[#4A6B63] leading-relaxed">
              Even from abroad, you see every update, every new record, every change in Nanay's health. Real-time, organized, clear.
            </p>
          </div>
        </div>

        <div className="bg-[#F4F7F6] border-l-4 border-[#E8960F] p-8 rounded-r-xl mb-12">
          <p className="text-xl italic text-[#1A2B28] font-medium leading-relaxed mb-4">
            "I take photos of every prescription. I set the reminders. I Google every side effect. And still I feel like I'm not doing enough."
          </p>
          <p className="text-[#4A6B63] font-semibold">— The Caring Child</p>
        </div>

        <div>
          <a href="#signup" className="inline-flex items-center text-[#1E8C75] font-bold text-lg hover:text-[#073D31] transition-colors group">
            Organize Your Family's Health
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
