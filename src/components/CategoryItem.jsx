import React from "react";

function CategoryItem({ title, description, image }) {
    return (
        <div className="flex flex-col  bg-white w-80 h-[30rem] justify-between">
            <div className="h-1/2 p-10 flex flex-col gap-4">
                <h3 className="text-xl text-secondary-500 font-semibold">
                    {title}
                </h3>
                <p className="text-secondary-400 text-base font-thin">
                    {description}
                </p>
            </div>

            <div className="h-1/2">
                <img src={image} alt="" className="w-full h-full" />
            </div>
        </div>
    );
}

export default CategoryItem;
