import styles from './style.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../../../../common/RoundedButton';
import Magnetic from '../../../../common/Magnetic';
import { usePathname } from 'next/navigation';

export default function index() {
  return (
    <>
    <div className={styles.footer}>
      <Magnetic>
        <div className={styles.el}>
        <a href='https://www.linkedin.com/in/talhachaudharyy/' target='_blank'>LinkedIn</a>
        <div className={styles.indicator}></div>
        </div>
      </Magnetic>
      <Magnetic>
        <div className={styles.el}>
        <a href='https://github.com/talhachaudharyy' target='_blank'>GitHub</a>
        <div className={styles.indicator}></div>
        </div>
      </Magnetic>
      <Magnetic>
        <div className={styles.el}>
        <a href='https://wa.link/r41idw' target='_blank'>WhatsApp</a>
        <div className={styles.indicator}></div>
        </div>
      </Magnetic>
      <Magnetic>
        <div className={styles.el}>
        <a href='https://docs.google.com/document/d/1NBMj43wASf55nnOdzz101W52T2CD85eIBBc4LZdnJhw/edit?usp=sharing' target='_blank'>Resume</a>
        <div className={styles.indicator}></div>
        </div>
      </Magnetic>
    </div>
    </>
  )
}
