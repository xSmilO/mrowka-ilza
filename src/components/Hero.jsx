import React from "react";

function Hero() {
    return (
        <div className="bg-hero min-h-[70rem] w-full bg-no-repeat bg-cover flex justify-center items-center">
            <h1 className="uppercase bg-primary-400 text-5xl font-bold py-12 px-32 tracking-wid text-white flex gap-10">
                <span>DOM</span>
                <span>WNĘTRZE</span>
                <span>OGRÓD</span>
            </h1>
        </div>
    );
}

export default Hero;
