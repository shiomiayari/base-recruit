"use client";
import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

const experiences = [
  "創業期だからこその組織の立ち上げ経験",
  "AIを活用して、実際の企業課題に向き合う経験",
  "リサーチ、企画、ライティング、資料作成までの一連の実務経験",
  "企業の中に眠る価値を見つけ、言語化する経験",
  "ブランディング、広報、マーケティングの基礎理解",
  "社員からフィードバックを受けながら仕事の質を高める経験",
  "AIを使って、仕事の進め方そのものを変えていく経験",
];

export const Experience = () => {
  return (
    <section className="relative z-[1] py-32 bg-white dark:bg-zinc-950 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-sm font-bold tracking-[0.3em] text-blue-500 mb-6 uppercase">Experience</h2>
            <h3 className="text-xl sm:text-2xl md:text-5xl font-black leading-[1.6] md:leading-tight tracking-tighter text-zinc-900 dark:text-white">
              AI時代の仕事を、見る側ではなく、<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 text-3xl sm:text-4xl md:text-5xl block md:inline mt-1 md:mt-0">作る側で経験する。</span>
            </h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, amount: 0.2 }}
              className="group flex items-center bg-zinc-50 dark:bg-zinc-900 rounded-xl p-4 md:p-5 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300 border border-zinc-200 dark:border-zinc-800"
            >
              <div className="text-2xl md:text-3xl font-black text-zinc-300 dark:text-zinc-700 font-mono group-hover:text-blue-300 dark:group-hover:text-blue-700 transition-colors duration-300 mr-4 shrink-0">
                {String(index + 1).padStart(2, '0')}
              </div>
              <p className="text-sm md:text-base font-bold text-zinc-800 dark:text-zinc-200 leading-snug flex-1">
                {exp}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
