import React, { useRef, useState } from "react";
import OfferItem from "./OfferItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, FreeMode, Scrollbar } from "swiper";
import { motion } from "framer-motion";
import { scrollTo } from "../utils";
import { OffersInfo } from "../utils/data";

import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/scrollbar";

function Offer() {
    const swiperRef = useRef(null);

    return (
        <section
            className="flex flex-col h-[80rem] sm:h-auto items-center px-16 sm:px-6 mt-24 gap-28 sm:gap-8 sm:pb-32"
            id="offer"
        >
            <h2 className="relative text-secondary-300 text-4xl font-bold px-8 p-4 after:block after:absolute after:bottom-0 after:w-full sm:after:w-[50%] after:h-1 after:left-1/2 after:-translate-x-1/2 after:bg-primary-400">
                Oferujemy
            </h2>

            <div className="flex items-center justify-center w-full relative">
                <div className="w-[80%] relative sm:w-full">
                    <motion.div
                        className="w-10 h-10 bg-secondary-300 flex justify-center items-center rounded-full absolute z-10 cursor-pointer left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 hover:opacity-90 transition-[opacity] duration-400 sm:hidden"
                        onClick={() => {
                            swiperRef.current.swiper.slidePrev();
                        }}
                        initial={{ x: "-50%", y: "-50%" }}
                        whileTap={{ scale: 1.1 }}
                        transition={{
                            duration: 0.08,
                            type: "tween",
                        }}
                    >
                        <img src="/assets/arrowLeft.svg" alt="left arrow" />
                    </motion.div>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={"auto"}
                        breakpoints={{
                            690: {
                                slidesPerView: 1,
                            },

                            800: {
                                slidesPerView: 2,
                            },

                            1500: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },

                            1600: {
                                slidesPerView: 4,
                            },
                        }}
                        modules={[Virtual, Scrollbar]}
                        ref={swiperRef}
                        className="sm:hidden block"
                        scrollbar={{
                            draggable: true,
                            horizontalClass: "horizontal-scroll",
                        }}
                    >
                        {OffersInfo.map((data, idx) => (
                            <SwiperSlide key={idx}>
                                <OfferItem
                                    title={data.title}
                                    description={data.description}
                                    image={data.image}
                                    key={idx}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* mobile slider */}
                    <Swiper
                        spaceBetween={"-10%"}
                        slidesPerView={"auto"}
                        modules={[Virtual, FreeMode, Scrollbar]}
                        freeMode={{ enabled: true, sticky: false }}
                        className="sm:block hidden"
                        centeredSlidesBounds={true}
                        edgeSwipeThreshold={10}
                        scrollbar={{
                            enabled: true,
                            draggable: true,
                            horizontalClass: "horizontal-scroll",
                        }}
                    >
                        {OffersInfo.map((data, idx) => (
                            <SwiperSlide key={idx}>
                                <OfferItem
                                    title={data.title}
                                    description={data.description}
                                    image={data.image}
                                    key={idx}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <motion.div
                        className="w-10 h-10 bg-secondary-300 flex justify-center items-center rounded-full absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 z-10 cursor-pointer hover:opacity-90 transition-[opacity] duration-400 sm:hidden"
                        onClick={() => {
                            swiperRef.current.swiper.slideNext();
                        }}
                        initial={{ x: "50%", y: "-50%" }}
                        whileTap={{ scale: 1.1 }}
                        transition={{
                            duration: 0.08,
                            type: "tween",
                        }}
                    >
                        <img src="/assets/arrowRight.svg" alt="right arrow" />
                    </motion.div>
                </div>
            </div>

            <div className="flex flex-col gap-10 sm:mt-20">
                <p className="text-center text-lg sm:text-base text-90-black">
                    Ponadto, sklep oferuje&nbsp;
                    <span className="font-bold">konkurencyjne ceny</span> oraz
                    różnego rodzaju <br className="sm:hidden inline-block" />
                    <span className="font-bold">promocje i rabaty</span> dla
                    swoich klientów
                </p>

                <motion.button
                    className="hidden sm:block text-white bg-primary-400 self-center px-10 py-2 text-lg font-semibold rounded-3xl"
                    onClick={() => scrollTo("contact", 80)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Kontakt
                </motion.button>
            </div>
        </section>
    );
}

export default Offer;
