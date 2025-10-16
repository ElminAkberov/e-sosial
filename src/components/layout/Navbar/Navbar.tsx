import { useState } from 'react';

import { Menu, X } from 'lucide-react';
import socialIcon from '@icons/icon2.svg';
import combinedIcon from '@icons/icon1.svg';

import Button from '@/components/ui/Button';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-white border-t border-[#B6B6B6] shadow-[0px_0px_11px_0px_#9999991F]">
            <div className="max-w-[1440px] mx-auto px-4 min-[1440px]:px-[108px] min-[1440px]:pr-[97px]">
                <div className="flex items-center justify-between gap-5 h-20">
                    <div className="flex items-center space-x-3 sm:space-x-[25px]">
                        <img
                            src={combinedIcon}
                            alt="Logo 1"
                            className="max-xl:h-12"
                        />
                        <img
                            src={socialIcon}
                            alt="Flower Icon"
                            className="max-xl:h-12"
                        />
                    </div>

                    <div className="hidden lg:flex items-center max-xl:text-sm ">
                        {[
                            'Əsas səhifə',
                            'E-sosial',
                            'Haqqımızda',
                            'Partnyorlar',
                            'Üstünlüklər',
                            'Sual-Cavab',
                            'Xəbərlər',
                            'Əlaqə',
                        ].map(item => (
                            <a
                                key={item}
                                href="#"
                                className="text-gray-700 hover:text-gray-900 transition-colors p-2 font-medium"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    <Button
                        className="lg:hidden cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </Button>
                </div>

                {isOpen && (
                    <div className="lg:hidden flex flex-col space-y-3 pb-4 animate-slideDown">
                        {[
                            'Əsas səhifə',
                            'E-sosial',
                            'Haqqımızda',
                            'Partnyorlar',
                            'Üstünlüklər',
                            'Sual-Cavab',
                            'Xəbərlər',
                            'Əlaqə',
                        ].map(item => (
                            <a
                                key={item}
                                href="#"
                                className="block text-gray-700 hover:text-gray-900 transition-colors px-2 py-1 font-medium"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}
