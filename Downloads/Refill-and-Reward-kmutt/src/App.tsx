/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { 
  Droplets, 
  Leaf, 
  MapPin, 
  ArrowRight, 
  Instagram, 
  Facebook,
  Link,
  Music,
  BarChart3,
  Lightbulb,
  CheckCircle2,
  Coffee,
  Globe,
  Clock,
  Store,
  ChevronRight
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts';
import { cn } from '@/src/lib/utils';
import logo from './assets/images/refill_and_reward_icon.png';
import mapImage from './assets/images/regenerated_image_1777614315098.jpg';

// --- Data ---

const factorData = [
  { name: 'Convenience', value: 85 },
  { name: 'Habit', value: 70 },
  { name: 'Lack of Incentives', value: 55 },
  { name: 'Availability', value: 65 },
];

// --- Components ---

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen p-4 md:p-8 flex flex-col gap-6 max-w-[1400px] mx-auto overflow-x-hidden">
      {/* --- Progress Bar --- */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-bento-primary z-50 origin-left"
        style={{ scaleX }}
      />

      {/* --- Header --- */}
      <header className="flex flex-col md:flex-row justify-between items-center px-2 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 overflow-hidden flex items-center justify-center">
            <img 
              src={logo} 
              alt="Refill & Reward Icon" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-black text-2xl tracking-tighter uppercase text-bento-ink">Refill & Reward</span>
        </div>
        <div className="px-5 py-2 bg-white border border-bento-primary/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-bento-primary/70 shadow-sm">
          GEN111 Section 37 | Group 3 (2026)
        </div>
      </header>

      {/* --- Main Bento Grid --- */}
      <main className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-6 gap-5 flex-grow min-h-[1200px] md:min-h-0">
        
        {/* --- 1. Hero Section --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="col-span-1 md:col-span-12 lg:col-span-7 row-span-3 bg-bento-primary rounded-[40px] p-8 md:p-12 flex flex-col justify-center text-white relative overflow-hidden shadow-2xl shadow-bento-primary/20"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-bento-accent-green mb-6 font-bold uppercase tracking-[0.2em] text-xs">
              <Leaf className="w-4 h-4" />
              Student Project 2026
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.85] mb-6 tracking-tight">
              Refill &<br/>
              <span className="text-bento-accent-green italic font-black">Reward.</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-md mb-10 leading-relaxed font-medium">
              Start your sustainable habit at KMUTT. Bring your own container and get rewarded.
            </p>
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="group w-fit px-10 py-5 bg-bento-accent-orange hover:bg-[#E07B1D] text-white font-black rounded-2xl shadow-xl transition-all duration-300 text-lg md:text-xl uppercase tracking-tight flex items-center gap-3 active:scale-95"
              >
                View Campaign Details
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-sm font-medium text-bento-accent-green/80 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                See how to get a 5 baht discount by bringing your own container
              </p>
            </div>
          </div>
        </motion.div>

        {/* --- 2. Our Campus Campaign --- */}
        <div className="col-span-1 md:col-span-6 lg:col-span-5 row-span-2 bento-card flex flex-col justify-center gap-2">
          <span className="text-[10px] uppercase font-black tracking-widest text-bento-primary/40 mb-2 block">Promotion Details</span>
          <div className="flex flex-col gap-1 mb-4">
            <h2 className="text-3xl md:text-4xl font-black text-bento-primary tracking-tight leading-none mb-2 underline decoration-bento-accent-orange decoration-4">Our Campus Campaign</h2>
            <div className="flex items-center gap-2 text-bento-accent-orange font-bold text-xl">
              <Coffee className="w-6 h-6" />
              <span>Bring Your Own Container = 5 Baht Discount</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-neutral-700">
              <Store className="w-4 h-4 text-bento-primary" />
              <span>Location: Loong Nhoom (ร้านลุงหนุ่ม) – KMUTT</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-neutral-700">
              <Clock className="w-4 h-4 text-bento-primary" />
              <span>Duration: 27 - 30 April 2026</span>
            </div>
          </div>
          <p className="text-sm text-neutral-500 font-medium mt-3 border-l-4 border-bento-accent-green pl-4 italic">
            "Students who bring their own containers will receive a 5 baht discount when purchasing food or drinks. This turns awareness into real action."
          </p>
        </div>

        {/* --- 3. Why This Campaign? --- */}
        <div className="col-span-1 md:col-span-12 lg:col-span-12 row-span-1 bg-bento-light-orange rounded-[32px] p-8 flex flex-col md:flex-row items-center justify-between border border-bento-accent-orange/20 shadow-sm gap-8 transition-all hover:shadow-md">
          <div className="flex-1">
             <p className="text-2xl font-black text-bento-accent-orange uppercase tracking-tight flex items-center gap-2 mb-3">
              <Globe className="w-5 h-5" />
              Why This Campaign?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <p className="text-sm text-neutral-700 leading-relaxed font-medium">
                  <span className="font-bold text-bento-ink text-lg block mb-1 text-balance">The Awareness vs Behavior Gap</span>
                  Students already know plastic is harmful, but convenience and habit are the main reasons for continued use. Knowledge doesn't always lead to action.
                </p>
              </div>
              <div className="space-y-3 border-l md:border-l-2 border-bento-accent-orange/20 pl-6">
                <p className="text-sm text-neutral-700 leading-relaxed font-medium">
                  <span className="font-bold text-bento-ink text-lg block mb-1">Small Incentives Work</span>
                  We found that even a ฿5 discount can be enough to encourage students to break their daily routine and choose a reusable container.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end shrink-0 bg-white/40 p-4 rounded-2xl border border-white">
            <div className="px-3 py-1 bg-bento-accent-orange/10 rounded-full text-[10px] font-black uppercase text-bento-accent-orange mb-2">Project Insight</div>
            <p className="text-xs font-bold text-bento-ink leading-tight text-right">Focused on daily<br/>habits at KMUTT</p>
          </div>
        </div>

        {/* --- 4. Simplified Insight --- */}
        <div className="col-span-1 md:col-span-6 lg:col-span-6 row-span-3 bento-card flex flex-col bg-bento-light-green border-transparent">
          <div className="flex justify-between items-start mb-6">
            <span className="text-[10px] uppercase font-black tracking-widest text-bento-primary/60">Research Insight</span>
            <div className="w-10 h-10 rounded-2xl bg-white/50 backdrop-blur-sm flex items-center justify-center text-bento-primary border border-white/20">
              <BarChart3 className="w-5 h-5" />
            </div>
          </div>
          <div className="flex-grow flex flex-col justify-center">
            <p className="text-2xl font-bold leading-tight mb-4 text-bento-ink">
              Habit is stronger than knowledge.
            </p>
            <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
              Most students choose plastic not because they don't care about nature, but because the campus environment makes it the "default." We aim to change that.
            </p>
            
            <div className="h-[140px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={factorData} layout="vertical">
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" width={100} axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#2D5A27' }} />
                  <Tooltip cursor={{ fill: 'rgba(255,255,255,0.2)' }} />
                  <Bar dataKey="value" fill="#2D5A27" radius={[0, 10, 10, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-bento-primary/5 flex items-center justify-between">
            <p className="text-[10px] font-bold uppercase text-bento-primary/60">Research Insight Summary</p>
            <span className="text-[9px] font-black uppercase text-neutral-400">behavioral science</span>
          </div>
        </div>

        {/* --- 5. How It Works --- */}
        <div id="how-it-works" className="col-span-1 md:col-span-6 lg:col-span-6 row-span-3 bento-card flex flex-col">
          <div className="flex items-center gap-2 mb-6">
             <div className="p-2 bg-bento-accent-orange/10 rounded-xl text-bento-accent-orange">
                <Lightbulb className="w-5 h-5" />
             </div>
             <span className="text-[10px] uppercase font-black tracking-[0.2em] text-bento-primary/50">The Action Loop</span>
          </div>
          
          <div className="space-y-6 flex-grow">
            {[
              { id: 1, color: "bg-bento-accent-orange", text: "Bring your own container / bottle", icon: <Coffee className="w-4 h-4" /> },
              { id: 2, color: "bg-bento-primary", text: "Buy food or drinks at Loong Nhoom", icon: <Store className="w-4 h-4" /> },
              { id: 3, color: "bg-bento-accent-green", text: "Get 5 baht discount instantly", icon: <Droplets className="w-4 h-4 text-bento-primary" /> },
            ].map((s) => (
              <div key={s.id} className="flex items-center gap-4 group">
                <div className={cn("w-10 h-10 rounded-full text-white flex items-center justify-center font-black shadow-lg shadow-black/5 transition-transform group-hover:scale-110", s.color)}>
                  {s.id}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-bento-ink leading-snug">{s.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-dashed border-neutral-100 flex flex-col gap-1">
            <p className="text-[11px] text-neutral-400 font-bold uppercase tracking-widest">Campaign Message</p>
            <p className="text-sm font-serif italic text-bento-primary/70 italic leading-relaxed">
              "Small actions on campus can create global impact."
            </p>
          </div>
        </div>

        {/* --- 6. Refill Map Section --- */}
        <div id="map" className="col-span-1 md:col-span-12 lg:col-span-12 row-span-4 bg-bento-ink rounded-[40px] p-8 text-white overflow-hidden relative shadow-2xl flex flex-col">
           <div className="relative z-10 flex flex-col h-full">
             <div className="flex justify-between items-start mb-6">
               <div>
                  <span className="text-[10px] uppercase font-black tracking-[0.2em] opacity-40 mb-2 block">Refill stations</span>
                  <h3 className="text-4xl font-black leading-tight tracking-tight text-balance">Refill Instead of Buying</h3>
               </div>
               <div className="px-4 py-2 rounded-full border border-bento-accent-green/30 text-[10px] font-black text-bento-accent-green uppercase bg-bento-accent-green/5">
                 Free Campus Access
               </div>
             </div>
             
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-grow">
               {/* Map Image Section */}
               <div className="lg:col-span-7 bg-white/5 rounded-3xl border border-white/10 relative overflow-hidden h-[300px] md:h-full">
                 <img 
                   src={mapImage} 
                   alt="KMUTT Campus Map"
                   className="w-full h-full object-contain p-2"
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-bento-ink/40 via-transparent to-transparent pointer-events-none"></div>
                 <button 
                  onClick={() => window.open(mapImage, '_blank')}
                  className="absolute bottom-4 left-4 bg-bento-accent-green text-bento-ink px-4 py-2 rounded-xl text-[10px] font-black uppercase shadow-lg active:scale-95 transition-transform"
                 >
                   View Full Map
                 </button>
               </div>

               {/* Scrollable List Section */}
               <div className="lg:col-span-5 flex flex-col h-full overflow-hidden">
                 <p className="text-sm opacity-60 font-medium leading-relaxed mb-6">
                   Reduce single-use plastic by using refill stations available around campus. No need to buy bottled water every day.
                 </p>
                 
                 <div className="space-y-3 flex-grow overflow-y-auto pr-2 custom-scrollbar max-h-[350px]">
                    {[
                      { name: "Learning Exchange (LX)", sub: "Water Station on L1 Corridor" },
                      { name: "CB Building (20, 21)", sub: "Refill Zone near the Lounge" },
                      { name: "Library", sub: "Available in multiple areas" },
                      { name: "Faculty of Engineering", sub: "Available on various floors" },
                      { name: "School of IT (SIT)", sub: "Common area refill points" },
                    ].map((loc, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-bento-accent-green/30 transition-all group">
                        <MapPin className="w-5 h-5 text-bento-accent-green shrink-0" />
                        <div>
                          <p className="text-[12px] font-black uppercase tracking-wide group-hover:text-bento-accent-green transition-colors">{loc.name}</p>
                          <p className="text-[10px] opacity-40 uppercase font-bold tracking-widest">{loc.sub}</p>
                        </div>
                      </div>
                    ))}
                 </div>
               </div>
             </div>
           </div>
           
           <div className="absolute top-0 right-0 p-8 opacity-5">
             <Globe className="w-96 h-96 rotate-12" />
           </div>
        </div>

        {/* --- 7. Share Your Action --- */}
        <div className="col-span-1 md:col-span-6 lg:col-span-12 row-span-2 bento-card flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden bg-white">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                <Instagram className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Join the movement</span>
            </div>
            <h3 className="text-3xl font-black tracking-tighter text-bento-ink uppercase">Stay Updated</h3>
            <p className="text-sm text-neutral-500 font-medium max-w-md leading-relaxed">
              Join the movement and stay updated through our social platforms. Share your reusable habit with us!
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="font-mono font-bold text-sm text-bento-primary bg-bento-light-green px-3 py-1 rounded-lg">
                #KMUTTCampaign
              </div>
              <div className="font-mono font-bold text-sm text-bento-accent-orange bg-bento-light-orange px-3 py-1 rounded-lg">
                @refill_reward_kmutt
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 w-fit mx-auto md:mx-0">
            <a 
              href="https://linktr.ee/refillandreward.kmutt" 
              target="_blank" 
              rel="noopener noreferrer"
              title="Linktree"
              className="w-16 h-16 flex items-center justify-center bg-bento-primary text-white rounded-2xl transition-all hover:scale-110 hover:shadow-lg active:scale-95 group relative overflow-hidden"
            >
              <Link className="w-7 h-7" />
            </a>

            <a 
              href="https://www.instagram.com/refill_reward_kmutt" 
              target="_blank" 
              rel="noopener noreferrer"
              title="Instagram"
              className="w-16 h-16 flex items-center justify-center bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white rounded-2xl transition-all hover:scale-110 hover:shadow-lg active:scale-95 group"
            >
              <Instagram className="w-7 h-7" />
            </a>

            <a 
              href="https://www.tiktok.com/@refill.and.reward" 
              target="_blank" 
              rel="noopener noreferrer"
              title="TikTok"
              className="w-16 h-16 flex items-center justify-center bg-black text-white rounded-2xl transition-all hover:scale-110 hover:shadow-lg active:scale-95 group"
            >
              <Music className="w-7 h-7" />
            </a>

            <a 
              href="https://www.facebook.com/share/1BBYXQE1HP" 
              target="_blank" 
              rel="noopener noreferrer"
              title="Facebook"
              className="w-16 h-16 flex items-center justify-center bg-[#1877F2] text-white rounded-2xl transition-all hover:scale-110 hover:shadow-lg active:scale-95 group"
            >
              <Facebook className="w-7 h-7" />
            </a>
          </div>
        </div>
      </main>

      {/* --- Footer --- */}
      <footer className="mt-8 flex flex-col md:flex-row justify-between items-center px-4 pb-8 border-t border-bento-primary/5 pt-8 gap-4">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
           <div className="flex flex-col items-center md:items-start text-center md:text-left">
             <div className="text-[10px] uppercase font-black tracking-widest text-bento-primary/60 mb-1">Subject Project (2026)</div>
             <p className="text-xs font-bold text-bento-ink leading-relaxed">
               This campaign is part of the subject<br/>
               <span className="text-bento-primary uppercase tracking-tight font-black">GEN 111 MAN AND ETHICS OF LIVING</span>
             </p>
           </div>
           <div className="hidden md:block h-12 w-[1px] bg-neutral-200"></div>
           <div className="text-[10px] uppercase font-black tracking-widest text-neutral-400">Innovation for Sustainability | Section 37 Group 3</div>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex gap-4">
             <div className="text-[10px] font-bold text-neutral-300 uppercase tracking-widest italic">© 2026 KMUTT University</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
