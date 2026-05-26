"use client";
import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const audienceList = [
  "最先端のAI技術をビジネスに実装してみたい方",
  "将来、事業を動かす側に行きたい方",
  "大学生活の中で、何かに本気で取り組みたい方",
  "企業の価値を見つけ、言葉や企画で伝えることに興味がある方",
  "正解のある作業ではなく、自分で考えて進める仕事に挑戦したい方",
  "新しい組織の立ち上げに関わってみたい方",
];

export const TargetAudience = () => {
  return (
    <section className="relative z-[1] py-32 bg-zinc-950 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-900/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-red-900/10 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-sm font-bold tracking-[0.3em] text-blue-400 mb-6 uppercase">Who We Are Looking For</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black mb-10 leading-tight tracking-tighter">
              この夏、何かに<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400">本気で取り組みたい学生へ。</span>
            </h3>
            
            <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
              <p>
                経験や専門スキルよりも、AIを使って実際のビジネスに向き合ってみたい、事業を動かす側に行きたい、大学生活の中で何かに没頭したいという意志を重視します。
              </p>
              <p>
                BASEは8月に、東京・大阪・札幌で同時に立ち上げます。
                それに先立ち、今から本格的に関わりたい学生は、BASE準備室に参加し、立ち上げ前の準備段階から実務に関わることができます。
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl">
              <ul className="space-y-6">
                {audienceList.map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle2 className="text-blue-500 shrink-0 mt-1" size={24} />
                    <span className="text-zinc-100 font-medium text-lg leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
