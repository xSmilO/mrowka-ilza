import React from "react";
import { contact, links } from "../utils/data";

const adresInfoStyle = "";

const Social = ({ icon, altText, href }) => [
    <a href={href} className="h-full">
        <img src={icon} className="h-full block" alt={altText} />
    </a>,
];

function Footer() {
    return (
        <footer
            className="h-[30rem] sm:h-[10rem] bg-secondary-400 border-t-[12px] sm:border-t-5 border-primary-400 relative text-white flex flex-col sm:justify-center justify-between items-center"
            id="footer"
        >
            <img
                src="/assets/icon.svg"
                alt=""
                className="w-16 lg:w-10 absolute top-0 left-20 xl:left-6 sm:hidden block"
            />

            <div className="flex w-full justify-evenly p-16 sm:hidden">
                <div className="flex flex-col gap-5  text-sm">
                    <h5 className="text-lg font-bold">Kontakt</h5>

                    <div className="flex gap-2 items-center">
                        <img
                            src="/assets/phone-white.svg"
                            className="opacity-80 w-4"
                        />
                        <p className="text-80-gray">{contact.phone}</p>
                    </div>

                    <div className="flex gap-2 items-center">
                        <img
                            src="/assets/mail-white.svg"
                            className="opacity-80 w-4"
                        />
                        <p className="text-80-gray">{contact.mail}</p>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <h5 className="text-lg font-bold">Adres</h5>

                    <div className="text-80-gray text-sm flex flex-col gap-1 ml-6">
                        <p className="relative">
                            <img
                                src="/assets/location-white.svg"
                                className="absolute top-0 -left-6"
                            />
                            {contact.address}
                        </p>
                        <p>{contact.postalCode}</p>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <h5 className="text-white text-lg font-bold">
                        Znajdziesz nas tutaj!
                    </h5>

                    <div className="flex  items-center pr-5">
                        <a href={links.facebook} target="_blank">
                            <img src="/assets/fb.svg" alt="facebook" />
                        </a>
                    </div>
                </div>
            </div>

            {/* mobile */}

            <img
                src="/assets/logo2.svg"
                alt="logo"
                className="hidden sm:block absolute left-0 top-2 h-6"
            />

            <div className="hidden sm:flex gap-10 h-6">
                <Social
                    icon={"/assets/fb.svg"}
                    altText={"facebook icon"}
                    href="https://www.facebook.com/profile.php?id=100091955916230"
                />
            </div>

            <div className="text-center border-t-2 w-full border-secondary-300 p-8 sm:hidden block">
                <p className="text-50-gray text-sm">PSB Mrówka Iłża</p>
            </div>
        </footer>
    );
}

export default Footer;
