import rightArrow from '@icons/arrow-right.svg';

import bagImg from '@imgs/bag.svg';
import cardImg from '@imgs/card.svg';
import payImg from '@imgs/pay.svg';
import videoPlayer from '@imgs/video.svg';

import Button from '@/components/ui/Button';

const Features = () => {
    return (
        <div className="mt-30">
            <div className="flex max-lg:flex-col gap-2 justify-between ">
                <h2
                    className="font-medium text-[2rem] leading-[2rem] 
               md:text-[2.625rem] md:leading-[2.625rem] 
               lg:text-[2.875rem] lg:leading-[3.375rem]"
                >
                    Sistem necə işləyir
                </h2>
                <Button className="text-[#1B3E77] lg:mt-6 flex items-center gap-x-4 cursor-pointer">
                    <p>Hamısına bax</p>
                    <img src={rightArrow} alt="rightArrow" />
                </Button>
            </div>
            <div className="mt-13 mb-10">
                <img
                    src={videoPlayer}
                    alt="videoPlayer"
                    className="w-full cursor-pointer"
                />
            </div>
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-x-6 gap-y-[30px]">
                <div className="bg-[#F3F3F3] border border-[#ACACAC] rounded-2xl">
                    <div className="pt-6 pl-6">
                        <div className="bg-[#1B3E77] w-[30px] h-[30px] rounded-full text-white flex items-center justify-center">
                            1
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={bagImg} alt="bagImg" className="max-md:w-48" />
                        <div className="px-[21px] py-6">
                            <div className="bg-white text-center min-h-[118px] shadow-[0px_0px_11px_0px_#9494941F] px-[18px] py-5 rounded-2xl">
                                <h4 className="text-[#1B3E77] text-[18px] pb-3 leading-none">
                                    Alış-veriş edin
                                </h4>
                                <p className="text-[#303A42] text-sm sofia-pro-light leading-4 ">
                                    Evdən çıxarkən sosial ödəniş kartınızı
                                    götürdüyünüzə əmin olun və “Sosial tərəfdaş”
                                    layihəsi çərçivəsində bizimlə əməkdaşlıq
                                    edən istənilən partnyorumuza (mağaza, tibb
                                    mərkəzi və s.) yaxınlaşın
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#F3F3F3] border border-[#ACACAC] rounded-2xl">
                    <div className="pt-6 pl-6">
                        <div className="bg-[#1B3E77] w-[30px] h-[30px] rounded-full text-white flex items-center justify-center">
                            2
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={cardImg} alt="cardImg" className="max-md:w-52" />
                        <div className="px-[21px] py-6">
                            <div className="bg-white text-center min-h-[118px] shadow-[0px_0px_11px_0px_#9494941F] px-[18px] py-7 rounded-2xl">
                                <h4 className="text-[#1B3E77] text-[18px] pb-3 leading-none">
                                    Kartla ödəniş edin
                                </h4>
                                <p className="text-[#303A42] text-sm sofia-pro-light leading-4">
                                    İstədiyinizi alın, istədiyiniz xidmətdən
                                    faydalanın və hesabı sosial ödəniş
                                    kartınızla ödəyin
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#F3F3F3]  md:col-span-2 border border-[#ACACAC] rounded-2xl ">
                    <div className="pt-6 pl-6">
                        <div className="bg-[#1B3E77] w-[30px] h-[30px] rounded-full text-white flex items-center justify-center">
                            3
                        </div>
                    </div>
                    <div className="flex flex-col items-center ">
                        <img src={payImg} alt="payImg" className="max-md:w-52" />
                        <div className="px-[21px] py-6">
                            <div className="bg-white lg:!min-w-[800px]  text-center shadow-[0px_0px_11px_0px_#9494941F] px-[18px] py-5 rounded-2xl">
                                <h4 className="text-[#1B3E77] text-[18px] pb-3 leading-none">
                                    Endirimlə alın
                                </h4>
                                <p className="text-[#303A42] text-sm sofia-pro-light">
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

export default Features;
