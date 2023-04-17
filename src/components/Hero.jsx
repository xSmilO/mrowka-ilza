import React from "react";

function Hero() {
    return (
        <section className="h-[70rem] sm:h-[40rem] w-full bg-no-repeat bg-cover flex justify-center items-center sm:items-end sm:p-5 sm:py-10 sm:justify-start bg-[50%_50%] font-poppins bg-secondary-500">
            <h1 className="uppercase bg-primary-400 text-5xl lg:text-4xl font-bold py-12 px-32 md:px-16 tracking-wid text-white flex gap-10 sm:hidden z-[1]">
                <span>DOM</span>
                <span>WNĘTRZE</span>
                <span>OGRÓD</span>
            </h1>

            <video
                className="absolute top-0 left-0 w-full h-[70rem] sm:h-[40rem] object-cover"
                autoPlay
                muted
                loop
            >
                <source
                    src="/assets/hero.mp4"
                    type="video/mp4"
                    className="w-full h-full"
                />
            </video>
            {/* mobile */}

            <h1 className="text-6xl gap-2 z-[1] text-white font-bold sm:flex hidden flex-col ">
                <span>DOM</span>
                <span>WNĘTRZE</span>
                <span className="mt-2">OGRÓD</span>
            </h1>
        </section>
    );
}

export default Hero;
