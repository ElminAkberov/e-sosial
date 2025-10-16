import mailIcon from '@icons/mail.svg';
import phoneIcon from '@icons/phone.svg';
import russiaFlag from '@icons/russia.svg';
import magnifyIcon from '@icons/magnifyingglass.svg';

import { NavLink } from 'react-router';

import { ChevronDown } from 'lucide-react';

import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function HeaderLanding() {
    return (
        <header className="bg-white border-b border-gray-200">
            <div className="max-w-[1440px] mx-auto px-4 min-[1440px]:px-[108px]">
                <div className="flex items-center justify-between h-15 py-3 min-[1440px]:py-0">
                    <nav className="flex items-center space-x-[3px] whitespace-nowrap">
                        <div className="max-lg:hidden">
                            <NavLink
                                to="/partnyor-ol"
                                className="text-black hover:text-blue-600 duration-300 p-[10px]"
                            >
                                Partnyor ol
                            </NavLink>
                            <NavLink
                                to="#"
                                className="text-black hover:text-blue-600 duration-300 p-[10px]"
                            >
                                Regionlar
                            </NavLink>
                            <NavLink
                                to="/istifade-qaydalari"
                                className="text-black hover:text-blue-600 duration-300 p-[10px] whitespace-nowrap"
                            >
                                İstifadə qaydaları
                            </NavLink>
                        </div>
                        <div className="relative w-[185px] lg:ml-[49px] ">
                            <Input
                                type="text"
                                placeholder="Search"
                                className="w-full pl-6 py-[5.5px] bg-[#FAFAFA] placeholder:text-[#3C3C4399] text-xs pr-20  rounded-[6.5px] focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                            <Button
                                type="button"
                                className="absolute left-1 top-[13.5px] -translate-y-1/2 flex items-center gap-1 px-1 text-[#3C3C4399] hover:text-gray-900 bg-transparent"
                            >
                                <img src={magnifyIcon} alt="magnifyIcon" />
                            </Button>
                        </div>
                    </nav>
                    <div className="hidden lg:flex items-center space-x-[50px]">
                        <div className="flex items-center space-x-[43px] text-xs !text-[#8D8D8D]">
                            <NavLink
                                to="mailto:office@nümunə.com"
                                className="flex items-center space-x-2 hover:text-blue-600 transition-colors"
                            >
                                <img
                                    src={mailIcon}
                                    alt="mailIcon"
                                    className="w-3.5 h-3.5"
                                />
                                <span>office@nümunə.com</span>
                            </NavLink>
                            <NavLink
                                to="tel:+994124801786"
                                className="flex items-center space-x-2 hover:text-blue-600 transition-colors"
                            >
                                <img
                                    src={phoneIcon}
                                    alt="phoneIcon"
                                    className="w-3.5 h-3.5"
                                />
                                <span>+994124801786</span>
                            </NavLink>
                        </div>

                        <Button className="flex items-center bg-[#F5F5F5] space-x-2 px-1 py-1 rounded-md transition-colors">
                            <img
                                src={russiaFlag}
                                alt="Russian"
                                className="w-6 h-4 object-cover rounded"
                            />
                            <ChevronDown className="w-4 h-4 text-black" />
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
