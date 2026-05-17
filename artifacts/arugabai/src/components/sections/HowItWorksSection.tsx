import { Cpu, Mic, Database } from "lucide-react";

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      data-testid="how-it-works-section"
      className="bg-white py-36 px-6 sm:px-10 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="font-nunito text-4xl sm:text-5xl font-extrabold text-[#073D31]">
            Three capabilities. One health story.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-28">
          {[
            {
              icon: Cpu,
              title: "Bai",
              desc: "Your companion who knows your complete health history. Ready before every appointment, available between every visit.",
            },
            {
              icon: Mic,
              title: "Consultation Capture",
              desc: "AI transcribes with the doctor's consent. Doctor reviews and approves. Record stored with patient consent.",
            },
            {
              icon: Database,
              title: "ArugaVault",
              desc: "Every record, organized and shareable. Prescriptions, labs, discharge summaries, referral letters — all in one vault.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#F4F7F6] rounded-3xl flex items-center justify-center mb-8 text-[#1E8C75]">
                <Icon className="w-9 h-9" />
              </div>
              <h3 className="font-nunito font-bold text-2xl text-[#073D31] mb-5">{title}</h3>
              <p className="text-[#4A6B63] leading-relaxed text-lg">{desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <blockquote className="border-l-4 border-[#1E8C75] bg-[#F4F7F6] px-10 py-10 rounded-r-2xl">
            <p className="font-nunito text-2xl md:text-3xl italic text-[#073D31] font-bold leading-snug">
              "AI drafts the record. Your doctor confirms it. You approve it. Then it's yours."
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
