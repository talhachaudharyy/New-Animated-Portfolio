'use client';
import styles from './page.module.scss';
import Header from '../../components/Header';
import { useEffect, useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from '../../components/About_Components/Preloader/index';
import Lenis from '@studio-freight/lenis';
import { useScroll } from 'framer-motion';
import HelpingBrands from '../../components/About_Components/HelpingBrands';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main ref={container} className={styles.main}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Header color="black" />

      <HelpingBrands/>
    </main>
  );
}
