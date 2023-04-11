import React from "react";
import { scrollTo } from "../utils";

function Info() {
    return (
        <section className="h-[50rem] sm:h-auto bg-offer sm:bg-none bg-cover relative sm:block">
            <div className="bg-secondary-300 absolute md:w-[90%] lg:w-[80%] xl:w-[70%] text-white p-20 flex flex-col gap-8 -top-32 left-44 md:left-5 xl:left-10 sm:hidden">
                <h2 className="text-4xl font-bold max-w-[20ch] leading-snug">
                    Mrówka, przyjaciółka Twojego domu!
                </h2>
                <p className="max-w-[70ch] xl:max-w-[50ch] leading-7">
                    <span className="font-bold">PSB Mrówka Iłża</span>&nbsp;to
                    nowoczesny market z sieci PSB Mrówka należącej do sektora
                    dom i ogród. Oferujemy materiały budowlane, remontowe i
                    wykończeniowe czy akcesoria do urządzenia domu bez względu
                    na etap inwestycji. 
                </p>

                <button
                    className="bg-white text-secondary-300 rounded-3xl px-5 py-2 font-semibold self-start hover:scale-105 transition-all mt-5"
                    onClick={() => scrollTo("contact")}
                >
                    Skontaktuj się z nami!
                </button>
            </div>

            {/* mobile */}
            <div className="hidden sm:block bg-secondary-300 py-10 text-center text-white text-lg font-bold">
                Mrówka, przyjaciółka Twojego domu!
            </div>
        </section>
    );
}

export default Info;
