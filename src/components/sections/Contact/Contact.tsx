import styles from './Contact.module.scss';

import pattern from '@imgs/pattern.svg';
import cardImg from '@imgs/bankCard.svg';

import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { inputFields } from '@/mocks/inputFields';

const Contact = () => {
    return (
        <div className={styles.container}>
            <div className="max-w-[1440px] mx-auto px-[108px] max-xl:px-[60px] max-md:px-4">
                <div className="mb-12">
                    <span className="text-xs text-[#0095da]">// Müraciət</span>
                    <h2 className="font-medium text-[2rem] leading-[2rem] md:text-[2.625rem] md:leading-[2.625rem] lg:text-[2.875rem] lg:leading-[3.375rem]">
                        Sual ver
                    </h2>
                </div>

                <div className="flex justify-between items-center gap-10 mt-12">
                    <form className="w-full lg:max-w-none xl:max-w-[550px] lg:max-w-[450px]">
                        <div className="questionForm">
                            <div className="inputs grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 text-sm">
                                {inputFields.map(field => (
                                    <div key={field.id} className="relative">
                                        <Input
                                            type={field.type}
                                            id={field.id}
                                            placeholder=" "
                                            className="peer w-full border border-[#596A7982] leading-4 bg-[#F5FAFF] pl-6 py-4 focus:outline-none focus:border-[#0095DA] rounded-2xl"
                                        />
                                        <label
                                            htmlFor={field.id}
                                            className="absolute left-6 top-1/2 -translate-y-1/2 text-[#7B8C9C] text-sm transition-all duration-200 pointer-events-none
                                            peer-focus:-top-3 peer-focus:left-0 peer-focus:text-xs peer-focus:text-[#0095DA] peer-focus:after:content-['*'] peer-focus:after:text-[#0095DA]
                                            peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#0095DA] peer-[:not(:placeholder-shown)]:after:content-['*'] peer-[:not(:placeholder-shown)]:after:text-[0095DA]"
                                        >
                                            {field.label}
                                        </label>
                                    </div>
                                ))}
                            </div>

                            <div className="textbox relative">
                                <textarea
                                    id="message"
                                    placeholder=" "
                                    className="peer resize-none min-h-[127px] leading-4 text-sm w-full border border-[#596A7982] placeholder:text-transparent bg-[#F5FAFF] pl-6 py-4 focus:outline-none focus:border-[#0095DA] rounded-2xl"
                                ></textarea>
                                <label
                                    htmlFor="message"
                                    className="absolute left-6 top-5 -translate-y-1/2 text-[#7B8C9C] text-sm transition-all duration-200 pointer-events-none
                                    peer-focus:-top-3 peer-focus:left-0 peer-focus:text-xs peer-focus:text-[#0095DA] peer-focus:after:content-['*'] peer-focus:after:text-[#0095DA]
                                    peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#0095DA] peer-[:not(:placeholder-shown)]:after:content-['*'] peer-[:not(:placeholder-shown)]:after:text-[0095DA]"
                                >
                                    Mesajınız...
                                </label>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="bg-[#1B3E77] text-white px-8 py-4 rounded-2xl leading-4 min-w-[160px] mt-8 cursor-pointer"
                        >
                            Göndər
                        </Button>
                    </form>

                    <div className="w-full lg:max-w-none xl:max-w-[630px] lg:max-w-[500px] max-md:hidden">
                        <img src={cardImg} alt="cardImg" />
                    </div>
                </div>
            </div>

            <div className="absolute left-0 bottom-[-120px] max-xl:bottom-[-80px] max-md:bottom-[-40px] -z-10 w-full">
                <img
                    src={pattern}
                    alt="pattern"
                    className="w-full object-cover"
                />
            </div>
        </div>
    );
};

export default Contact;
