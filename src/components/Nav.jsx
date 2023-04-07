import { motion } from "framer-motion";
import React from "react";

const linkBarVariants = {
    unHovered: {
        scale: 0,
        opacity: 0,
    },
    hovered: {
        scale: 1,
        opacity: 1,
    },

    tapped: {
        scale: 0.5,
    },
};

const NavLink = ({ title, destination }) => {
    const scrollTo = (id) => {
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.li
            className="cursor-pointer relative"
            onClick={() => scrollTo(destination)}
            initial="unHovered"
            whileHover="hovered"
            whileTap="tapped"
            whileFocus="hovered"
        >
            <p>{title}</p>

            <motion.div
                className="w-full h-[2px] bg-primary-400 absolute"
                variants={linkBarVariants}
                transition={{
                    duration: 0.2,
                }}
            />
        </motion.li>
    );
};

function Nav() {
    return (
        <div className="flex justify-center items-center absolute top-0 w-full text-white p-7 border-b-2 border-20-white">
            <img
                src="/assets/icon.svg"
                alt=""
                className="absolute top-0 left-40 w-16 z-10"
            />
            <ul className="flex items-center gap-14 text-md">
                <NavLink title={"Oferta"} destination={"offer"} />
                <NavLink title={"O nas"} destination={"about"} />
                <NavLink title={"Kontakt"} destination={"contact"} />
            </ul>

            <motion.div
                className="bg-primary-400 fixed w-8 h-8 p-2 rounded-full cursor-pointer bottom-8 right-8 z-20"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "tween", duration: 0.1 }}
            >
                <img
                    src="/assets/arrowUp.svg"
                    alt=""
                    className="w-full h-full"
                />
            </motion.div>
        </div>
    );
}

export default Nav;
