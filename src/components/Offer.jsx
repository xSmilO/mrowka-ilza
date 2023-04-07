import React from "react";

function Offer() {
    return (
        <div className="h-[50rem] bg-offer bg-cover relative ">
            <div className="bg-secondary-300 absolute w-[50%] text-white p-20 flex flex-col gap-10 -top-32 left-44">
                <h2 className="text-4xl font-bold max-w-[20ch] leading-snug">
                    Mrówka, przyjaciółka Twojego domu!
                </h2>
                <p className="max-w-[50ch] font-thin">
                    PSB Mrówka Iłża to nowoczesny market z sieci PSB Mrówka
                    należącej do sektora dom i ogród. Oferujemy materiały
                    budowlane, remontowe i wykończeniowe czy akcesoria do
                    urządzenia domu bez względu na etap inwestycji. 
                </p>
            </div>
        </div>
    );
}

export default Offer;
