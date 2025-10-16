import React from 'react';
import styles from './Home.module.scss';
import News from '@/components/sections/News';
import Hero from '@/components/sections/Hero';
import Promo from '@/components/sections/Promo';
import Contact from '@/components/sections/Contact';
import Partners from '@/components/sections/Partners';
import Features from '@/components/sections/Features';
import Audience from '@/components/sections/Audience';
import Benefits from '@/components/sections/Benefits';

const Home: React.FC = () => {
    return (
        <div className={styles.container}>
            <Hero />
            <div className="max-w-[1440px] mx-auto px-[108px] max-xl:px-[60px] max-md:px-4">
                <Promo />
                <Partners />
                <Features />
                <Audience />
                <Benefits />
                <News />
            </div>
            <Contact />
        </div>
    );
};

export default Home;
