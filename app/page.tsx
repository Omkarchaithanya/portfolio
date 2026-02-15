'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/ui/Navbar';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Labs from '@/components/labs/Labs';
import Publications from '@/components/sections/Publications';
import Timeline from '@/components/sections/Timeline';
import Hackathons from '@/components/sections/Hackathons';
import Certifications from '@/components/sections/Certifications';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/ui/Footer';
import HUD from '@/components/ui/HUD';
import { useKonami } from '@/hooks/useKonami';

// Dynamically import components that use R3F or complex 3D features
const Hero = dynamic(() => import('@/components/sections/Hero'), {
  ssr: false,
});

const KonamiOverlay = dynamic(() => import('@/components/ui/KonamiOverlay'), {
  ssr: false,
});

export default function Home() {
  const { isActive, deactivate } = useKonami();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Navbar />
      <main id="main-content">
        {mounted && <Hero />}
        {!mounted && (
          <section className="relative min-h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="animate-pulse text-4xl">Loading...</div>
            </div>
          </section>
        )}
        <About />
        <Skills />
        <Projects />
        <Labs />
        <Publications />
        <Timeline />
        <Hackathons />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <HUD />
      {mounted && isActive && <KonamiOverlay onClose={deactivate} />}
    </>
  );
}
