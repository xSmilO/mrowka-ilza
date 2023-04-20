import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

function ScrollUp() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            if (window.scrollY > 600 && showButton == false) {
                setShowButton(true);
            }

            if (window.scrollY < 600 && showButton == true) {
                setShowButton(false);
            }
        });
    });

    return (
        <motion.div
            className={
                showButton
                    ? "bg-primary-400 fixed w-8 h-8 p-2 rounded-full cursor-pointer bottom-8 right-8 z-20 transition-[opacity] opacity-100 duration-300"
                    : "bg-primary-400 fixed w-8 h-8 p-2 rounded-full cursor-pointer bottom-8 right-8 z-20 transition-[opacity] opacity-0 pointer-events-none duration-300"
            }
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "tween", duration: 0.1 }}
        >
            <img src="/assets/arrowUp.svg" alt="" className="w-full h-full" />
        </motion.div>
    );
}

export default ScrollUp;
