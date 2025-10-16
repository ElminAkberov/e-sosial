import styles from './BePartner.module.scss';

import { NavLink } from 'react-router';

import partner from '@imgs/partner1.svg';
import partner2 from '@imgs/partner2.svg';
import magnifyIcon from '@icons/magnifyingglass.svg';

import Button from '@/components/ui/Button';
import Pagination from '@/components/ui/Pagination';
import Input from '@/components/ui/Input';

const BePartner = () => {
    const partners = [partner, partner2];
    const repeated = Array(8).fill(partners).flat();
    return (
        <div className={styles.container}>
            <div className="max-w-[1440px] mx-auto px-[108px] max-xl:px-[60px] max-md:px-4">
                <div className="mt-6">
                    <p className="leading-[27px]">
                        <NavLink to={'/'} className={'underline'}>
                            Ana səhifə
                        </NavLink>
                        <span className="text-[#2A5FB7]"> // Partnyor ol</span>
                    </p>
                </div>
                <h1 className="font-semibold text-[1.75rem] leading-[3rem] md:text-[3rem] md:leading-[3.5rem] lg:text-[3.4375rem] lg:leading-[4rem] mt-6">
                    PARTNYORLARIMIZ
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
                    <div className="">
                        <div
                            className={
                                'p-[58px] max-lg:px-5 max-lg:py-10 max-md:p-5 bg-[#fbfbfb] mt-[120px] rounded-2xl shadow-[0px_0px_13px_0px_#8A8A8A1F]'
                            }
                        >
                            <form className="mb-[4.625rem] public-sans">
                                <div className="flex flex-col xl:flex-row xl:items-center gap-4 lg:gap-8">
                                    <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap items-stretch sm:items-center gap-7 w-full lg:w-auto">
                                        <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4 w-full lg:w-auto">
                                            <label className="text-sm font-normal text-[#191C1F] whitespace-nowrap">
                                                Kateqoriya
                                            </label>
                                            <select className="w-full lg:min-w-[125px] lg:w-auto px-4 py-[7px] bg-white border border-[#E4E7E9] rounded text-sm text-[#77878F]">
                                                <option>Seç...</option>
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                            </select>
                                        </div>

                                        <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4 w-full lg:w-auto">
                                            <label className="text-sm font-normal text-[#191C1F] whitespace-nowrap">
                                                Region
                                            </label>
                                            <select className="w-full lg:min-w-[125px] lg:w-auto px-4 py-[7px] bg-white border border-[#E4E7E9] rounded text-sm text-[#77878F]">
                                                <option>Seç...</option>
                                                <option>Option A</option>
                                                <option>Option B</option>
                                            </select>
                                        </div>

                                        <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4 w-full lg:w-auto">
                                            <label className="text-sm font-normal text-[#191C1F] whitespace-nowrap">
                                                Sıralama
                                            </label>
                                            <select className="w-full lg:min-w-[125px] lg:w-auto px-4 py-[7px] bg-white border border-[#E4E7E9] rounded text-sm text-[#77878F]">
                                                <option>Seç...</option>
                                                <option>Yüksək aşağı</option>
                                                <option>Aşağı yüksək</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="w-full xl:w-auto xl:ml-auto">
                                        <div className="relative w-full xl:w-[230px]">
                                            <Input
                                                type="text"
                                                placeholder="Search"
                                                className="w-full pl-6 py-[7px] bg-white placeholder:text-xs pr-4 border border-[#E4E7E9] rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                            />
                                            <Button
                                                type="button"
                                                className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center gap-1 text-[#3C3C4399] hover:text-gray-900 bg-transparent"
                                            >
                                                <img src={magnifyIcon} alt="magnifyIcon" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-x-5 md:gap-y-[58px] gap-y-5 md:px-[22px]">
                                {repeated.map((src, i) => (
                                    <img key={i} src={src} alt="" />
                                ))}
                            </div>
                            <div className="mt-[75px] flex justify-center">
                                <Pagination />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BePartner;
