import React from "react";

function OfferItem({ title, description, image }) {
    return (
        <div className="flex flex-col pointer-events-none bg-white  h-[30rem] mb-4 justify-between min-w-[14rem] sm:min-w-0 sm:max-w-[80%]">
            <div className="h-1/2 p-10 sm:p-5 sm:py-10 flex flex-col gap-4">
                <h3 className="text-xl text-secondary-500 font-semibold sm:font-bold sm:max-w-[15rem]">
                    {title}
                </h3>
                <p className="text-secondary-400 text-base font-thin sm:hidden">
                    {description}
                </p>
            </div>

            <div className="h-1/2 sm:h-2/3">
                <img src={image} alt="" className="w-full h-full" />
            </div>
        </div>
    );
}

export default OfferItem;
