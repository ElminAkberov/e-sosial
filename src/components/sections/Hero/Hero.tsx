import styles from './Hero.module.scss';

import mainIcon from '@icons/mainIcon.svg';
import banner from '@imgs/sale.svg';
import centerBanner from '@imgs/banner.svg';

const Hero = () => {
    return (
        <div className={styles.container}>
            <div className="hero-top flex items-center justify-center pt-[45px] pb-6 space-x-[19px]">
                <img src={mainIcon} alt="main icon" className="max-md:h-14" />
                <h1 className="text-[#1D3F78] text-[1.75rem] leading-[1.75rem] md:text-[2rem] md:leading-[2rem] lg:text-[2.75rem] lg:leading-[2.75rem]">
                    Sosial Tərəfdaş
                </h1>
            </div>

            <div className="grid justify-center gap-x-6 grid-cols-1 lg:grid-cols-[minmax(0,177px)_minmax(0,1016px)_minmax(0,177px)]">
                <div className="w-full lg:w-auto">
                    <img
                        src={banner}
                        alt="side banner"
                        className="max-lg:hidden w-auto"
                    />
                </div>

                <div>
                    <img
                        src={centerBanner}
                        alt="main banner"
                        className="w-full h-full rounded-2xl object-cover"
                    />
                </div>

                <div className="w-full lg:w-auto">
                    <img
                        src={banner}
                        alt="side banner"
                        className="max-lg:hidden w-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
