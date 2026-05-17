import { Shield, Bell, Heart } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function SignupSection() {
  return (
    <section id="signup" data-testid="signup-section" className="bg-[#073D31] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <h2 className="font-nunito text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
            Be among the first Filipino families to access ArugaBai.
          </h2>
          <p className="text-lg text-white/90 leading-relaxed mb-12">
            We're building ArugaBai with early users. Join the waitlist and we'll reach out when we're ready for you.
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 text-white">
              <Shield className="w-5 h-5 text-[#6FD1C2]" />
              <span className="font-semibold">Secure & NPC-compliant</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <Bell className="w-5 h-5 text-[#6FD1C2]" />
              <span className="font-semibold">No spam</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <Heart className="w-5 h-5 text-[#6FD1C2]" />
              <span className="font-semibold">Built for Filipino families</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <form method="POST" action="ACTION_URL_PLACEHOLDER" className="space-y-6">
            
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[#1A2B28] font-bold">Full Name</Label>
              <Input 
                id="name" 
                name="name" 
                type="text" 
                required 
                data-testid="form-name"
                placeholder="Juan dela Cruz"
                className="w-full border-[#D4E2DE] focus:ring-[#1E8C75] focus:border-[#1E8C75]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#1A2B28] font-bold">Email Address</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                required 
                data-testid="form-email"
                placeholder="juan@example.com"
                className="w-full border-[#D4E2DE] focus:ring-[#1E8C75] focus:border-[#1E8C75]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role" className="text-[#1A2B28] font-bold">I am a...</Label>
              <select 
                id="role" 
                name="role" 
                required
                data-testid="form-role"
                className="w-full rounded-md border border-[#D4E2DE] bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E8C75] focus:border-[#1E8C75] text-[#1A2B28]"
              >
                <option value="" disabled selected>Select an option</option>
                <option value="caregiver">A family caregiver (managing a parent's health)</option>
                <option value="patient">A patient managing my own health</option>
                <option value="doctor">A doctor or healthcare professional</option>
                <option value="admin">A hospital or clinic administrator</option>
                <option value="other">Other</option>
              </select>
            </div>

            <button 
              type="submit" 
              data-testid="form-submit"
              className="w-full bg-[#1E8C75] hover:bg-[#3FAA8D] text-white px-6 py-4 rounded-lg text-lg font-bold transition-colors shadow-md mt-4"
            >
              Join the Waitlist →
            </button>
            
          </form>

          <p className="text-xs text-center text-[#4A6B63] mt-6 leading-relaxed">
            We respect your privacy. No spam — only updates that matter. NPC-compliant.
          </p>
        </div>

      </div>
    </section>
  );
}
