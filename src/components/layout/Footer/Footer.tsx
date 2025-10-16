import styles from './Footer.module.scss';

import footer from '@icons/footer.svg';
import mainLogo from '@icons/mainLogo.svg';
import socialMedia from '@icons/social-media.svg';

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className="max-w-[1440px] mx-auto px-[108px] max-xl:px-[60px] max-md:px-4 mt-[42px] mb-[41px]">
                <div className="xl:max-w-[970px]">
                    <img src={mainLogo} alt="mainLogo" className="mb-[41px]" />
                    <div className="flex max-md:flex-col justify-between gap-5">
                        <div className="text-xl max-md:text-lg text-white ">
                            Working hours
                            <div className="w-[37px] h-[1px] bg-[#D3E4F4]"></div>
                            <div className="pt-6 max-md:pt-3 text-[#BBC5D6] text-lg max-lg:text-base">
                                <p>Monday-Saturday</p>
                                <p>09:00 - 18:00</p>
                            </div>
                        </div>
                        <div className="text-xl max-md:text-lg text-white ">
                            Contact
                            <div className="w-[37px] h-[1px] bg-[#D3E4F4]"></div>
                            <div className="pt-6 max-md:pt-3 text-[#BBC5D6] text-lg max-lg:text-base">
                                <p>FAX: (+994 ) 12 434 55 87</p>
                                <p>For partners: (+994 10) 712 73 12</p>
                            </div>
                        </div>
                        <div className="text-xl max-md:text-lg text-white">
                            Adress
                            <div className="w-[37px] h-[1px] bg-[#D3E4F4]"></div>
                            <div className="pt-6 max-md:pt-3 text-[#BBC5D6] text-lg max-lg:text-base">
                                <p>Hasanbay Zardabi str. 80</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-white mt-[65px] mb-[38px]">
                        <h6 className="mb-5">Follow us on social media:</h6>
                        <div className="icons">
                            <img src={socialMedia} alt="socialMedia" />
                        </div>
                    </div>
                </div>
            </div>
            <img src={footer} alt="footer" className="absolute bottom-0 right-0" />
            <div className="border-t border border-[#415981]"></div>
            <div className="max-w-[1440px] text-[#fff] text-sm mx-auto px-[108px] max-xl:px-[60px] max-md:px-4 mt-6 mb-[31px]">
                Copyright © {new Date().getFullYear()} Sosial Tərəfdaş. Bütün
                hüquqlar qorunur.
            </div>
        </footer>
    );
};

export default Footer;
