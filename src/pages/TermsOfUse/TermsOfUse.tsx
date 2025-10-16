import React from 'react';
import styles from './TermsOfUse.module.scss';

import { NavLink } from 'react-router';

import videoPlayer from '@imgs/video.svg';
import cardImg1 from '@imgs/cardImg1.svg';
import cardImg2 from '@imgs/cardImg2.svg';
import cardImg3 from '@imgs/cardImg3.svg';

import Button from '@/components/ui/Button';

const TermsOfUse: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className="max-w-[1440px] mx-auto px-[108px] max-xl:px-[60px] max-md:px-4">
                <div className="mt-6">
                    <p className="leading-[27px]">
                        <NavLink to={'/'} className={'underline'}>
                            Ana səhifə
                        </NavLink>
                        <span className="text-[#2A5FB7]">
                            {' '}
                            // İstifadə qaydaları
                        </span>
                    </p>
                </div>
                <h1 className="font-semibold text-[1.75rem] leading-[3rem] md:text-[3rem] md:leading-[3.5rem] lg:text-[3.4375rem] lg:leading-[4rem] mt-6">
                    İSTİFADƏ QAYDALARI
                </h1>
                <div className="mt-[50px]">
                    <div className="flex max-md:flex-col items-center justify-center sm:gap-x-[1.875rem]">
                        <Button
                            className={
                                'py-[6.5px] min-w-[160px] px-10 text-xs sm:text-base leading-[27px] bg-[#1B3E77] text-[#fff]  rounded-2xl cursor-pointer whitespace-nowrap'
                            }
                        >
                            E-SOSİAL
                        </Button>
                        <Button
                            className={
                                'py-[6.5px] min-w-[196px] px-[33.5px] text-xs sm:text-base leading-[27px] text-[#060D1A] font-medium rounded-min-[1440px] whitespace-nowrap'
                            }
                        >
                            TƏQAÜD KARTI
                        </Button>
                    </div>
                    <div className="mt-15 mb-[34px]">
                        <img src={videoPlayer} alt="videoPlayer" />
                    </div>
                    <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6">
                        <div className="card shadow-[0px_0px_11px_0px_#9494941F] rounded-2xl flex flex-col items-center px-[18px] py-7">
                            <img src={cardImg1} alt="cardImg1" />
                            <div className="card-body leading-4 text-center">
                                <h4 className="text-[18px] font-medium mt-[9px] mb-3">
                                    Alış-veriş edin
                                </h4>
                                <p className="sofia-pro-light text-sm">
                                    Evdən çıxarkən sosial ödəniş kartınızı
                                    götürdüyünüzə əmin olun və “Sosial tərəfdaş”
                                    layihəsi çərçivəsində bizimlə əməkdaşlıq
                                    edən istənilən partnyorumuza (mağaza, tibb
                                    mərkəzi və s.) yaxınlaşın
                                </p>
                            </div>
                        </div>
                        <div className="card shadow-[0px_0px_11px_0px_#9494941F] rounded-2xl flex flex-col items-center px-[18px] py-7">
                            <img src={cardImg2} alt="cardImg2" />
                            <div className="card-body leading-4 text-center">
                                <h4 className="text-[18px] font-medium mt-[9px] mb-3">
                                    Kartla ödəniş edin
                                </h4>
                                <p className="sofia-pro-light text-sm">
                                    İstədiyinizi alın, istədiyiniz xidmətdən
                                    faydalanın və hesabı sosial ödəniş
                                    kartınızla ödəyin
                                </p>
                            </div>
                        </div>
                        <div className="card shadow-[0px_0px_11px_0px_#9494941F] rounded-2xl flex flex-col items-center px-[18px] py-7">
                            <img src={cardImg3} alt="cardImg3" />
                            <div className="card-body leading-4 text-center">
                                <h4 className="text-[18px] font-medium mt-[9px] mb-3">
                                    Endirimlə alın
                                </h4>
                                <p className="sofia-pro-light text-sm">
                                    Kartınıza tətbiq olunan endirimlərdən
                                    faydalanın - daha çox alış-veriş edin, daha
                                    az ödəyin
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfUse;
