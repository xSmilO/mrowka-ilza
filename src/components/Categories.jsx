import React, { useRef, useState } from "react";
import CategoryItem from "./CategoryItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual } from "swiper";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/virtual";

const categoriesInfo = [
    {
        title: "Wyposażenie1",
        description: "Lorem impsu i agarg ag r arha ahahahf",
        image: "/assets/category.jpeg",
    },
    {
        title: "Wyposażenie2",
        description: "Lorem impsu i agarg ag r arha ahahahf",
        image: "/assets/category.jpeg",
    },
    {
        title: "Wyposażenie3",
        description: "Lorem impsu i agarg ag r arha ahahahf",
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

function Categories() {
    const swiperRef = useRef(null);
    const [swiperProgres, setSwiperProgres] = useState(0);

    return (
        <section
            className="flex flex-col h-[80rem] items-center px-16 mt-24 gap-28"
            id="offer"
        >
            <h2 className="relative text-secondary-300 text-4xl font-bold border-b-5 border-primary-400 px-8 p-4">
                Oferujemy
            </h2>

            <div className="flex items-center justify-center w-full relative">
                <div className="w-[80%] relative">
                    <div
                        className="w-10 h-10 bg-secondary-300 flex justify-center items-center rounded-full absolute z-10 cursor-pointer left-0 top-1/2 -translate-y-1/2 -translate-x-1/2"
                        onClick={() => {
                            swiperRef.current.swiper.slidePrev();
                        }}
                    >
                        <img src="/assets/arrowLeft.svg" alt="left arrow" />
                    </div>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={4}
                        breakpoints={{
                            375: {
                                slidesPerView: 1,
                                spaceBetween: 50,
                            },

                            1000: {
                                slidesPerView: 3,
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
                    >
                        {categoriesInfo.map((data, idx) => (
                            <SwiperSlide key={idx}>
                                <CategoryItem
                                    title={data.title}
                                    description={data.description}
                                    image={data.image}
                                    key={idx}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="w-full h-2 absolute -bottom-4 ">
                        <div className="w-full h-full bg-80-gray overflow-hidden">
                            <div
                                className="h-full bg-primary-400 origin-left"
                                style={{
                                    transform: `scaleX(${swiperProgres})`,
                                }}
                            />
                        </div>
                    </div>
                    <div
                        className="w-10 h-10 bg-secondary-300 flex justify-center items-center rounded-full absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 z-10 cursor-pointer"
                        onClick={() => {
                            swiperRef.current.swiper.slideNext();
                        }}
                    >
                        <img src="/assets/arrowRight.svg" alt="right arrow" />
                    </div>
                </div>
            </div>

            <p className="text-center text-secondary-400 text-lg">
                Ponadto, sklep oferuje&nbsp;
                <span className="font-bold">konkurencyjne ceny</span> oraz
                różnego rodzaju <br />
                <span className="font-bold">promocje i rabaty</span> dla swoich
                klientów
            </p>
        </section>
    );
}

export default Categories;
