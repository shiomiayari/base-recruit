"use client";
import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const voices = [
  {
    name: "佐藤 裕樹",
    role: "CEO, Tech Corp",
    content: "AIを活用した分析によって、自分たちでも気づかなかった創業期の熱量が再燃しました。単なる記念品ではなく、組織の羅針盤となる一冊になりました。",
  },
  {
    name: "田中 美咲",
    role: "Marketing Manager",
    content: "デザインのクオリティが圧倒的です。AIとの共創というプロセスも刺激的で、完成までのプロセス自体が素晴らしいチームビルディングになりました。",
  },
  {
    name: "Robert Smith",
    role: "Creative Director",
    content: "The fusion of high-end editorial design and AI data processing is revolutionary. BASE is setting a new standard for corporate history archives.",
  },
];

export const VoicesSection = () => {
  return (
    <section className="relative z-[1] py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-blue-300 mb-2 uppercase italic">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-4 text-white">PARTICIPANT VOICES</h3>
          <p className="text-white/90 max-w-2xl mx-auto">プロジェクトを共にしたパートナーからの声をご紹介します。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {voices.map((voice, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.01 }}
              className="p-8 bg-white/10 backdrop-blur-sm rounded-3xl relative border border-white/20"
            >
              <Quote size={40} className="text-blue-200 dark:text-blue-900 absolute top-6 right-6" />
              <p className="text-lg mb-8 italic relative z-10 leading-relaxed text-white">
                "{voice.content}"
              </p>
              <div>
                <p className="font-bold text-lg text-white">{voice.name}</p>
                <p className="text-sm text-white/70">{voice.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};