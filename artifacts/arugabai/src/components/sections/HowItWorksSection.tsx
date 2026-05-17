import { Cpu, Mic, Database } from "lucide-react";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" data-testid="how-it-works-section" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-nunito text-3xl sm:text-4xl font-extrabold text-[#073D31]">
            Three capabilities. One health story.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#F4F7F6] rounded-2xl flex items-center justify-center mb-6 text-[#1E8C75]">
              <Cpu className="w-8 h-8" />
            </div>
            <h3 className="font-nunito font-bold text-2xl text-[#073D31] mb-4">Bai</h3>
            <p className="text-[#4A6B63] leading-relaxed">
              Your companion who knows your complete health history. Ready before every appointment, available between every visit.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#F4F7F6] rounded-2xl flex items-center justify-center mb-6 text-[#1E8C75]">
              <Mic className="w-8 h-8" />
            </div>
            <h3 className="font-nunito font-bold text-2xl text-[#073D31] mb-4">Consultation Capture</h3>
            <p className="text-[#4A6B63] leading-relaxed">
              AI transcribes with the doctor's consent. Doctor reviews and approves. Record stored with patient consent.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#F4F7F6] rounded-2xl flex items-center justify-center mb-6 text-[#1E8C75]">
              <Database className="w-8 h-8" />
            </div>
            <h3 className="font-nunito font-bold text-2xl text-[#073D31] mb-4">ArugaVault</h3>
            <p className="text-[#4A6B63] leading-relaxed">
              Every record, organized and shareable. Prescriptions, labs, discharge summaries, referral letters — all in one vault.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="border-l-4 border-[#1E8C75] bg-[#F4F7F6] p-8 rounded-r-2xl inline-block text-left">
            <p className="font-nunito text-2xl md:text-3xl italic text-[#073D31] font-bold">
              "AI drafts the record. Your doctor confirms it. You approve it. Then it's yours."
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
