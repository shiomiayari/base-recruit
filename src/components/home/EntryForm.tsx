"use client";
import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import { toast } from 'sonner';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface FormData {
  name: string;
  email: string;
  university: string;
  message: string;
}

export const EntryForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await addDoc(collection(db, 'entries'), {
        ...data,
        createdAt: serverTimestamp()
      });
      toast.success("メッセージを送信しました。担当者よりご連絡いたします。");
      reset();
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("エラーが発生しました。時間を置いて再度お試しください。");
    }
  };

  return (
    <section id="entry" className="relative z-[1] py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-blue-500 mb-2 uppercase italic">Entry</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              まずは説明会に<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">ご参加ください。</span>
            </h3>
            <p className="text-zinc-700 dark:text-zinc-300 text-lg mb-8">
              説明会では、BASEを立ち上げる背景、AIによって仕事がどう変わるのか、実際に任せる業務、参加までの流れについてお伝えします。
            </p>
            <div className="space-y-4">
              <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
                <p className="text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-widest mb-1">Tokyo Office</p>
                <p className="font-bold text-sm md:text-base text-zinc-900 dark:text-white">〒104-0061<br />東京都中央区銀座6-17-1 銀座6丁目-SQUARE 11階</p>
              </div>
              <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
                <p className="text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-widest mb-1">Osaka Office</p>
                <p className="font-bold text-sm md:text-base text-zinc-900 dark:text-white">〒541-0052<br />大阪市中央区安土町2-3-13 大阪国際ビルディング15F</p>
              </div>
              <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
                <p className="text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-widest mb-1">Hokkaido Office</p>
                <p className="font-bold text-sm md:text-base text-zinc-900 dark:text-white">〒060-0809<br />北海道札幌市北区北９条西４丁目 ガレリアビル３F</p>
              </div>
              <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
                <p className="text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-widest mb-1">Email</p>
                <p className="font-bold text-sm md:text-base text-zinc-900 dark:text-white">jba-saiyo@jbakk.co.jp</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            className="p-8 md:p-12 bg-zinc-950 text-white rounded-[2rem] shadow-2xl relative overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-800 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-900 blur-3xl rounded-full" />

            <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-300">Name</label>
                  <input
                    {...register("name", { required: true })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="お名前"
                  />
                  {errors.name && <span className="text-red-500 text-[10px] uppercase font-bold">Required</span>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-300">Email</label>
                  <input
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="メールアドレス"
                  />
                  {errors.email && <span className="text-red-500 text-[10px] uppercase font-bold">Invalid Email</span>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-300">University</label>
                <input
                  {...register("university")}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="大学名"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-300">Message</label>
                <textarea
                  {...register("message", { required: true })}
                  rows={4}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="お問い合わせ内容"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-white text-zinc-950 font-black rounded-xl hover:bg-blue-500 hover:text-white transition-all flex items-center justify-center space-x-2"
              >
                <span>ENTRY NOW</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};