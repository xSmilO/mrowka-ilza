import React, { useRef, useState } from "react";
import OfferItem from "./OfferItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, FreeMode } from "swiper";
import { motion } from "framer-motion";
import { scrollTo } from "../utils";

import "swiper/css";
import "swiper/css/virtual";

const categoriesInfo = [
    {
        title: "Materiały budowlane",
        description:
            "Takie jak: cegły, beton, cement, pustaki, kruszywa, farby, kleje, izolacje, drzwi, okna.",
        image: "/assets/category.jpeg",
    },
    {
        title: "Narzędzia ogrodnicze",
        description:
            "Kosiarki, podkaszarki, nożyce do żywopłotów, a także narzędzia do pielęgnacji roślin.",
        image: "/assets/category.jpeg",
    },
    {
        title: "Narzędzia ręczne i elektryczne",
        description:
            "Młotki, wiertarki, szlifierki, piły, wkrętarki, a także wiele innych produktów.",
        image: "/assets/category.jpeg",
    },
    {
        title: "Wyposażenie4",
        description: "Lorem impsu i agarg ag r arha ahahahf",
        image: "/assets/category.jpeg",
    },
    {
        title: "Wyposażenie5",
        description: "Lorem impsu i agarg ag r arha ahahahf",
        image: "/assets/category.jpeg",
    },
    {
        title: "Wyposażenie6",
        description: "Lorem impsu i agarg ag r arha ahahahf",
        image: "/assets/category.jpeg",
    },
    {
        title: "Wyposażenie7",
        description: "Lorem impsu i agarg ag r arha ahahahf",
        image: "/assets/category.jpeg",
    },
];

function Offer() {
    const swiperRef = useRef(null);
    const [swiperProgres, setSwiperProgres] = useState(0);

    return (
        <section
            className="flex flex-col h-[80rem] sm:h-[65rem] items-center px-16 sm:px-6 mt-24 gap-28"
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
                        slidesPerView={2}
                        breakpoints={{
                            1000: {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },

                            1650: {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Virtual]}
                        ref={swiperRef}
                        onProgress={(swiper, progress) => {
                            setSwiperProgres(progress);
                        }}
                        className="sm:hidden block"
                    >
                        {categoriesInfo.map((data, idx) => (
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

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={"-20%"}
                        modules={[Virtual, FreeMode]}
                        onProgress={(swiper, progress) => {
                            setSwiperProgres(progress);
                        }}
                        freeMode={{ enabled: true, sticky: false }}
                        className="sm:block hidden"
                        centeredSlidesBounds={true}
                        edgeSwipeThreshold={10}
                    >
                        {categoriesInfo.map((data, idx) => (
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

                    <div className="w-full h-2 absolute -bottom-4 sm:h-1">
                        <div className="w-full h-full bg-80-gray overflow-hidden">
                            <div
                                className="h-full bg-primary-400 origin-left sm:bg-secondary-500"
                                style={{
                                    transform: `scaleX(${swiperProgres})`,
                                }}
                            />
                        </div>
                    </div>
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

            <div className="flex flex-col gap-10">
                <p className="text-center text-secondary-400 text-lg sm:text-base sm:text-black">
                    Ponadto, sklep oferuje&nbsp;
                    <span className="font-bold">konkurencyjne ceny</span> oraz
                    różnego rodzaju <br className="sm:hidden inline-block" />
                    <span className="font-bold">promocje i rabaty</span> dla
                    swoich klientów
                </p>

                <motion.button
                    className="hidden sm:block text-white bg-primary-400 self-center px-10 py-2 text-lg font-semibold rounded-3xl"
                    onClick={() => scrollTo("footer")}
                    whileTap={{ scale: 0.9 }}
                >
                    Kontakt
                </motion.button>
            </div>
        </section>
    );
}

export default Offer;
