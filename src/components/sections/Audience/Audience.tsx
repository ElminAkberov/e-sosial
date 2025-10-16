import styles from './Audience.module.scss';
import forAge from '@imgs/forAge.svg'
import forDisability from '@imgs/forDisability.svg'
import forSocial from '@imgs/forSocial.svg'
import forFamily from '@imgs/forFamily.svg'
const Audience = () => {
    return (
        <div className={styles.container}>
            <div className=" flex max-xl:flex-col justify-between gap-[20px]">
                <div className="-content xl:max-w-[460px]">
                    <h2 className="font-medium text-[2rem] leading-[2rem] lg:text-[2.625rem] md:leading-[2.625rem] ">
                        Kimlərə şamil olunur
                    </h2>
                    <p className="pt-6 sofia-pro-light leading-6">
                        Lorem ipsum dolor sit amet consectetur. Elementum
                        convallis mattis nibh ultrices suspendisse semper. Amet
                        risus turpis ac mus tellus dignissim sociis ut quis.
                        Orci laoreet a et felis. Eget viverra eget mus elementum
                        nibh integer in nulla. Lorem ipsum dolor sit amet
                        consectetur. Elementum convallis mattis nibh ultrices
                        suspendisse semper. Amet risus turpis ac mus tellus
                        dignissim sociis ut quis. Orci laoreet a et felis. Eget
                        viverra eget mus elementum nibh integer in nulla.
                    </p>
                </div>
                <div className="-boxes grid gap-x-6 gap-y-[18px] grid-cols-2 max-md:grid-cols-1 xl:max-w-[600px]">
                    <div className="-box border border-[#F6F6F6] rounded-2xl bg-white pl-8 pt-[50px] pb-[58px] pr-[25px]">
                        <div className="icon">
                            <img
                                src={forAge}
                                alt="Yaşa görə"
                                title="Yaşa görə"
                            />
                        </div>
                        <h3 className="text-[1.25rem] pb-3 pt-[34px]">
                            Yaşa görə
                        </h3>
                        <p className="text-[#7A7A7A] text-sm sofia-pro-light leading-5">
                            “Əmək pensiyaları haqqında” Qanunun 7, 8, 9-cu
                            maddələrinə əsasən pensiya hüququ müəyyən edilmiş
                            şəxslərə
                        </p>
                    </div>
                    <div className="-box border border-[#F6F6F6] rounded-2xl bg-white pl-8 pt-[50px] pb-[58px] ">
                        <div className="icon">
                            <img
                                src={forDisability}
                                alt="Əlilliyə görə"
                                title="Əlilliyə görə"
                            />
                        </div>
                        <h3 className="text-[1.25rem] pb-3 pt-[34px]">
                            Əlilliyə görə
                        </h3>
                        <p className="text-[#7A7A7A] text-sm sofia-pro-light leading-5 pr-[25px]">
                            “Əmək pensiyaları haqqında” Qanunun 11, 12-ci
                            maddələrinə əsasən pensiya hüququ müəyyən edilmiş
                            şəxslərə
                        </p>
                    </div>
                    <div className="-box border border-[#F6F6F6] rounded-2xl bg-white pl-8 pt-[50px] pb-[18px] ">
                        <div className="icon">
                            <img
                                src={forSocial}
                                alt="Sosial müavinət"
                                title="Sosial müavinət"
                            />
                        </div>
                        <h3 className="text-[1.25rem] pb-3 pt-[34px]">
                            Sosial müavinət
                        </h3>
                        <p className="text-[#7A7A7A] text-sm sofia-pro-light leading-5 pr-[25px]">
                            “Sosial müavinətlər haqqında” Qanunun 4.0.1.2,
                            7.0.2, 4.0.1.3, 7.0.3, 4.0.1.5, 7.0.5-ci maddələrinə
                            əsasən, yaşa, əlilliyə və ailə başçısını itirməyə
                            görə sosial müavinət almaq hüququ müəyyən edilmiş
                            şəxslərə
                        </p>
                    </div>
                    <div className="-box border border-[#F6F6F6] rounded-2xl bg-white pl-8 pt-[50px] pb-[58px] ">
                        <div className="icon">
                            <img
                                src={forFamily}
                                alt="Ailə başçısını itirməyə görə"
                                title="Ailə başçısını itirməyə görə"
                            />
                        </div>
                        <h3 className="text-[1.25rem] pb-3 pt-[34px]">
                            Ailə başçısını itirməyə görə
                        </h3>
                        <p className="text-[#7A7A7A] text-sm sofia-pro-light leading-5 pr-[33px]">
                            “Əmək pensiyaları haqqında” Qanunun 14, 15, 16,
                            17-ci maddələrinə əsasən pensiya hüququ müəyyən
                            edilmiş şəxslərə
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Audience;
