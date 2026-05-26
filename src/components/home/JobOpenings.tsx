"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, Zap, Palette, PenTool, Code } from 'lucide-react';

const jobs = [
  {
    index: '01',
    title: 'AIコンサルタント職',
    engTitle: 'AI Consultant',
    icon: <Zap size={20} />,
    desc: '企業の経営課題をAIで解決。戦略立案から実行まで伴走し、事業成長を支援します。',
    tags: ['Strategy', 'AI Implementation', 'Consulting'],
  },
  {
    index: '02',
    title: 'AIクリエイティブ職',
    engTitle: 'AI Creative',
    icon: <Palette size={20} />,
    desc: 'AI技術とデザインセンスを融合。次世代のビジュアルコミュニケーションを創造します。',
    tags: ['Design', 'Generative Art', 'UI/UX'],
  },
  {
    index: '03',
    title: 'AIライター職',
    engTitle: 'AI Writer',
    icon: <PenTool size={20} />,
    desc: 'AIを活用した高度な言語化。企業の想いを抽出し、伝わる言葉へと昇華させます。',
    tags: ['Copywriting', 'Prompt Engineering', 'Editorial'],
  },
  {
    index: '04',
    title: 'AIエンジニア職',
    engTitle: 'AI Engineer',
    icon: <Code size={20} />,
    desc: '独自のAIツールやシステムを構築。デザイン会社の枠を超えた技術革新をリードします。',
    tags: ['Development', 'Machine Learning', 'Product'],
  },
];

export const JobOpenings = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const lineScale = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

  return (
    <section
      id="careers"
      ref={sectionRef}
      className="relative z-[1] py-32 bg-transparent text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.01 }}
          >
            <p className="text-xs font-bold tracking-[0.4em] text-blue-400 mb-5 uppercase">Join Our Team</p>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
              募集職種
            </h3>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.01 }}
            className="text-zinc-200 max-w-sm text-base leading-relaxed"
          >
            AIと共に、クリエイティブの限界を突破する。<br />
            新時代のプロフェッショナルを募集しています。
          </motion.p>
        </div>

        {/* Animated divider */}
        <div className="relative h-[1px] bg-zinc-800 mb-0 overflow-hidden">
          <motion.div
            style={{ scaleX: lineScale, transformOrigin: 'left' }}
            className="absolute inset-0 bg-blue-500"
          />
        </div>

        {/* Job list */}
        <div className="divide-y divide-zinc-800">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, amount: 0.01 }}
              className="group grid grid-cols-[3rem_1fr_auto] md:grid-cols-[4rem_1fr_1fr_auto] items-center gap-6 py-10 cursor-pointer hover:bg-white/[0.02] transition-colors duration-300 px-2"
            >
              {/* Number */}
              <span className="text-xs font-mono text-zinc-400 group-hover:text-zinc-200 transition-colors">
                {job.index}
              </span>

              {/* Title block */}
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-zinc-300 group-hover:text-blue-400 transition-colors">
                    {job.icon}
                  </span>
                  <h4 className="text-xl md:text-2xl font-black tracking-tighter group-hover:text-blue-400 transition-colors duration-300">
                    {job.title}
                  </h4>
                </div>
                <p className="text-[10px] font-bold tracking-[0.3em] text-zinc-400 uppercase ml-9">
                  {job.engTitle}
                </p>
              </div>

              {/* Tags — hidden on mobile */}
              <div className="hidden md:flex flex-wrap gap-2">
                {job.tags.map((tag, ti) => (
                  <span
                    key={ti}
                    className="px-3 py-1 border border-zinc-600 group-hover:border-zinc-400 text-[9px] font-bold tracking-[0.25em] uppercase text-zinc-300 group-hover:text-white transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center w-10 h-10 border border-zinc-700 group-hover:border-white group-hover:bg-white transition-all duration-300">
                <ArrowUpRight
                  size={16}
                  className="text-zinc-300 group-hover:text-zinc-900 transition-colors duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom divider */}
        <div className="h-[1px] bg-zinc-800" />

        {/* Description below */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.01 }}
            className="text-zinc-200 text-lg leading-relaxed"
          >
            私たちは、技術と美意識の両輪でクリエイティブを追求する仲間を探しています。
            あなたのスキルで、新しい「記録」の形をつくりませんか。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.01 }}
            className="flex justify-end"
          >
            <button className="group flex items-center gap-4 px-10 py-4 border border-zinc-700 hover:border-white text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-white hover:text-zinc-950">
              <span>See All Openings</span>
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};