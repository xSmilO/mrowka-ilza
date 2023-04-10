import React from "react";
import { daysInfo } from "../utils/data";

function Day({ day, hours }) {
    return (
        <li className="flex justify-between items-center">
            <p className="font-semibold">{day}</p>
            <p className="font-thin">{hours}</p>
        </li>
    );
}

function Contact() {
    return (
        <div
            className="h-[70rem] lg:h-[50rem] sm:h-auto w-full flex items-center justify-center sm:items-start relative p-10 px-48 md:px-0 lg:px-0 xl:p-4 2xl:px-0 mt-10 rounded-b-[1.8rem] z-10 bg-gray-100 sm:translate-y-5"
            id="contact"
        >
            <div className="flex justify-between w-full px-16 lg:px-4 md:px-1 gap-5 h-[28rem] sm:hidden">
                <div className="bg-gray-200 p-16 md:p-10 lg:p-12 flex flex-col gap-6 w-[35%] flex-grow justify-center">
                    <h2 className="text-70-black text-3xl md:text-2xl font-bold">
                        Godziny otwarcia
                    </h2>

                    <ul className="flex flex-col gap-2 border-t-3 border-gray-border py-5">
                        {daysInfo.map((dayInfo, idx) => (
                            <Day
                                key={idx}
                                day={dayInfo.day}
                                hours={dayInfo.hours}
                            />
                        ))}
                    </ul>
                </div>
                <div className="w-1/2 flex flex-col justify-between gap-5">
                    <div className="bg-primary-400 flex flex-col justify-center md:items-center gap-6 p-20 md:p-4 lg:p-8 xl:p-10 w-full flex-grow-[2]">
                        <div className="flex items-center gap-6 ">
                            <h2 className="text-4xl font-bold text-80-black lg:text-3xl md:text-2xl">
                                Kontakt
                            </h2>
                            <div className="w-0.5 bg-gray-border h-4" />
                            <div className=" text-white lg:text-sm bg-secondary-300 p-2 px-4 rounded-3xl">
                                Napisz do nas!
                            </div>
                        </div>

                        <div className="flex lg:flex-col lg:gap-3 text-80-black justify-between w-[85%]">
                            <div className="flex items-center gap-5">
                                <div className="w-5 -translate-y-1/2">
                                    <img
                                        src="/assets/phone-black.svg"
                                        alt=""
                                        className="w-full h-full"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <h4 className="font-bold text-lg">
                                        Telefon
                                    </h4>
                                    <p>(0-00) 000 00 00</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-5">
                                <div className="w-5 -translate-y-1/2">
                                    <img
                                        src="/assets/mail-black.svg"
                                        alt=""
                                        className="w-full h-full"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <h4 className="font-bold text-lg">Email</h4>
                                    <p>miasto@psbmrowka.pl</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-white h-1/3 bg-secondary-300 flex items-center px-16 gap-4 xl:p-10">
                        <div className="-translate-y-1/2">
                            <img
                                src="/assets/location.svg"
                                alt=""
                                className="w-full"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="font-bold">ul. Nazwa ulicy 123</h4>
                            <p>27-100 Iłża</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile */}

            <div className="hidden sm:flex flex-col w-full gap-6 px-8">
                <h2 className="text-2xl font-bold ">Kontakt</h2>
                <div className="w-full h-1 bg-20-black rounded-3xl" />

                <div className="flex flex-col gap-8 justify-between mt-2">
                    <div className="flex gap-10">
                        <img
                            src="/assets/phone-black.svg"
                            className="h-full w-7"
                        />

                        <div>
                            <h4 className="font-bold">Telefon</h4>
                            <p>(0-00) 000 00 00</p>
                        </div>
                    </div>

                    <div className="flex gap-10">
                        <img
                            src="/assets/mail-black.svg"
                            className="h-full w-7"
                        />

                        <div>
                            <h4 className="font-bold">Email</h4>
                            <p>miasto@psbmrowka.pl</p>
                        </div>
                    </div>

                    <div className="flex gap-10 mt-10">
                        <img
                            src="/assets/location-black.svg"
                            className="h-full w-7"
                        />

                        <div>
                            <h4 className="font-semibold">
                                ul. Nazwa ulicy 123
                            </h4>
                            <p>27-100 Iłża</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
