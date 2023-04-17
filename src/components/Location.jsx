import React from "react";
import "../index.css";

function Location() {
    return (
        <section className="w-full h-[40rem] sm:h-[24rem]">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2501.8759719928316!2d21.228024676973245!3d51.16607593558032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47186bf6194404d9%3A0xe82138a896078228!2zQmF0YWxpb27Ds3cgQ2jFgm9wc2tpY2ggNCwgMjctMTAwIEnFgsW8YQ!5e0!3m2!1spl!2spl!4v1681573041825!5m2!1spl!2spl"
                height="100%"
                allowFullScreen="no"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
                className="w-full"
                id="map"
            ></iframe>
        </section>
    );
}

export default Location;
