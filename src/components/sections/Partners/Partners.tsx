import { NavLink } from 'react-router';

import rightArrow from '@icons/arrow-right.svg';
import magnifyIcon from '@icons/magnifyingglass.svg';

import partner from '@imgs/partner1.svg';
import partner2 from '@imgs/partner2.svg';
import Input from '@/components/ui/Input';

import Button from '@/components/ui/Button';

const Partners = () => {
    return (
        <div
            className={
                'py-15 px-9 max-lg:px-5 max-lg:py-10 max-md:p-5 bg-[#fbfbfb] mt-[120px] rounded-2xl shadow-[0px_0px_13px_0px_#8A8A8A1F]'
            }
        >
            <div className="flex max-lg:flex-col gap-2 justify-between">
                <h2
                    className="font-medium text-[2rem] leading-[2rem]
                        md:text-[2.625rem] md:leading-[2.625rem]
                        lg:text-[2.875rem] lg:leading-[3.375rem]"
                >
                    Partnyorlarımızla tanış olun
                </h2>
                <NavLink to="/partnyor-ol">
                    <Button className="text-[#1B3E77] lg:mt-7 flex items-center gap-x-4 cursor-pointer">
                        <p>Hamısına bax</p>
                        <img src={rightArrow} alt="rightArrow" />
                    </Button>
                </NavLink>
            </div>

            <form className="mt-6 mb-[2.375rem] public-sans">
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
                {[
                    partner,
                    partner2,
                    partner,
                    partner2,
                    partner2,
                    partner,
                    partner2,
                    partner,
                ].map((src, i) => (
                    <img key={i} src={src} alt="" />
                ))}
            </div>
        </div>
    );
};

export default Partners;
