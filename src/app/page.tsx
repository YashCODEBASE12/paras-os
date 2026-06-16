"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen font-sans selection:bg-[#F45A97] selection:text-white pb-0">
      {/* HEADER */}
      <header className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#F45A97] flex items-center justify-center text-white font-serif font-bold text-xl">
            B
          </div>
          <span className="font-serif font-bold text-[#2A1320] text-xl tracking-tight">Beauty Rewards</span>
        </div>
        <div className="px-4 py-2 bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.02)] text-xs font-medium text-[#2A1320] flex items-center gap-2">
          <span className="text-[#2A1320]">✦</span> Limited Entries Available
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          <div className="flex flex-col items-start gap-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm text-[11px] font-bold tracking-widest text-[#6A5B63] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#F45A97]"></span>
              BEAUTY GIVEAWAY • FREE ENTRY
            </div>
            
            <h1 className="font-serif text-5xl lg:text-[5.5rem] font-bold text-[#2A1320] leading-[1.1] tracking-tight">
              Win a <span className="text-[#F45A97] font-light italic">$1000</span><br />
              Beauty Shopping<br />
              Experience
            </h1>

            <p className="text-lg text-[#6A5B63] max-w-[28rem] leading-relaxed font-medium">
              Enter for a chance to receive beauty and cosmetic rewards from a leading beauty brand.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-2">
              <a href="https://giftclick.org/aff_c?offer_id=189&aff_id=188809" className="bg-gradient-to-r from-[#F45A97] to-[#E54D93] text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-shadow flex items-center gap-2">
                Claim Offer <span className="text-xl leading-none">→</span>
              </a>
              
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full border-2 border-[#FFF9FA] bg-[#f9a8d4]" />
                  <div className="w-7 h-7 rounded-full border-2 border-[#FFF9FA] bg-[#F7B38C]" />
                  <div className="w-7 h-7 rounded-full border-2 border-[#FFF9FA] bg-[#d9ba8e]" />
                </div>
                <span className="text-sm text-[#6A5B63] font-medium">Trusted by beauty lovers</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-4">
              {["No Purchase Necessary", "Secure & Private", "18+"].map((badge) => (
                <div key={badge} className="px-3 py-1.5 bg-[#fdf2f6] rounded-full text-xs font-medium text-[#6A5B63] flex items-center gap-1.5">
                  <span className="text-[#6A5B63]">✓</span> {badge}
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full aspect-square max-w-lg mx-auto lg:mr-0 lg:ml-auto">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-[#fdeaf2] to-[#ffdbed] rounded-[3rem]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Floating shapes */}
            <motion.div 
              className="absolute top-16 -right-4 w-24 h-24 bg-[#F7B38C] rounded-3xl opacity-90"
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div 
              className="absolute bottom-24 -left-6 w-20 h-20 bg-[#fdeaf2] rounded-full shadow-sm"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />

            {/* Gift Card */}
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] bg-gradient-to-br from-[#F45A97] to-[#E54D93] rounded-[2rem] p-8 shadow-2xl shadow-pink-500/20 text-white"
              initial={{ rotate: -8 }}
              animate={{ rotate: [-8, -5, -8], y: ["-50%", "-52%", "-50%"], x: "-50%" }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex justify-between items-start mb-14">
                <span className="text-xs font-bold tracking-widest uppercase opacity-90 mt-2">Beauty Gift Card</span>
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white text-lg">✦</span>
                </div>
              </div>
              <div className="text-[3.5rem] font-serif font-bold mb-14 tracking-tight">$1,000</div>
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-widest opacity-80 mb-2">Card No.</div>
                  <div className="font-mono text-xs tracking-[0.3em] opacity-90 font-medium">•••• •••• •••• 2025</div>
                </div>
                <div className="font-serif italic font-bold text-3xl pr-2">Beauty</div>
              </div>
            </motion.div>

            {/* Free entry badge */}
            <motion.div 
              className="absolute bottom-10 right-10 px-5 py-2.5 bg-white rounded-full shadow-lg text-sm font-bold text-[#2A1320] flex items-center gap-2"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <span className="text-[#F7B38C] text-lg">✨</span> Free Entry
            </motion.div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🎁", title: "Free Entry", desc: "No purchase necessary to participate.", color: "bg-[#F45A97]" },
              { icon: "⚡", title: "Quick Registration", desc: "Complete entry in under 2 minutes.", color: "bg-[#F45A97]" },
              { icon: "💄", title: "Beauty Rewards", desc: "Premium beauty shopping opportunity.", color: "bg-[#E54D93]" },
              { icon: "🌎", title: "Select Countries", desc: "Available in US, CA, UK & AU.", color: "bg-[#E54D93]" },
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-shadow">
                <div className={`w-12 h-12 rounded-full ${feature.color} flex items-center justify-center text-xl mb-6 shadow-inner`}>
                  {feature.icon}
                </div>
                <h3 className="font-serif font-bold text-[1.35rem] text-[#2A1320] mb-3">{feature.title}</h3>
                <p className="text-sm text-[#6A5B63] leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section className="max-w-7xl mx-auto px-6 py-24 text-center">
          <div className="mb-16">
            <h4 className="text-[#F45A97] text-xs font-bold tracking-[0.2em] uppercase mb-5">Simple Process</h4>
            <h2 className="font-serif text-[2.75rem] md:text-5xl font-bold text-[#2A1320] mb-5">How It Works</h2>
            <p className="text-[#6A5B63] text-lg font-medium">Three quick steps. No hidden fees, no purchase required.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Claim Offer", desc: "Confirm your country and age to qualify for entry." },
              { num: "02", title: "Complete Registration", desc: "Fill out a quick form with your basic details." },
              { num: "03", title: "Receive Confirmation", desc: "Get your confirmation and entry details by email." },
            ].map((step, i) => (
              <div key={i} className="bg-white rounded-[2.5rem] p-10 text-left shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-shadow relative overflow-hidden">
                <div className="font-serif text-[3.5rem] font-bold text-[#F7B38C] mb-6 leading-none">{step.num}</div>
                <h3 className="font-serif font-bold text-[1.4rem] text-[#2A1320] mb-4">{step.title}</h3>
                <p className="text-[#6A5B63] font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* COUNTRIES SECTION */}
        <section className="max-w-5xl mx-auto px-6 py-12">
          <div className="bg-gradient-to-b from-[#ffeaf2] to-[#ffdce9] rounded-[3rem] p-12 md:p-20 text-center">
            <h2 className="font-serif text-3xl md:text-[2.5rem] font-bold text-[#2A1320] mb-5">Available In Select Countries</h2>
            <p className="text-[#6A5B63] font-medium mb-12">This promotion is open to eligible residents of the following countries.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { code: "US", name: "United\nStates" },
                { code: "CA", name: "Canada" },
                { code: "GB", name: "United\nKingdom" },
                { code: "AU", name: "Australia" },
              ].map((country) => (
                <div key={country.code} className="bg-white/70 backdrop-blur-sm rounded-[1.5rem] p-5 flex items-center justify-center gap-4 py-6">
                  <span className="font-sans font-medium text-xl text-[#2A1320]">{country.code}</span>
                  <span className="text-xs font-bold text-[#2A1320] text-left leading-tight whitespace-pre-line">{country.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="max-w-3xl mx-auto px-6 py-24">
          <div className="text-center mb-14">
            <h4 className="text-[#F45A97] text-xs font-bold tracking-[0.2em] uppercase mb-5">FAQ</h4>
            <h2 className="font-serif text-[2.75rem] font-bold text-[#2A1320]">Questions, Answered</h2>
          </div>

          <div className="flex flex-col gap-5">
            <FaqItem 
              question="Who can participate?" 
              answer="Open to residents of the United States, Canada, United Kingdom, and Australia who are 18 years of age or older."
              defaultOpen={true}
            />
            <FaqItem question="How long does registration take?" answer="Registration typically takes under 2 minutes to complete." />
            <FaqItem question="Do I need to purchase anything?" answer="No, there is no purchase necessary to participate." />
            <FaqItem question="How are winners selected?" answer="Winners are selected at random from all eligible entries received." />
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="bg-gradient-to-b from-[#F45A97] to-[#d63b7e] pt-24 pb-16 px-6 text-center text-white relative overflow-hidden rounded-t-[3rem] mt-12">
          <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
            <div className="inline-block px-5 py-2 bg-white/20 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase mb-8 backdrop-blur-sm">
              Don't Miss Out
            </div>
            <h2 className="font-serif text-[2.75rem] md:text-5xl lg:text-[3.5rem] font-bold mb-8 tracking-tight">
              Your $1000 Beauty Moment Awaits
            </h2>
            <p className="text-white text-lg mb-12 max-w-xl mx-auto font-medium">
              Join thousands of beauty lovers entering today. Quick, free, and effortless.
            </p>
            <a href="https://giftclick.org/aff_c?offer_id=189&aff_id=188809" className="bg-white text-[#2A1320] px-10 py-5 rounded-full font-bold text-lg shadow-[0_8px_30px_rgba(244,90,151,0.4)] hover:shadow-[0_8px_30px_rgba(244,90,151,0.6)] transition-shadow flex items-center gap-3 mb-8">
              Continue To Registration <span className="text-xl leading-none">→</span>
            </a>
            <div className="text-white text-sm font-medium">
              No purchase necessary • 18+ • Terms apply
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#2A1320] text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[11px] text-[#fdeaf2] opacity-80 mb-8 leading-loose max-w-3xl mx-auto font-medium">
            This promotional page is independently operated and is not affiliated with or endorsed by Kylie Cosmetics. Participation, eligibility requirements, and prize availability are subject to the terms and conditions of the promotional offer.
          </p>
          <p className="text-[11px] text-[#fdeaf2] opacity-60 font-medium">
            © 2026 Beauty Rewards Promo. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FaqItem({ question, answer, defaultOpen = false }: { question: string, answer: string, defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white rounded-[1.5rem] overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="font-bold text-[#2A1320]">{question}</span>
        <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors shrink-0 ${isOpen ? 'bg-[#fdeaf2] text-[#F45A97]' : 'bg-[#fdeaf2] text-[#F45A97]'}`}>
          {isOpen ? <Minus size={14} strokeWidth={3} /> : <Plus size={14} strokeWidth={3} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-8 pb-7 pt-2 text-sm text-[#6A5B63] leading-relaxed font-medium">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
