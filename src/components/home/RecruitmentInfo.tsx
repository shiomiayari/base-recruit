"use client";
import React from 'react';
import { motion } from 'motion/react';

const recruitmentData = [
  { label: "募集職種", value: "BASE 立ち上げインターン" },
  { label: "勤務地", value: "東京・大阪・札幌" },
  { label: "業務内容", value: "AIを活用したリサーチ、企画、ライティング、資料作成、コンテンツ制作、業務改善など" },
  { label: "給与", value: "時給1,300円＋インセンティブ" },
  { label: "対象", value: "大学生・大学院生" },
  { label: "開始時期", value: "8月開始予定 ※希望者はプレ稼働から参加可能" },
  { label: "選考フロー", value: "応募 → 説明会 → 面談 → 内定" },
  { label: "求める人物", value: "AIを使って企業に価値を出す経験をしたい方／事業を動かす側に行きたい方／大学生活で何かに本気で取り組みたい方" },
];

export const RecruitmentInfo = () => {
  return (
    <section className="relative z-[1] py-32 bg-transparent text-zinc-900 dark:text-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-[0.3em] text-blue-500 mb-4 uppercase">Information</h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tighter leading-none">
            募集概要
          </h3>
        </motion.div>

        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {recruitmentData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 p-6 md:p-8 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
              >
                <div className="font-bold text-zinc-500 dark:text-zinc-400">
                  {item.label}
                </div>
                <div className="text-zinc-900 dark:text-zinc-100 font-medium leading-relaxed">
                  {item.value}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
