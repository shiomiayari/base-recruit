"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImageWithFallback } from "../figma/ImageWithFallback";

gsap.registerPlugin(ScrollTrigger);

const heroImage =
  "https://images.unsplash.com/photo-1663435512286-5e9448223f2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvbG9yZnVsJTIwZ2VvbWV0cmljJTIwZGlnaXRhbCUyMGFydCUyMGJhY2tncm91bmQlMjAzZCUyMHJlbmRlcmluZyUyMHByZW1pdW18ZW58MXx8fHwxNzc4NDI4NjM2fDA&ixlib=rb-4.1.0&q=80&w=1080";

export const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const bgGlowRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);
  const floatARef = useRef<HTMLDivElement>(null);
  const floatBRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      // Background: FIXED to viewport — no gap possible, scale dramatically
      tl.to(bgRef.current, {
        scale: 1.9,
        ease: "none",
      }, 0);

      // Glow blob: drifts diagonally for depth illusion
      tl.to(bgGlowRef.current, {
        scale: 1.4,
        xPercent: 15,
        yPercent: 20,
        ease: "none",
      }, 0);

      // Headline line 1: slides LEFT + slight upward
      tl.to(line1Ref.current, {
        xPercent: -20,
        yPercent: -30,
        ease: "none",
      }, 0);

      // Headline line 2: slides RIGHT + slight upward
      tl.to(line2Ref.current, {
        xPercent: 14,
        yPercent: -20,
        ease: "none",
      }, 0);

      // Badge: shoots upward and out
      tl.to(badgeRef.current, {
        yPercent: -300,
        opacity: 0,
        ease: "none",
      }, 0);

      // Subtitle: rises faster, slight fade
      tl.to(subtitleRef.current, {
        yPercent: -80,
        opacity: 0,
        ease: "none",
      }, 0);

      // Buttons: fall downward and out
      tl.to(btnsRef.current, {
        yPercent: 150,
        opacity: 0,
        ease: "none",
      }, 0);

      // Floating square: exits bottom-right
      tl.to(floatARef.current, {
        x: 160,
        y: 120,
        rotation: 60,
        opacity: 0,
        ease: "none",
      }, 0);

      // Floating circle: exits top-left
      tl.to(floatBRef.current, {
        x: -160,
        y: -120,
        rotation: -45,
        opacity: 0,
        ease: "none",
      }, 0);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center pt-20"
    >
      {/* Background: position:fixed = viewport-locked, zero gaps guaranteed */}
      <div
        ref={bgRef}
        className="fixed inset-0 z-0 will-change-transform overflow-hidden"
        style={{ transformOrigin: "center center" }}
      >
        {/* Gradient glow */}
        <div
          ref={bgGlowRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] opacity-25 dark:opacity-35 blur-3xl bg-gradient-to-br from-blue-500 via-yellow-400 to-red-500 rounded-full"
        />
        <ImageWithFallback
          src={heroImage}
          alt="Abstract Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-30 dark:opacity-20"
        />
        {/* bottom vignette — blends into PhotoRing's dark bg */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950/60 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge */}
          <span
            ref={badgeRef}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full border border-blue-200 dark:border-blue-800 will-change-transform"
          >
            BASE Recruitment
          </span>

          {/* Headline — each line moves independently */}
          <h1 className="text-3xl md:text-6xl font-black tracking-tighter leading-tight mb-8 overflow-hidden">
            <span
              ref={line1Ref}
              className="block will-change-transform"
            >
              AIで、企業の価値を見つけ、
            </span>
            <span
              ref={line2Ref}
              className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-green-500 to-red-500 will-change-transform mt-2 pb-2"
            >
              伝え、広げる。
            </span>
            <span className="block text-2xl md:text-3xl mt-6 font-bold text-zinc-900 dark:text-white">
              新会社「BASE」の立ち上げメンバー募集。
            </span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed will-change-transform"
          >
            日本ビジネスアートが、AI組織「BASE」を立ち上げます。<br />
            企業のブランディング、広報、マーケティングをAI前提で再構築し、地方の一流企業の価値を全国へ届けていく新組織です。<br />
            東京・大阪・札幌で同時に立ち上がるBASEに、大学生の立ち上げメンバーを募集します。
          </p>

          {/* Buttons */}
          <div
            ref={btnsRef}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pb-20 will-change-transform"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold rounded-full transition-shadow hover:shadow-2xl hover:shadow-blue-500/20"
            >
              ENTRY
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-transparent border-2 border-zinc-900 dark:border-white text-zinc-900 dark:text-white font-bold rounded-full transition-all hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900"
            >
              ABOUT US
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating element A — bottom-right */}
      <div
        ref={floatARef}
        className="absolute bottom-20 right-10 hidden lg:block will-change-transform"
      >
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-32 h-32 bg-yellow-200 dark:bg-yellow-900 border border-yellow-300 dark:border-yellow-700 rounded-2xl rotate-12"
        />
      </div>

      {/* Floating element B — top-left */}
      <div
        ref={floatBRef}
        className="absolute top-40 left-10 hidden lg:block will-change-transform"
      >
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="w-24 h-24 bg-blue-200 dark:bg-blue-900 border border-blue-300 dark:border-blue-700 rounded-full"
        />
      </div>
    </section>
  );
};