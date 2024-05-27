// Header/index.jsx or Header/index.tsx
'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { usePathname, useRouter } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../../common/RoundedButton';
import Magnetic from '../../common/Magnetic';

export default function Index({ color = 'white' }) {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const button = useRef(null);
    const router = useRouter();

    useEffect(() => {
      if (isActive) setIsActive(false);
    }, [pathname]);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => { gsap.to(button.current, { scale: 1, duration: 0.25, ease: "power1.out" }); },
                onEnterBack: () => { gsap.to(button.current, { scale: 0, duration: 0.25, ease: "power1.out" }, setIsActive(false)); }
            }
        });
    }, []);

    const scrollToProjects = () => {
        const projectsSection = document.getElementById('work');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll behavior
        }
    };

    const scrollToContact = () => {
        const Contactsection = document.getElementById('contact');
        if (Contactsection) {
            Contactsection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll behavior
        }
    };

    const navigateToAbout = () => {
        router.push('/about');
    };

    const navigateToHome = () =>{
        router.push('/')
    }

    const headerStyle = {
        color: color,
    };

    return (
        <>
            <div ref={header} className={styles.header} style={headerStyle}>
                <div className={styles.logo}>
                    <p className={styles.copyright}>©</p>
                    <div className={styles.name} onClick={navigateToHome}>
                        <p className={styles.RecodeBy}>ReCode by</p>
                        <p className={styles.rishi}>Talha</p>
                    </div>
                </div>
                <div className={styles.nav}>
                    <Magnetic>
                        <div className={styles.el} onClick={scrollToProjects}>
                            <a>Work</a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el} onClick={navigateToAbout}>
                            <a>About</a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el} onClick={scrollToContact}>
                            <a>Contact</a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                </div>
            </div>
            <div ref={button} className={styles.headerButtonContainer}>
                <Rounded onClick={() => { setIsActive(!isActive); }} className={`${styles.button}`}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                </Rounded>
            </div>
            <AnimatePresence mode="wait">
                {isActive && <Nav />}
            </AnimatePresence>
        </>
    );
}
