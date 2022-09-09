import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import AOS from 'aos';
import "aos/dist/aos.css";

import styles from '../components/Home.module.css';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';

const Home = () => {

    AOS.init();

    const scrollRef = useRef(null);

    const scrollEffect = () => {
        const scrollPos = window.scrollY + window.innerHeight
        setTransition((scrollPos-670)/4)
    }

    useLayoutEffect(() => {
        window.addEventListener('scroll', scrollEffect);

        return () => window.removeEventListener('scroll', scrollEffect);
    }, []);
    

    const [transition, setTransition] = useState(0);

    return <div>
        <div className={styles.container} ref={scrollRef}>
            <div className={styles.images} style={{ transform: `translateX(-${transition}px)` }}>
                <img src={img1} alt="" />
                <img src={img1} alt="" className={styles.img1} />
            </div>
            <div className={styles.home}>
                <h1>10% returns. Now Yours.</h1>
                <p>Invest and grow your stablecoins.</p>
                <button className={styles.btn}>Invest now</button>
            </div>
            <div className={styles.images} style={{ transform: `translateX(${transition}px)` }}>
                <img src={img2} alt="" />
                <img src={img2} alt="" className={styles.img2} />
            </div>
        </div>

        <div className={styles.section}>
            <img src={img1} alt="" className={styles.img3} />
            <div className={styles.content} data-aos="fade-up" data-aos-offset="50" data-aos-anchor-placement="top-center" data-aos-once="false">
                <div className={styles.home}>
                    <h1>They grow so fast</h1>
                    <p>Your USDTs and USDCs feel so at home here, that they will grow by 10% by the end of the year. Allow your stable coins to generate stable returns for you.</p>
                </div>
                <div className={styles.home}>
                    <h1>No secrets, no fine print</h1>
                    <p>There are no hidden fees on Flint. Whatever charges you will incur will be shared with you upfront. We take transparency seriously.</p>
                </div>
                <div className={styles.home}>
                    <h1>Unconditionally unclocked</h1>
                    <p>There are no lock-in periods on Flint. You can withdraw anytime and have the funds in your wallet instantly. We keep your investment liquid, even when its growing.</p>
                </div>
            </div>
        </div>
    </div>
};

export default Home;