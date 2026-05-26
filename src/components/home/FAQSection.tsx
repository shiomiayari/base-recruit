"use client";
import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

const faqs = [
  {
    question: "AIを活用することで制作期間は短縮されますか？",
    answer: "はい、従来の社史制作に比べて資料の読み込みや構成案の作成時間を大幅に短縮可能です。通常1年〜2年かかるプロジェクトを、BASEでは最短6ヶ月から高品質に仕上げることができます。",
  },
  {
    question: "具体的にどのような資料をAIで解析するのですか？",
    answer: "創業以来の社内報、取締役会の議録、創業者のメモ、インタビュー音声データなど、アナログ・デジタル問わずあらゆる資料を対象とします。セキュリティも万全なクローズドなAI環境で処理します。",
  },
  {
    question: "紙の社史だけでなく、WEBサイトや動画への展開も可能ですか？",
    answer: "もちろんです。制作したコンテンツをマルチデバイス向けに最適化し、周年記念サイトやコンセプトムービーとして展開するパッケージもご用意しています。",
  },
  {
    question: "東銀座のオフィスに伺って相談することは可能ですか？",
    answer: "大歓迎です。弊社のギャラリースペースでは、これまでに制作した社史の実物をご覧いただきながらご相談いただけます。事前のご予約をお願いしております。",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="relative z-[1] py-24 bg-transparent">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-blue-300 mb-2 uppercase italic">Support</h2>
          <h3 className="text-4xl font-black text-white">QUESTIONS?</h3>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <Accordion.Item
              key={index}
              value={`item-${index}`}
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden"
            >
              <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left font-bold hover:bg-white/10 transition-colors group text-white">
                  <span className="text-lg">{faq.question}</span>
                  <ChevronDown className="group-data-[state=open]:rotate-180 transition-transform duration-300" size={20} />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden transition-all data-[state=closed]:max-h-0 data-[state=open]:max-h-96 duration-500 ease-in-out">
                <div className="p-6 pt-0 text-white/90 leading-relaxed">
                  {faq.answer}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
};