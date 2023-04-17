import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function OfferItem({ title, description, image, placeholderImage }) {
    return (
        <div className="flex flex-col pointer-events-none bg-white  h-[30rem] sm:h-[25rem] mb-4 justify-between min-w-[14rem] sm:min-w-0 sm:max-w-[80%]">
            <div className="p-10 sm:p-5 sm:py-10 flex flex-col gap-4 h-[60%] sm:h-1/3 overflow-hidden">
                <h3 className="text-xl text-secondary-500 font-semibold sm:font-bold sm:max-w-[15rem]">
                    {title}
                </h3>
                <p className="text-secondary-400 text-base font-thin sm:hidden">
                    {description}
                </p>
            </div>

            <div className="h-[60%] sm:h-2/3 overflow-hidden object-cover">
                {/* <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                /> */}

                <LazyLoadImage
                    effect="blur"
                    src={image}
                    alt={title}
                    placeholderSrc={placeholderImage}
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}

export default OfferItem;
