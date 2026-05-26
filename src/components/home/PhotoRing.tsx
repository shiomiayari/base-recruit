"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CONFIG = {
  photoCount: 12,
  radius: 300, 
  rotationsOnScroll: 1.0,
  scrollDistance: 1200, // Reduced from 2000
  photos: Array.from({ length: 12 }, (_, i) =>
    `https://images.unsplash.com/photo-${[
      '1552664730-d307ca884978',
      '1522202176988-66273c2fd55f',
      '1663435512286-5e9448223f2a',
      '1695634621295-8f83685a35bb',
      '1752650736242-d06f95024793',
      '1718670013941-9c2aa1d5be80',
      '1542744094-24638eff58bb',
      '1519389950473-47ba0277781c',
      '1504384308090-c894fdcc538d',
      '1556761175-b413da4baf72',
      '1531482615713-2afd69097998',
      '1573496359142-b8d87734a5a2'
    ][i % 12]}?auto=format&fit=crop&q=80&w=400&h=520`
  ),
};

export const PhotoRing = () => {
  const scopeRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const thoughtRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scopeRef.current || !pinRef.current || !ringRef.current || !tiltRef.current || !thoughtRef.current) return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(tiltRef.current, { rotationX: -16 });
      gsap.set(ringRef.current, { rotationY: 0 });

      // Unified ScrollTrigger for pinning and animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: `+=${CONFIG.scrollDistance}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.5,
          anticipatePin: 0,
          invalidateOnRefresh: true,
        },
      });

      tl.to(ringRef.current, {
        rotationY: 360 * CONFIG.rotationsOnScroll,
        ease: "none",
      }, 0);

      tl.to(tiltRef.current, {
        rotationX: -28,
        ease: "none",
      }, 0);

      tl.fromTo(thoughtRef.current, 
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, ease: "power2.out", duration: 0.5 },
        0.1
      );

      tl.to(thoughtRef.current,
        { opacity: 0, y: -30, scale: 1.05, ease: "power2.in", duration: 0.4 },
        0.7
      );

      // Entrance animation (not tied to scroll)
      gsap.from(ringRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5
      });
    }, scopeRef);

    return () => ctx.revert();
  }, []);

  const angleStep = 360 / CONFIG.photoCount;

  return (
    <div 
      ref={scopeRef} 
      className="relative w-full z-[5]"
    >
      <div ref={pinRef} className="w-full h-screen overflow-hidden flex items-center justify-center bg-white dark:bg-zinc-950 transition-colors duration-500">
        <div className="absolute inset-0 flex items-center justify-center perspective-[1800px] perspective-origin-[50%_50%]">
          {/* Thoughts Overlay */}
          <div 
            ref={thoughtRef}
            className="absolute z-20 text-center pointer-events-none px-10 py-8"
          >
            {/* Frosted backdrop */}
            <div className="absolute inset-0 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800" />

            <div className="relative">
              <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 dark:text-white mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
                BASEの<span className="text-blue-500 dark:text-blue-400">想い</span>とは。
              </h3>
              <p className="text-zinc-600 dark:text-zinc-200 text-lg md:text-xl font-medium max-w-xl mx-auto leading-relaxed">
                AIとともに、企業の情熱を<br />
                次世代へ語り継ぐ物語へと昇華させる。
              </p>
            </div>
          </div>

          <div ref={tiltRef} className="preserve-3d will-change-transform">
            <div 
              ref={ringRef} 
              className="relative w-[160px] h-[210px] preserve-3d will-change-transform"
            >
              {CONFIG.photos.map((src, i) => (
                <div
                  key={i}
                  className="absolute inset-0 rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-900 shadow-[0_20px_40px_rgba(0,0,0,0.15),0_0_0_1px_rgba(0,0,0,0.04)_inset] dark:shadow-[0_30px_50px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.04)_inset] backface-visible"
                  style={{
                    transform: `rotateY(${angleStep * i}deg) translateZ(${CONFIG.radius}px)`,
                  }}
                >
                  <img 
                    src={src} 
                    alt="" 
                    className="w-full h-full object-cover saturate-[0.95] contrast-[1.02]"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Floor Glow */}
          <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[70vw] max-w-[1200px] h-[120px] bg-[radial-gradient(ellipse_at_center,rgba(201,169,122,0.18),transparent_70%)] blur-[12px] pointer-events-none" />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-visible {
          backface-visibility: visible;
        }
      `}} />
    </div>
  );
};