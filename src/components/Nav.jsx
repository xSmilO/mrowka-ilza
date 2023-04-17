import { motion } from "framer-motion";
import React, { useState } from "react";
import { scrollTo } from "../utils/index";

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

const NavLinkDesktop = ({ title, destination, offset = 0 }) => {
    return (
        <motion.li
            className="cursor-pointer relative self-start"
            onClick={() => scrollTo(destination, offset)}
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

const NavLinkMobile = ({ title, destination, offset = 0, setMenuOpen }) => {
    return (
        <motion.li
            className="cursor-pointer relative self-start"
            onClick={() => {
                scrollTo(destination, offset);
                setMenuOpen(false);
            }}
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
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="flex justify-center items-center sm:justify-end absolute top-0 w-full text-white p-7 border-b-2 sm:border-0 border-20-white z-[2]">
            <img
                src="/assets/icon.svg"
                alt=""
                className="absolute top-0 left-40 lg:left-10 w-16 sm:w-14 z-50 sm:left-5 sm:fixed"
            />
            <ul className="flex items-center gap-14 text-md sm:hidden">
                <NavLinkDesktop
                    title={"Oferta"}
                    destination={"offer"}
                    offset={100}
                />
                <NavLinkDesktop
                    title={"O nas"}
                    destination={"about"}
                    offset={180}
                />
                <NavLinkDesktop title={"Kontakt"} destination={"contact"} />
            </ul>

            {/* mobile */}
            <div
                className="hidden sm:block cursor-pointer z-30 right-5 top-8"
                onClick={() => setMenuOpen(!menuOpen)}
                style={{ position: menuOpen ? "fixed" : "absolute" }}
            >
                <img
                    src={
                        menuOpen
                            ? "/assets/menuClose.svg"
                            : "/assets/menuOpen.svg"
                    }
                    className="w-full h-full"
                />
            </div>

            <ul
                className=" w-[70%] h-screen bg-white fixed top-0 right-0 text-secondary-400 flex flex-col justify-center p-10 text-3xl font-bold gap-10 transition-all z-20"
                style={{
                    transform: menuOpen ? "translateX(0)" : "translateX(100%)",
                }}
            >
                <NavLinkMobile
                    destination={"offer"}
                    title={"Oferta"}
                    setMenuOpen={setMenuOpen}
                />
                <NavLinkMobile
                    destination={"about"}
                    title={"O nas"}
                    setMenuOpen={setMenuOpen}
                />
                <NavLinkMobile
                    destination={"contact"}
                    offset={80}
                    title={"Kontakt"}
                    setMenuOpen={setMenuOpen}
                />
            </ul>

            <motion.div
                className="bg-primary-400 fixed w-8 h-8 p-2 rounded-full cursor-pointer bottom-8 right-8 z-20 sm:hidden"
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
        </nav>
    );
}

export default Nav;
