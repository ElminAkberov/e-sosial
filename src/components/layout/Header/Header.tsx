import { useState } from 'react';

import mailIcon from '@icons/mail.svg';
import phoneIcon from '@icons/phone.svg';
import searchIcon from '@icons/search.svg';
import bottomIcon from '@icons/bottom.svg';
import russiaFlag from '@icons/russia.svg';
import { Menu, X } from 'lucide-react';

import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { navLinks } from '@/mocks/navLinks';

import { NavLink } from 'react-router';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('esosial');

    const handleTabClick = (tab: string) => setActiveTab(tab);
    const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <header className="bg-white border-b border-gray-200">
            <div className="max-w-[1440px] mx-auto px-4 min-[1440px]:px-[108px]">
                <div className="flex items-center justify-between h-15 py-3 min-[1440px]:py-0">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                        <NavLink to={'/e-sosial'}>
                            <Button
                                onClick={() => handleTabClick('esosial')}
                                className={`px-4 sm:px-8 py-2 text-xs sm:text-base leading-6 rounded-2xl cursor-pointer whitespace-nowrap transition-colors ${
                                    activeTab === 'esosial'
                                        ? 'bg-[#0095DA14] text-[#1B3E77] font-semibold'
                                        : 'bg-transparent text-[#060D1A] font-medium hover:bg-[#0095DA14] hover:text-[#1B3E77]'
                                }`}
                            >
                                E-SOSİAL
                            </Button>
                        </NavLink>

                        <Button
                            onClick={() => handleTabClick('teqaud')}
                            className={`px-2 sm:px-3 py-2 text-xs sm:text-base leading-6 font-medium rounded-2xl cursor-pointer whitespace-nowrap transition-colors ${
                                activeTab === 'teqaud'
                                    ? 'bg-[#0095DA14] text-[#1B3E77] font-semibold'
                                    : 'bg-transparent text-[#060D1A] font-medium hover:bg-[#0095DA14] hover:text-[#1B3E77]'
                            }`}
                        >
                            TƏQAÜD KARTI
                        </Button>
                    </div>

                    <nav className="hidden min-[1440px]:flex items-center ml-[150px] mr-[50px] space-x-[3px] whitespace-nowrap">
                        {navLinks.map(({ label, to }) => (
                            <NavLink
                                key={label}
                                to={to}
                                className="text-sm hover:text-blue-600 transition-colors p-[10px] leading-4"
                            >
                                {label}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="hidden min-[1440px]:flex items-center space-x-5">
                        <div className="flex items-center space-x-4 text-xs text-[#8D8D8D]">
                            <NavLink
                                to="mailto:office@nümunə.com"
                                className="flex items-center space-x-2 hover:text-blue-600 transition-colors"
                            >
                                <img
                                    src={mailIcon}
                                    alt="mail"
                                    className="w-3.5 h-3.5 mt-1"
                                />
                                <span>office@nümunə.com</span>
                            </NavLink>

                            <NavLink
                                to="tel:+994124801786"
                                className="flex items-center space-x-2 hover:text-blue-600 transition-colors"
                            >
                                <img
                                    src={phoneIcon}
                                    alt="phone"
                                    className="w-3.5 h-3.5 mt-[2px]"
                                />
                                <span>+994124801786</span>
                            </NavLink>
                        </div>

                        <Button>
                            <img
                                src={searchIcon}
                                alt="search"
                                className="min-w-5 min-h-5"
                            />
                        </Button>

                        <Button className="flex items-center bg-[#F5F5F5] space-x-[6px] px-1 py-1 rounded-md transition-colors">
                            <img
                                src={russiaFlag}
                                alt="Russian"
                                className="w-6 h-4 object-cover rounded"
                            />
                            <img src={bottomIcon} alt="arrow" />
                        </Button>
                    </div>

                    <div className="flex min-[1440px]:hidden items-center space-x-3">
                        <Button>
                            <img
                                src={searchIcon}
                                alt="search"
                                className="w-5 h-5 max-sm:hidden"
                            />
                        </Button>

                        <Button className="flex items-center bg-[#F5F5F5] space-x-1 px-1 py-1 rounded-md">
                            <img
                                src={russiaFlag}
                                alt="Russian"
                                className="w-5 h-3.5 object-cover rounded"
                            />
                            <img src={bottomIcon} alt="arrow" />
                        </Button>

                        <Button onClick={toggleMobileMenu}>
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6 cursor-pointer" />
                            ) : (
                                <Menu className="w-6 h-6 cursor-pointer" />
                            )}
                        </Button>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="min-[1440px]:hidden py-4 border-t border-gray-200">
                        <nav className="flex flex-col space-y-3 mb-4">
                            {navLinks.map(({ label, to }) => (
                                <NavLink
                                    key={label}
                                    to={to}
                                    className="text-sm hover:text-blue-600 transition-colors py-2"
                                    onClick={closeMobileMenu}
                                >
                                    {label}
                                </NavLink>
                            ))}
                        </nav>

                        <div className="flex flex-col space-y-3 text-xs text-[#8D8D8D] pt-3 border-t border-gray-200">
                            <NavLink
                                to="mailto:office@nümunə.com"
                                className="flex items-center space-x-2 hover:text-blue-600 transition-colors"
                            >
                                <img
                                    src={mailIcon}
                                    alt="mail"
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
                                    alt="phone"
                                    className="w-3.5 h-3.5"
                                />
                                <span>+994124801786</span>
                            </NavLink>
                        </div>

                        <div className="mt-3 min-sm:hidden">
                            <Input
                                type="text"
                                placeholder="Axtar..."
                                className="text-sm p-1 outline-[#1B3E77] w-full border border-[#8D8D8D] rounded-md"
                            />
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
