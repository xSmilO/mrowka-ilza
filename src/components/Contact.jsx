import { motion } from "framer-motion";
import React from "react";

const daysInfo = [
    {
        day: "Poniedziałek",
        hours: "7.00-21.00",
    },
    {
        day: "Wtorek",
        hours: "7.00-21.00",
    },
    {
        day: "Środa",
        hours: "7.00-21.00",
    },
    {
        day: "Czwartek",
        hours: "7.00-21.00",
    },
    {
        day: "Piątek",
        hours: "7.00-21.00",
    },
    {
        day: "Sobota",
        hours: "7.00-21.00",
    },
    {
        day: "Niedziela",
        hours: "9.00-20.00",
    },
];
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
            className="h-[70rem] w-full flex items-center justify-center relative p-10"
            id="contact"
        >
            <div className="flex justify-between w-full px-16 gap-5 h-[28rem]">
                <div className="bg-gray-200 p-16 flex flex-col gap-6 w-[35%] flex-grow justify-center">
                    <h2 className="text-70-black text-3xl font-bold">
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
                    <div className="bg-primary-400 flex flex-col gap-6 p-20 w-full flex-grow-[2]">
                        <div className="flex items-center gap-6 ">
                            <h2 className="text-4xl font-bold text-80-black">
                                Kontakt
                            </h2>
                            <div className="w-0.5 bg-gray-border h-4" />
                            <div className=" text-white bg-secondary-400 p-2 px-4 rounded-3xl">
                                Napisz do nas!
                            </div>
                        </div>

                        <div className="flex text-80-black justify-between w-[85%]">
                            <div className="flex items-center gap-3">
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

                    <div className="text-white h-1/3 bg-secondary-300 flex items-center px-16 gap-4">
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

            {/* <div
                className="bg-primary-400 absolute p-2 text-black bottom-16 right-16 rounded-full cursor-pointer"
                onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }}
            >
                <img src="/assets/arrowUp.svg" className="w-4 h-4" />
            </div> */}
        </div>
    );
}

export default Contact;
