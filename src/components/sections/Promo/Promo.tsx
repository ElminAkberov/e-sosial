import { useState } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

import { ChevronLeft, ChevronRight } from 'lucide-react';

import slideItem1 from '@imgs/slideItem1.svg';
import slideItem2 from '@imgs/slideItem2.svg';
import download from '@imgs/download.svg';

import Button from '@/components/ui/Button';

const Promo = () => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(
        null,
    );

    const handlePrev = () => swiperInstance?.slidePrev();
    const handleNext = () => swiperInstance?.slideNext();

    const slides = [slideItem1, slideItem2, slideItem1];

    return (
        <div className="flex max-lg:flex-col justify-between gap-x-[49px] max-lg:gap-6">
            <div className="contentSection max-w-[595px] max-xl:max-w-full">
                <div>
                    <h2 className="font-medium text-[2rem] leading-[2rem] md:text-[2.625rem] md:leading-[2.625rem] lg:text-[2.875rem] lg:leading-[3.375rem]">
                        Lorem Ipsum is simply <br /> dummy text of the printing
                    </h2>

                    <p className="text-[1.125rem] max-md:text-[1rem] leading-[1.5rem] pt-[1.125rem] pb-[1.875rem]">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search
                        for 'lorem ipsum' will uncover many web sites still in
                        their infancy.
                    </p>

                    <img src={download} alt="download" />
                </div>

                <div className="swiper-buttons flex mt-[87px] space-x-4 max-xl:hidden">
                    <Button
                        onClick={handlePrev}
                        className="w-[48px] h-[48px] min-w-[48px] text-[#1B3E77] border border-[#1b3e77] bg-white rounded-full flex items-center justify-center cursor-pointer"
                    >
                        <ChevronLeft />
                    </Button>

                    <Button
                        onClick={handleNext}
                        className="w-[48px] h-[48px] min-w-[48px] text-[#1B3E77] border border-[#1b3e77] bg-white rounded-full flex items-center justify-center cursor-pointer"
                    >
                        <ChevronRight />
                    </Button>
                </div>
            </div>

            <div className="phoneSection max-w-[550px] max-lg:max-w-full w-full flex justify-center items-center">
                <Swiper
                    modules={[Navigation]}
                    onSwiper={setSwiperInstance}
                    slidesPerView={2}
                    loop
                    className="w-full"
                    breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 10 },
                        768: { slidesPerView: 2, spaceBetween: -50 },
                    }}
                >
                    {slides.map((src, i) => (
                        <SwiperSlide key={i}>
                            <div className="flex justify-center">
                                <img
                                    src={src}
                                    alt={`slide-${i + 1}`}
                                    className="max-w-[310px] w-full h-auto max-md:max-w-[260px]"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Promo;
