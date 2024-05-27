'use client';

import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import { useRef, useEffect, useState } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import Magnetic from '../../common/Magnetic';

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  });

  const clipPath = useTransform(
    scrollYProgress, 
    [0, 1], 
    [
      'inset(0% 0% 0% 0% round 50px 50px 0px 0px)', // Rounded when partially visible
      'inset(0% 0% 0% 0% round 0px 0px 0px 0px)'   // Normal when fully visible
    ]
  );

  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  const [time, setTime] = useState("");

  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: 'Asia/Karachi'
      };
      const timeFormatter = new Intl.DateTimeFormat('en-US', options);
      const timeString = timeFormatter.format(now);

      const offset = -now.getTimezoneOffset();
      const offsetHours = String(Math.floor(Math.abs(offset) / 60)).padStart(2, '0');
      const offsetMinutes = String(Math.abs(offset) % 60).padStart(2, '0');
      const offsetSign = offset >= 0 ? '+' : '-';
      const offsetString = `GMT${offsetSign}${offsetHours}:${offsetMinutes}`;

      setTime(`${timeString} ${offsetString}`);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleEmailClick = () => {
    window.location.href = 'mailto:chaudharytalhaofficial@gmail.com';
  };

  const handleWhatsAppClick = () => {
    window.location.href = 'https://wa.link/r41idw';
  };

  return (
    <motion.div 
      id='contact' 
      style={{ clipPath, y }} 
      ref={container} 
      className={styles.contact}
    >
      <div className={styles.body}>
        <div className={styles.title}>
          <span>
            <div className={styles.imageContainer}>
              <Image 
                fill={true}
                alt={"image"}
                src={`/images/6.png`}
              />
            </div>
            <h2>Let's start a</h2>
          </span>
          <h2>project together</h2>
          <motion.div style={{ x }} className={styles.buttonContainer}>
            <Rounded backgroundColor={"#334BD3"} className={styles.button}>
              <p>Get in touch</p>
            </Rounded>
          </motion.div>
          <motion.svg style={{ rotate, scale: 2 }} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
          </motion.svg>
        </div>
        <div className={styles.nav}>
          <Rounded onClick={handleEmailClick}>
            <p>chaudharytalhaofficial@gmail.com</p>
          </Rounded>
          <Rounded onClick={handleWhatsAppClick}>
            <p>+92 317 304 8369</p>
          </Rounded>
        </div>
        <div className={styles.info}>
          <div>
            <span>
              <h3>Version</h3>
              <p>2024 © Edition</p>
            </span>
            <span>
              <h3>Time in Pakistan</h3>
              <p>{time}</p>
            </span>
          </div>
          <div>
            <span>
              <h3>socials</h3>
              <Magnetic>
                <a href='https://www.linkedin.com/in/talhachaudharyy/' target='_blank' rel='noopener noreferrer'>
                  <p>Linkedin</p>
                </a>
              </Magnetic>
            </span>
            <Magnetic>
              <a href='https://wa.link/r41idw' target='_blank' rel='noopener noreferrer'>
                <p>Whatsapp</p>
              </a>
            </Magnetic>
            <Magnetic>
              <a href='https://docs.google.com/document/d/1NBMj43wASf55nnOdzz101W52T2CD85eIBBc4LZdnJhw/edit?usp=sharing' target='_blank' rel='noopener noreferrer'>
                <p>Resume</p>
              </a>
            </Magnetic>
            <Magnetic>
              <a href='https://github.com/talhachaudharyy' target='_blank' rel='noopener noreferrer'>
                <p>Github</p>
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
