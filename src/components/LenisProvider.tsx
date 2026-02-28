"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import { LenisContextProvider } from "@/hooks/useLenis";

interface LenisProviderProps {
  children: React.ReactNode;
}

export default function LenisProvider({ children }: LenisProviderProps) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  
  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    // Restore scroll position from sessionStorage on mount
    const savedScroll = sessionStorage.getItem('scrollPosition');
    if (savedScroll) {
      lenisInstance.scrollTo(parseFloat(savedScroll), { immediate: true });
      sessionStorage.removeItem('scrollPosition');
    }

    // RAF loop with cancellable handle
    let rafId: number;
    function raf(time: number) {
      lenisInstance.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    setLenis(lenisInstance);

    // Save scroll position before page unload
    const handleBeforeUnload = () => {
      sessionStorage.setItem('scrollPosition', lenisInstance.scroll.toString());
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      lenisInstance.destroy();
    };
  }, []);

  return (
    <LenisContextProvider lenis={lenis}>
      {children}
    </LenisContextProvider>
  );
}