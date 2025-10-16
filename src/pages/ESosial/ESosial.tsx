import styles from './ESosial.module.scss';

import { NavLink } from 'react-router';

import phoneImg from '@imgs/esocialPhone.svg';
import Partners from '@/components/sections/Partners';

const ESosial = () => {
    return (
        <div className={styles.container}>
            <div className="max-w-[1440px] mx-auto px-[108px] max-xl:px-[60px] max-md:px-4">
                <div className="mt-6">
                    <p className="leading-[27px]">
                        <NavLink to={'/'} className={'underline'}>
                            Ana səhifə{' '}
                        </NavLink>
                        <span className="text-[#2A5FB7]"> // E-sosial</span>
                    </p>
                </div>
                <h1 className="font-semibold text-[1.75rem] leading-[3rem] md:text-[3rem] md:leading-[3.5rem] lg:text-[3.4375rem] lg:leading-[4rem] mt-6">
                    E-SOSİAL
                </h1>
                <div className="mt-10 flex max-lg:flex-col gap-10 items-center justify-between">
                    <div className="text-[#3A434D] max-w-[570px] max-xl:max-w-[500px] max-lg:max-w-full flex flex-col gap-4">
                        <p className="leading-[26px]">
                            Libero tellus aliquet tempor placerat tellus eget.
                            Nibh tempor ut convallis ipsum. Id scelerisque vitae
                            sed id id. A enim ornare tortor lobortis integer leo
                            massa tincidunt. Massa viverra et nisl sit tempus et
                            sed vulputate. Sed mauris bibendum consectetur
                            euismod. Mi, nulla viverra purus nisl est montes,
                            adipiscing nisl.
                        </p>
                        <p className="leading-[26px] ">
                            Accumsan nibh ultricies vitae vestibulum at velit
                            magna. Consequat lectus convallis bibendum commodo
                            posuere pellentesque quisque. Pharetra tortor, nibh
                            eu, lacus phasellus orci ut id. Lorem id posuere
                            vitae amet, in pulvinar. Pellentesque nunc eget
                            congue nunc faucibus nec at amet vel. Posuere
                            sagittis, a eros, libero sed a enim. Nullam mi non
                            eget consectetur in sed nulla cras ipsum. Egestas a
                            vitae nunc porttitor sit.{' '}
                        </p>
                        <p className="leading-[26px] ">
                            Sit sollicitudin molestie cras ornare. Egestas et
                            netus in nunc. Viverra dictum odio nibh at malesuada
                            porta dui nec. At phasellus nibh lobortis feugiat
                            massa nibh tincidunt dolor. Vel sodales quam erat
                            dui scelerisque diam elementum in sapien.
                        </p>
                        <p className="leading-[26px] ">
                            At phasellus nibh lobortis feugiat massa nibh
                            tincidunt dolor. Vel sodales quam erat dui
                            scelerisque diam elementum in sapien.
                        </p>
                    </div>
                    <div className="max-w-[600] max-xl:max-w-[550px] max-lg:max-w-full">
                        <img src={phoneImg} alt="phoneImg" />
                    </div>
                </div>
                <Partners />
            </div>
        </div>
    );
};

export default ESosial;
