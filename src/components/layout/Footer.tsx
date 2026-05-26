"use client";
import React from 'react';
import { Share2, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-50 dark:bg-zinc-900 pt-24 pb-12 transition-colors border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <span className="font-bold text-2xl tracking-tighter">株式会社BASE</span>
            </div>
            <p className="max-w-md text-zinc-700 dark:text-zinc-400 mb-8 leading-relaxed">
              AI技術とデザインの融合により、企業の記憶を形にするエージェンシー。
              東銀座から、100年後の未来へ届くクリエイティブを発信しています。
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
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Services</h4>
            <ul className="space-y-4 text-zinc-700 dark:text-zinc-400">
              <li><a href="#" className="hover:text-blue-500 transition-colors flex items-center group">Corporate History <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors flex items-center group">Anniversary Book <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors flex items-center group">Brand Archive <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors flex items-center group">Digital Storytelling <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4 text-zinc-700 dark:text-zinc-400">
              <li><a href="#" className="hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">News</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Contact</a></li>
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