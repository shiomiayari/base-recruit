"use client";
import React, { useRef } from 'react';
import { motion, useTransform } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const noteImages = [
  "https://images.unsplash.com/photo-1695634621295-8f83685a35bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGVzaWduJTIwYWdlbmN5JTIwb2ZmaWNlJTIwbW9kZXJuJTIwcHJlbWl1bSUyMGJvb2slMjBjb3ZlcnMlMjBhcmNoaXRlY3R1cmUlMjBjcmVhdGl2ZSUyMHByb2Zlc3Npb25hbHMlMjBBSSUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdCUyMGx1eHVyeSUyMHN0YXRpb25lcnl8ZW58MXx8fHwxNzc4NDI4NjMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1752650736242-d06f95024793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGNyZWF0aXZlJTIwcHJvZmVzc2lvbmFsJTIwdGVhbSUyMHdvcmtpbmclMjBpbiUyMHN0dWRpbyUyMG9mZmljZXxlbnwxfHx8fDE3Nzg0Mjg2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1718670013941-9c2aa1d5be80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwcXVhbGl0eSUyMGNvZmZlZSUyMHRhYmxlJTIwYm9vayUyMGRlc2lnbiUyMHByaW50JTIwYW5uaXZlcnNhcnklMjBib29rJTIwcGFwZXIlMjB0ZXh0dXJlfGVufDF8fHx8MTc3ODQyODY0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1542744094-24638eff58bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZXNpZ24lMjBzdHVkaW8lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzc4NDMwNjg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYSUyMGNvbnN1bHRhbmN5JTIwdGVjaHxlbnwxfHx8fDE3Nzg0MzA2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
];

const articles = [
  {
    id: 1,
    title: "なぜJBAがAI組織BASEを立ち上げるのか",
    date: "2026.05.01",
    category: "BASE立ち上げの背景",
    image: noteImages[0],
  },
  {
    id: 2,
    title: "実際の業務内容、プロジェクト、AI活用の進め方",
    date: "2026.05.05",
    category: "具体的に何をやるのか",
    image: noteImages[1],
  },
  {
    id: 3,
    title: "大手企業支援のナレッジをAI化し、地方の一流企業へ広げること",
    date: "2026.05.10",
    category: "BASEの目的",
    image: noteImages[2],
  },
  {
    id: 4,
    title: "立ち上げに関わる社員、学生、各拠点のメンバー",
    date: "2026.05.15",
    category: "メンバー・仲間紹介",
    image: noteImages[3],
  },
];

export const NoteSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="note" className="py-32 relative z-[1] bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-sm font-bold tracking-[0.3em] text-blue-500 mb-4 uppercase">Special Content</h2>
            <p className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 dark:text-white mb-6">BASEをもっと知る。</p>
            <p className="text-zinc-700 dark:text-zinc-300 max-w-2xl text-lg leading-relaxed">
              LPでは伝えきれないBASEの立ち上げ背景、具体的な仕事内容、本当の目的、働く人や仲間の紹介は、note記事で詳しく発信していきます。
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => scroll('left')}
              className="p-4 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-4 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
            <button className="hidden sm:flex group items-center space-x-3 text-sm font-bold bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-8 py-4 rounded-full hover:opacity-90 transition-all">
              <span>VIEW ALL</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-8 px-[5vw] scrollbar-hide pb-12 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {articles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true, amount: 0.01 }}
            className="flex-shrink-0 w-[85vw] md:w-[450px] group cursor-pointer snap-center"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] mb-8 bg-zinc-100 dark:bg-zinc-900">
              <ImageWithFallback
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 bg-white dark:bg-zinc-950 backdrop-blur-md text-[10px] font-black tracking-widest rounded-full shadow-xl text-zinc-900 dark:text-white">
                  {article.category}
                </span>
              </div>
            </div>
            <div className="px-2">
              <p className="text-zinc-700 dark:text-zinc-300 text-xs mb-4 font-mono tracking-widest">{article.date}</p>
              <h3 className="text-2xl font-bold leading-tight text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {article.title}
              </h3>
              <div className="mt-6 flex items-center gap-2 text-zinc-700 dark:text-zinc-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                <span className="text-xs font-bold tracking-widest">READ MORE</span>
                <div className="h-[1px] w-8 bg-zinc-400 dark:bg-zinc-600 group-hover:w-12 group-hover:bg-blue-500 transition-all" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
};