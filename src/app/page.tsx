import React from 'react';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/home/Hero';
import { PhotoRing } from '@/components/home/PhotoRing';
import { Philosophy } from '@/components/home/Philosophy';
import { BusinessSection } from '@/components/home/BusinessSection';
import { TargetAudience } from '@/components/home/TargetAudience';
import { Experience } from '@/components/home/Experience';
import { NoteSection } from '@/components/home/NoteSection';
import { RecruitmentInfo } from '@/components/home/RecruitmentInfo';
import { FAQSection } from '@/components/home/FAQSection';
import { EntryForm } from '@/components/home/EntryForm';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-500">
        <Navbar />
        <main className="relative">
          <Hero />
          <PhotoRing />
          <Philosophy />
          <BusinessSection />
          <TargetAudience />
          <Experience />
          <NoteSection />
          <RecruitmentInfo />
          <FAQSection />
          <EntryForm />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
