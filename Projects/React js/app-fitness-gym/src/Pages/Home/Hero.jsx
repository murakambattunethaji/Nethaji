import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import PrimaryBtn from "../../Components/Button/PrimaryBtn";
const Hero = () => {

    const swiperData = [
        {
            id: 1,
            bgImg: "https://source.unsplash.com/random/?fitness",
            slogan: "Keep your body",
            title: "Burning",
            desc: "Get ready to burn off some serious fat wit our high quality products.",
        },
        {
            id: 2,
            bgImg: "https://source.unsplash.com/random/?gym",
            slogan: "Just Believe In",
            title: "Yourself",
            desc: "We are here to help you achieve your goals.",
        },
        {
            id: 3,
            bgImg: "https://source.unsplash.com/random/?yoga",
            slogan: "Grow Your Body",
            title: "Strength",
            desc: "Make your body stronger with our high quality products.",
        },
    ];
    return (
        <>
            <div className="w-full h-auto">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    {swiperData.map((data) => (
                        <SwiperSlide
                            key={data.id}
                            className="w-full h-[70vh]"
                            style={{
                                backgroundImage: "url(${data.bgImg})",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat"
                            }}
                        >
                            <div className="w-full h-full bg-black/80 absolute top-0 left-0 -z-10"></div>
                            <div className="w-full h-full flex items-center justify-center flex-col z-10 lg:px-24 md:px-16 sm:px-6 px-4">
                                <h5 className="lg:text-4x1 md:text-3x1 sm:text-2x1 text-2x1 text-indigo-400 font-semibold mb-2 uppercase">
                                    {data.slogan}
                                </h5>
                                <h1 className="lg:text-8x1 md:text-7x1 sm:text-5x1 text-5x1 font-bold text-white mb-4 uppercase">
                                    {data.title}
                                </h1>
                                <p className="lg:text-lg md:text-base sm:text-base text-gray-500 font-medium mb-6 text-center">
                                    {data.desc}
                                </p>
                                <PrimaryBtn className="lg:w-[15%] md:w-[35%] sm:w-[75%] w-[80%] h-14 mt-5 text-xl font-semibold rounded-full">Get Started</PrimaryBtn>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
                <div className="w-full h-auto flex items-center lg:justify-between
                md:justify-between sm:justify-center justify-center lg:gap-7 md:gap-7 sm:gap-5
                gap-5 lg:px-24 md:px-16 sm:px-6 px-6 mt-6 flex-wrap">
                    <div className="flex items-center justify-center flex-col lg:w-fit md:w-[48%]
                    sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10 bg-black/10 hover: bg-black/30
                    rounded-md ease-out duration-700 cursor-pointer">
                        <h5 className="text-4x1 text-indigo-400 font-semibold mb-2 uppercase">
                            1200+
                        </h5>
                        <p className="text-lg text-gray-600 font-medium">Members</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;