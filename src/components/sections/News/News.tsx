import { useState } from 'react';

import eyeImg from '@icons/eye.svg';
import newsImg from '@imgs/news.svg';
import Button from '@/components/ui/Button';
import rightArrow from '@icons/arrow-right.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import type { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { newsData } from '@/mocks/newsData';

const News = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(
        null,
    );

    return (
        <div className={''}>
            <div className="flex max-md:flex-col justify-between gap-2">
                <h2 className="font-medium text-[2rem] leading-[2rem] md:text-[2.625rem] md:leading-[2.625rem] lg:text-[2.875rem] lg:leading-[3.375rem]">
                    Xəbərlər
                </h2>
                <Button className="text-[#1B3E77] lg:mt-7 flex items-center gap-x-4 cursor-pointer">
                    <p>Hamısına bax</p>
                    <img src={rightArrow} alt="rightArrow" />
                </Button>
            </div>

            <div className="mt-11">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={24}
                    slidesPerView={1}
                    onSwiper={setSwiperInstance}
                    onSlideChange={swiper => {
                        setActiveIndex(swiper.activeIndex);
                    }}
                    speed={800}
                    breakpoints={{
                        640: {
                            slidesPerView: 1.5,
                        },
                        1024: {
                            slidesPerView: 2,
                        },
                        1280: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {newsData.map(news => (
                        <SwiperSlide key={news.id} className="py-2">
                            <div className="card px-7 pt-6 pb-[25px] shadow-[0px_0px_11px_0px_#9191911F] rounded-2xl">
                                <img src={newsImg} alt="" className="w-full" />
                                <div className="card_body relative">
                                    <div className="absolute top-[-60px] left-[27px] flex items-center gap-x-[10px] bg-[#D3E4F4] px-4 py-[10px] rounded-full w-[89px]">
                                        <img
                                            src={eyeImg}
                                            alt=""
                                            className="w-[18px] h-[18px]"
                                        />
                                        <span className="text-sm">
                                            {news.views}
                                        </span>
                                    </div>
                                    <div className="my-[41px]">
                                        <h4 className="text-[1.125rem] text-[#001E38] leading-[23px] mb-[19px]">
                                            {news.title}
                                        </h4>
                                        <p className="text-sm leading-4">
                                            {news.description}
                                        </p>
                                    </div>
                                    <div className="flex max-sm:flex-col max-sm:justify-center justify-between gap-x-2 items-center">
                                        <Button
                                            className={
                                                'bg-[#1B3E77] text-white px-8 py-4 rounded-2xl leading-4 sofia-pro-light whitespace-nowrap cursor-pointer'
                                            }
                                        >
                                            Daha ətraflı
                                        </Button>
                                        <p className="text-[#001E38] sm:border-l border-[#1B3E77] sm:pl-[14px] leading-5 gotham whitespace-nowrap">
                                            {news.date}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="swiper-Buttons flex justify-end mt-10 space-x-4">
                    <Button
                        onClick={() => swiperInstance?.slidePrev()}
                        disabled={activeIndex === 0}
                        className="w-[48px] h-[48px] min-w-[48px] disabled text-[#1B3E77] border border-[#1b3e77] bg-white rounded-full flex items-center justify-center hover:bg-[#1B3E77] hover:text-white transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <ChevronLeft />
                    </Button>
                    <Button
                        onClick={() => swiperInstance?.slideNext()}
                        disabled={
                            activeIndex >=
                            newsData.length -
                                (swiperInstance?.params?.slidesPerView || 1)
                        }
                        className="w-[48px] h-[48px] min-w-[48px] text-[#1B3E77] border border-[#1b3e77] bg-white rounded-full flex items-center justify-center hover:bg-[#1B3E77] hover:text-white transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <ChevronRight />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default News;
