import React from "react";
import "../index.css";

function Location() {
    return (
        <div className="w-full h-[40rem] sm:h-[24rem]">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10007.617242948516!2d21.2314508!3d51.1655535!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47186ddea007a791%3A0xb6ebef72b9fa5802!2zTXLDs3drYQ!5e0!3m2!1spl!2spl!4v1680775287565!5m2!1spl!2spl"
                height="100%"
                allowFullScreen="no"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
                className="w-full"
                id="map"
            ></iframe>
        </div>
    );
}

export default Location;
