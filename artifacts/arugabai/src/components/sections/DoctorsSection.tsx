import { Mic, FileText, CheckCircle, Archive } from "lucide-react";

export function DoctorsSection() {
  return (
    <section id="for-doctors" data-testid="doctors-section" className="bg-[#1A4A6E] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center lg:text-left">
        
        <div className="max-w-3xl mx-auto lg:mx-0 mb-16 text-center lg:text-left">
          <p className="text-[#6FD1C2] uppercase tracking-wider font-bold text-sm mb-3">For Hospital & Clinic Leaders</p>
          <h2 className="font-nunito text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
            Your doctors will never have to write during a consultation again.
          </h2>
          <p className="text-lg text-blue-100 leading-relaxed">
            Built for fellows, consultants, and hospital directors who can deploy ArugaBai across their organization. Every consultation captured. Every record verified. Zero writing burden on the physician.
          </p>
        </div>

        <div className="relative mb-20">
          <div className="hidden lg:block absolute top-8 left-12 right-12 h-0.5 bg-blue-400/20 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#1A4A6E] border-4 border-[#1E8C75] flex items-center justify-center mb-6 z-10">
                <Mic className="w-6 h-6 text-[#6FD1C2]" />
              </div>
              <h3 className="font-nunito font-bold text-lg text-white mb-2">Patient records consultation</h3>
              <p className="text-blue-200 text-sm">With doctor's consent, the session is recorded.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#1A4A6E] border-4 border-[#1E8C75] flex items-center justify-center mb-6 z-10">
                <FileText className="w-6 h-6 text-[#6FD1C2]" />
              </div>
              <h3 className="font-nunito font-bold text-lg text-white mb-2">AI structures the note</h3>
              <p className="text-blue-200 text-sm">Bai transcribes and formats the clinical record.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#1A4A6E] border-4 border-[#1E8C75] flex items-center justify-center mb-6 z-10">
                <CheckCircle className="w-6 h-6 text-[#6FD1C2]" />
              </div>
              <h3 className="font-nunito font-bold text-lg text-white mb-2">Doctor reviews & approves</h3>
              <p className="text-blue-200 text-sm">The physician edits and confirms. Their name, their authority.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#1A4A6E] border-4 border-[#1E8C75] flex items-center justify-center mb-6 z-10">
                <Archive className="w-6 h-6 text-[#6FD1C2]" />
              </div>
              <h3 className="font-nunito font-bold text-lg text-white mb-2">Record stored in ArugaVault</h3>
              <p className="text-blue-200 text-sm">Patient consents. Record saved. Accessible forever.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-xl p-8 border border-[#1A4A6E]/20 text-left">
            <h3 className="font-nunito font-bold text-2xl text-[#1A4A6E] mb-4">For your doctors</h3>
            <p className="text-[#1A2B28] leading-relaxed text-lg">
              Less documentation. More presence. Your physicians stay in the consultation, not behind a keyboard.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 border border-[#1A4A6E]/20 text-left">
            <h3 className="font-nunito font-bold text-2xl text-[#1A4A6E] mb-4">For your institution</h3>
            <p className="text-[#1A2B28] leading-relaxed text-lg">
              Org-wide deployment. Every consultation captured, verified, and complete. A searchable clinical record system across your practice.
            </p>
          </div>
        </div>

        <div className="text-center lg:text-left">
          <a 
            href="#signup" 
            className="inline-flex justify-center items-center bg-[#1E8C75] hover:bg-[#3FAA8D] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
          >
            Request a Demo →
          </a>
        </div>
        
      </div>
    </section>
  );
}
