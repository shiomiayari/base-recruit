"use client";
import React from 'react';
import { Share2, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-zinc-50 dark:bg-zinc-900 pt-24 pb-12 transition-colors border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <span className="font-bold text-2xl tracking-tighter">株式会社BASE</span>
            </div>
            <p className="max-w-md text-zinc-700 dark:text-zinc-400 mb-8 leading-relaxed">
              日本ビジネスアート株式会社（JBA）が作る新しいブランディングコンサル会社。JBAでは、企業の記憶をカタチにする仕事をしています。東銀座から世界へ。人に届くクリエイティブを発信していきます。
            </p>
            <div className="flex space-x-4">
              {[Share2].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full hover:bg-zinc-950 dark:hover:bg-white hover:text-white dark:hover:text-zinc-900 transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4 text-zinc-700 dark:text-zinc-400">
              <li><a href="https://www.jbakk.co.jp/about/purpose/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="https://www.jbakk.co.jp/business/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">Business</a></li>
              <li><a href="https://www.jbakk.co.jp/recruit/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">Career</a></li>
              <li><a href="https://www.jbakk.co.jp/contact/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 dark:text-zinc-400 font-bold tracking-widest uppercase">
          <p>© {currentYear} BASE Co., Ltd. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};