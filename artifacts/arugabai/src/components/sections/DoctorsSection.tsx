import { Mic, FileText, CheckCircle, Archive } from "lucide-react";

export function DoctorsSection() {
  return (
    <section
      id="for-doctors"
      data-testid="doctors-section"
      className="bg-[#1A4A6E] py-36 px-6 sm:px-10 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">

        <div className="max-w-3xl mb-20">
          <p className="text-[#6FD1C2] uppercase tracking-widest font-bold text-xs mb-5">For Hospital & Clinic Leaders</p>
          <h2 className="font-nunito text-4xl sm:text-5xl font-extrabold text-white mb-8 leading-tight">
            Your doctors will never have to write during a consultation again.
          </h2>
          <p className="text-xl text-blue-100/90 leading-relaxed">
            Built for fellows, consultants, and hospital directors who can deploy ArugaBai across their organization. Every consultation captured. Every record verified. Zero writing burden on the physician.
          </p>
        </div>

        <div className="relative mb-24">
          <div className="hidden lg:block absolute top-8 left-16 right-16 h-px bg-white/10 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 relative z-10">
            {[
              { icon: Mic, step: "01", title: "Patient records consultation", desc: "With doctor's consent, the session is recorded." },
              { icon: FileText, step: "02", title: "AI structures the note", desc: "Bai transcribes and formats the clinical record." },
              { icon: CheckCircle, step: "03", title: "Doctor reviews & approves", desc: "The physician edits and confirms. Their name, their authority." },
              { icon: Archive, step: "04", title: "Record stored in ArugaVault", desc: "Patient consents. Record saved. Accessible forever." },
            ].map(({ icon: Icon, step, title, desc }) => (
              <div key={step} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#1A4A6E] border-2 border-[#1E8C75] flex items-center justify-center mb-6 relative z-10 shadow-lg shadow-[#1E8C75]/20">
                  <Icon className="w-6 h-6 text-[#6FD1C2]" />
                </div>
                <p className="text-[#6FD1C2] text-xs font-bold tracking-widest uppercase mb-3">{step}</p>
                <h3 className="font-nunito font-bold text-base text-white mb-3 leading-snug">{title}</h3>
                <p className="text-blue-200/80 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
            <h3 className="font-nunito font-bold text-2xl text-white mb-5">For your doctors</h3>
            <p className="text-blue-100/90 leading-relaxed text-lg">
              Less documentation. More presence. Your physicians stay in the consultation, not behind a keyboard.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
            <h3 className="font-nunito font-bold text-2xl text-white mb-5">For your institution</h3>
            <p className="text-blue-100/90 leading-relaxed text-lg">
              Org-wide deployment. Every consultation captured, verified, and complete. A searchable clinical record system across your practice.
            </p>
          </div>
        </div>

        <a
          href="#signup"
          className="inline-flex justify-center items-center bg-[#1E8C75] hover:bg-[#3FAA8D] text-white px-10 py-5 rounded-xl text-lg font-bold transition-colors shadow-xl shadow-black/20"
        >
          Request a Demo →
        </a>

      </div>
    </section>
  );
}
