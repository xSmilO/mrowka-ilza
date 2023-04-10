import React, { useState } from "react";

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
        <li className="flex justify-between items-center text-base">
            <p className="font-semibold text-70-black">{day}</p>
            <p className="font-light">{hours}</p>
        </li>
    );
}

function About() {
    const [openAbout, setOpenAbout] = useState(false);
    const [openHours, setOpenHours] = useState(false);

    return (
        <div
            className="h-[45rem] lg:h-[60rem] justify-center items-center border-primary-400 border-b-10 sm:border-none flex sm:h-auto sm:px-8 sm:flex-col"
            id="about"
        >
            <div className="flex justify-evenly w-[80%] lg:w-[95%] xl:w-[90%] md:w-[90%] gap-10 lg:gap-4 md:gap-2 sm:hidden">
                <h2 className="font-bold text-6xl xl:text-5xl -translate-y-5 xl:-translate-y-3 text-secondary-300">
                    O nas
                </h2>
                <div className="w-48 md:w-32 h-1 bg-primary-400 translate-y-3" />

                <div className="flex flex-col gap-8 w-1/2 font-light text-80-black text-lg">
                    <p className="leading-8">
                        <span className="font-bold">PSB Mrówka Iłża</span>
                        &nbsp;to nowoczesny market z sieci PSB Mrówka należącej
                        do sektora dom i ogród.&nbsp;
                        <span className="font-bold">Oferujemy</span> materiały
                        budowlane, remontowe i wykończeniowe czy akcesoria do
                        urządzenia domu bez względu na etap inwestycji. 
                    </p>
                    <p className="leading-8">
                        Klienci, którzy odwiedzą sklep Mrówka Iłża, znajdą tam
                        również szeroki wybór materiałów wykończeniowych, takich
                        jak płytki ceramiczne, panele podłogowe, dekoracje
                        ścienne, armatury łazienkowe i wiele innych produktów.
                        Sklep oferuje także bogaty wybór narzędzi ogrodniczych,
                        takich jak kosiarki, podkaszarki, nożyce do żywopłotów,
                        a także narzędzia do pielęgnacji roślin.
                    </p>
                </div>
            </div>

            {/* mobile  */}
            <div className="w-full hidden sm:flex flex-col gap-10 overflow-hidden">
                <div
                    className="flex justify-between border-b-2 border-black py-8 items-center transition-all duration-75"
                    style={{
                        borderColor: openAbout
                            ? "black"
                            : "rgba(31, 26, 23, 0.1)",
                    }}
                >
                    <h2 className="text-xl font-bold">O nas</h2>
                    <button
                        className="h-5 w-5 cursor-pointer transition-all duration-75"
                        style={{
                            transform: openAbout
                                ? "rotate(0)"
                                : "rotate(180deg)",
                        }}
                        onClick={() => setOpenAbout(!openAbout)}
                    >
                        <img
                            src="/assets/arrowUp.svg"
                            className="w-full h-full"
                        />
                    </button>
                </div>

                <section
                    className="flex-col gap-5 text-sm overflow-hidden duration-100"
                    style={{
                        display: openAbout ? "flex" : "none",
                    }}
                >
                    <p className="leading-7">
                        <span className="font-bold">PSB Mrówka Iłża</span>
                        &nbsp;zatrudnia <br /> wykwalifikowaną obsługę, która
                        chętnie służy pomocą w doborze odpowiednich materiałów i
                        narzędzi oraz udzieli fachowej porady. Kładziemy duży
                        nacisk na jakość obsługi, zapewniając szybką i sprawną
                        obsługę, a także profesjonalne podejście do każdego
                        klienta.
                    </p>
                    <p className="leading-7">
                        Klienci, którzy odwiedzą sklep Mrówka Iłża, znajdą tam
                        również <span className="font-bold">szeroki</span>
                        &nbsp;wybór materiałów wykończeniowych, takich jak
                        płytki ceramiczne, panele podłogowe, dekoracje ścienne,
                        armatury łazienkowe i wiele innych produktów. Sklep
                        oferuje także bogaty wybór narzędzi ogrodniczych, takich
                        jak kosiarki, podkaszarki, nożyce do żywopłotów, a także
                        narzędzia do pielęgnacji roślin.
                    </p>
                </section>
            </div>

            <div className="w-full hidden sm:flex flex-col gap-10 overflow-hidden">
                <div
                    className="flex justify-between border-b-2 border-black py-8 items-center transition-all duration-75"
                    style={{
                        borderColor: openHours
                            ? "black"
                            : "rgba(31, 26, 23, 0.1)",
                    }}
                >
                    <h2 className="text-xl font-bold">Godziny otwarcia</h2>
                    <button
                        className="h-5 w-5 cursor-pointer transition-all duration-75"
                        style={{
                            transform: openHours
                                ? "rotate(0)"
                                : "rotate(180deg)",
                        }}
                        onClick={() => setOpenHours(!openHours)}
                    >
                        <img
                            src="/assets/arrowUp.svg"
                            className="w-full h-full"
                        />
                    </button>
                </div>

                <section
                    className="flex-col gap-5 text-sm overflow-hidden duration-100"
                    style={{
                        display: openHours ? "flex" : "none",
                    }}
                >
                    <ul className="flex flex-col gap-2">
                        {daysInfo.map((day, idx) => (
                            <Day day={day.day} hours={day.hours} key={idx} />
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default About;
