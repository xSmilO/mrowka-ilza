import React from "react";

function About() {
    return (
        <div
            className="h-[45rem] justify-center items-center border-primary-400 border-b-10 flex"
            id="about"
        >
            <div className="flex justify-evenly w-[80%] gap-10">
                <h2 className="font-bold text-7xl  w-auto -translate-y-7">
                    O nas
                </h2>
                <div className="w-48 h-1 bg-primary-400 translate-y-3" />

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
        </div>
    );
}

export default About;
