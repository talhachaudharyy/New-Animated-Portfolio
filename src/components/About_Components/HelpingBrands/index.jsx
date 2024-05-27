// components/HelpingBrands.jsx
import { useEffect, useRef } from 'react';
import styles from './style.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; // Import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import photo from '../../../../public/images/talha.png';
import Image from 'next/image';
import Contact from '../../Contact/index'

gsap.registerPlugin(ScrollTrigger);

export default function HelpingBrands() {
    const imageRef = useRef(null);
    const dotsRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            imageRef.current,
            { y: 0 },
            {
                y: 100,
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            }
        );

        // Animation for dots
        gsap.fromTo(
            dotsRef.current,
            { opacity: 0 },
            {
                opacity: 1,
                repeat: -1, // Repeat indefinitely
                yoyo: true, // Reverse the animation
                duration: 0.5, // Duration of each iteration
                ease: "power1.inOut" // Easing function
            }
        );
    }, []);

    return (
        <>
        <div className={styles.container}>
            <h1 className={styles.heading}>
                Helping brands thrive<br />
                in the digital world
            </h1>
            <hr className={styles.line} />
            <div className={styles.content}>
                <div className={styles.left}>
                    <div className={styles.arrowText}>
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                        
                            className={styles.arrow}
                            style={{ fill: 'currentColor', transform: 'rotate(0deg)' }}
                        >
                            <path style={{ fill: '#232326' }} d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right" />
                        </svg>
                        <div className={styles.middle}>
                            <p align="left">I help companies from all over the world with tailor-made solutions. With each project, I push my work to new horizons, always putting quality first.</p>
                            <br />
                            <p align='left'>Coding wizard with 2 years in MERN stack. Crafted complex projects with ease. Passionate about innovation and problem-solving.</p>
                            <div className={styles.dots}>
                            <p ref={dotsRef}>Always exploring...</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={styles.right}>
                    <Image src={photo} alt="Professional image" ref={imageRef} />
                </div>
            </div>
        </div>
        <Contact/>
        </>
    );
}
