"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const philosophyImage = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHN0dWRlbnRzJTIwY29sbGFib3JhdGluZyUyMG1vZGVybiUyMG9mZmljZXxlbnwxfHx8fDE3Nzg0MzAyMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080";

export const Philosophy = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const textX1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const textX2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <section
      id="philosophy"
      ref={containerRef}
      className="relative z-[1] min-h-screen py-32 flex flex-col justify-center overflow-hidden bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-500"
    >
      {/* Background Parallax Text */}
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-center gap-8 select-none overflow-hidden">
        <motion.div
          style={{ x: textX1 }}
          className="text-[25vw] md:text-[20vw] font-black whitespace-nowrap leading-none tracking-tighter text-zinc-100 dark:text-zinc-800"
        >
          BEYOND THE LIMITS • BEYOND THE LIMITS • BEYOND THE LIMITS
        </motion.div>
        <motion.div
          style={{ x: textX2 }}
          className="text-[25vw] md:text-[20vw] font-black whitespace-nowrap leading-none tracking-tighter text-transparent"
        >
          <span style={{ WebkitTextStroke: '1px #d4d4d8' }} className="dark:[style:--stroke:#27272a] italic">
            AI NATIVE DESIGN • AI NATIVE DESIGN • AI NATIVE DESIGN
          </span>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.div style={{ opacity }}>
              <h2 className="text-blue-500 font-bold tracking-[0.3em] uppercase mb-6 text-sm">Overview</h2>
              <h3 className="text-5xl md:text-6xl font-black mb-10 leading-[1.2] tracking-tighter">
                この夏、JBAは、<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500">AI組織「BASE」を立ち上げます。</span>
              </h3>

              <div className="space-y-6 text-base md:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-2xl">
                <p>
                  日本ビジネスアートは、これまで大手企業を中心に、ブランディング、広報、マーケティング、採用広報などの領域で、企業の価値を見つけ、社会に伝える支援を行ってきました。
                </p>
                <p>
                  今回、その仕事の進め方をAI前提で再構築する新組織として、BASEを立ち上げます。BASEは、企業の中に眠っている技術、サービス、想い、強みを見つけ出し、AIを活用しながら、採用・広報・マーケティング・ブランディングのコンテンツへ変えていく組織です。
                </p>
                <p>
                  今後は、大手企業だけでなく、地方の一流企業にも支援を広げていきます。
                </p>
                <p className="text-xl text-zinc-900 dark:text-white font-bold mt-8">
                  この新組織の立ち上げに、大学生のメンバーを募集します。
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div
              style={{ scale, opacity }}
              className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl shadow-zinc-300 dark:shadow-none border border-zinc-100 dark:border-zinc-800"
            >
              <ImageWithFallback
                src={philosophyImage}
                alt="Creative Team"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-8 right-8 p-6 bg-zinc-900 border border-zinc-700 rounded-2xl"
              >
                <p className="text-sm font-bold tracking-widest text-blue-400 mb-1">MISSION</p>
                <p className="text-lg font-bold text-white">地方から世界を揺らす、AIコンサルティングの最前線。</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};