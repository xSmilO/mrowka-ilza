import React from "react";
import CategoryItem from "./CategoryItem";

const categoriesInfo = [
    {
        title: "Wyposażenie",
        description: "Lorem impsu i agarg ag r arha ahahahf",
        image: "/assets/category.jpeg",
    },
    {
        title: "Wyposażenie",
        description: "Lorem impsu i agarg ag r arha ahahahf",
        image: "/assets/category.jpeg",
    },
    {
        title: "Wyposażenie",
        description: "Lorem impsu i agarg ag r arha ahahahf",
        image: "/assets/category.jpeg",
    },
];

function Categories() {
    return (
        <section className="flex flex-col min-h-[90vh] items-center px-16 mt-24 gap-28">
            <h2 className="relative text-secondary-300 text-4xl font-bold after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-3/4 after:bg-primary-400 after:h-1">
                Polecane kategorie
            </h2>

            <div className="flex items-center gap-10">
                <div className="w-10 h-10 bg-secondary-300 flex justify-center items-center rounded-full">
                    <img src="/assets/arrowLeft.svg" alt="left arrow" />
                </div>
                <div className="flex gap-12 ">
                    {categoriesInfo.map((data, idx) => (
                        <CategoryItem
                            title={data.title}
                            description={data.description}
                            image={data.image}
                            key={idx}
                        />
                    ))}
                </div>
                <div className="w-10 h-10 bg-secondary-300 flex justify-center items-center rounded-full">
                    <img src="/assets/arrowRight.svg" alt="right arrow" />
                </div>
            </div>
        </section>
    );
}

export default Categories;
