import rightArrow from '@icons/arrow-right.svg';

import Button from '@/components/ui/Button';
import { benefits } from '@/mocks/benefits';

const Benefits = () => {
    return (
        <div className="advantages my-[120px]">
            <div className="flex max-lg:flex-col justify-between gap-2">
                <h2 className="font-medium text-[2rem] leading-[2rem] md:text-[2.625rem] md:leading-[2.625rem] lg:text-[2.875rem] lg:leading-[3.375rem]">
                    Həyatınızı asanlaşdıracaq üstünlüklər
                </h2>
                <Button className="text-[#1B3E77] lg:mt-7 flex items-center gap-x-4 cursor-pointer whitespace-nowrap">
                    <p>Hamısına bax</p>
                    <img src={rightArrow} alt="rightArrow" />
                </Button>
            </div>

            <div className="boxes_layout bg-white shadow-[0px_0px_13px_0px_#8A8A8A1F] px-14 py-[38px] max-lg:px-10 mt-[52px] rounded-2xl">
                <div className="boxes grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1 gap-x-[88px] gap-y-[57px]">
                    {benefits.map((item, index) => (
                        <div key={index} className="flex gap-x-[9px]">
                            <div className="bg-[#E5EEFF] rounded-sm relative py-[20px] px-[15px]">
                                <img
                                    src={item.icon}
                                    alt={item.icon}
                                    className="min-w-[50px] min-h-[50px]"
                                />
                                <div className="bg-[#0055ff] w-[3px] h-4 rounded-[1px] absolute top-[2.5rem] right-0"></div>
                            </div>
                            <div>
                                <h4 className="font-medium text-[1.125rem]">
                                    {item.title}
                                </h4>
                                <p className="sofia-pro-light text-sm leading-4">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Benefits;
