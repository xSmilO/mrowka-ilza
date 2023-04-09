import React from "react";

function Hero() {
    return (
        <div className="bg-hero h-[70rem] sm:h-[40rem] w-full bg-no-repeat bg-cover flex justify-center items-center sm:items-end sm:p-5 sm:py-10 sm:justify-start bg-[50%_50%]">
            <h1 className="uppercase bg-primary-400 text-5xl md:text-4xl font-bold py-12 px-32 md:px-16 tracking-wid text-white flex gap-10 sm:hidden">
                <span>DOM</span>
                <span>WNĘTRZE</span>
                <span>OGRÓD</span>
            </h1>

            {/* mobile */}
            <h1 className="text-6xl text-white font-bold trace sm:block hidden leading-normal">
                DOM <br />
                WNĘTRZE <br />
                OGRÓD
            </h1>
        </div>
    );
}

export default Hero;
