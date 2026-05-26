"use client";
import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Cpu, BarChart3, Users, Rocket } from 'lucide-react';

export const BusinessSection = () => {
  const services = [
    {
      icon: <Cpu className="text-blue-500" size={32} />,
      title: "リサーチ・情報整理",
      description: "AIを活用して企業や業界の深いリサーチを行い、膨大な情報を整理。課題や価値の種を見つけ出します。",
    },
    {
      icon: <BarChart3 className="text-green-500" size={32} />,
      title: "企画・ライティング",
      description: "整理した情報をもとに、企業の魅力が最も伝わる企画を立案し、AIと共創しながらテキストへ落とし込みます。",
    },
    {
      icon: <Users className="text-yellow-500" size={32} />,
      title: "資料・コンテンツ作成",
      description: "企画とテキストを視覚的なコンテンツへと変換。AIを活用して、高品質な資料やデザインをスピーディに作成します。",
    },
    {
      icon: <Rocket className="text-red-500" size={32} />,
      title: "発信・改善",
      description: "作成したコンテンツを社会へ発信し、反応を分析。継続的な改善をAI前提のプロセスで回していきます。",
    },
  ];

  return (
    <section id="business" className="py-32 relative z-[1] bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Distinction Header */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.01 }}
          >
            <h2 className="text-sm font-bold tracking-[0.3em] text-green-600 dark:text-green-500 mb-6 uppercase">Work Process</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-10 leading-tight tracking-tighter text-zinc-900 dark:text-white">
              AIを使って、<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-500 dark:to-green-500">ブランディングコンサルティングの仕事を再設計する。</span>
            </h3>
            <p className="text-zinc-800 dark:text-zinc-300 text-lg mb-12 leading-relaxed">
              BASEでは、AIを使いながら、企業の価値を見つけ、整理し、伝わる形にしていく実務に取り組みます。<br /><br />
              リサーチ、情報整理、企画、ライティング、資料作成、発信、改善まで、企業支援の仕事をAI前提で進めていきます。
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {services.map((service, index) => (
                <div key={index} className="group">
                  <div className="mb-6 p-4 bg-zinc-100 dark:bg-zinc-900 rounded-2xl inline-block group-hover:scale-110 group-hover:bg-blue-50 dark:group-hover:bg-blue-950 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white">{service.title}</h4>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.01 }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-gradient-to-tr from-blue-200 via-green-200 to-transparent blur-3xl rounded-full animate-pulse" />
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white dark:border-zinc-900">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518726775-70e538b0d46e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nJTIwb2ZmaWNlfGVufDF8fHx8MTc3ODQ3ODU5OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Business Discussion"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Stats Badge */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -right-8 bg-zinc-900 text-white p-10 rounded-[2.5rem] shadow-2xl"
            >
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-300 mb-2">Target Area</p>
              <p className="text-3xl font-black text-white">LOCAL<br />PREMIER</p>
              <div className="mt-4 flex gap-1">
                <div className="h-1 w-8 bg-blue-500 rounded-full" />
                <div className="h-1 w-2 bg-blue-400 rounded-full" />
                <div className="h-1 w-2 bg-blue-300 rounded-full" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};