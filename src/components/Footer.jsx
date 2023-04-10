import React from "react";

const adresInfoStyle = "text-80-gray text-sm flex flex-col gap-1 ml-6";

const Social = ({ icon, altText }) => [
    <a href="#" className="h-full">
        <img src={icon} className="h-full block" alt={altText} />
    </a>,
];

function Footer() {
    return (
        <div
            className="h-[30rem] sm:h-[10rem] bg-secondary-400 border-t-[12px] sm:border-t-5 border-primary-400 relative text-white flex flex-col sm:justify-center justify-between items-center"
            id="footer"
        >
            <img
                src="/assets/icon.svg"
                alt=""
                className="w-16 lg:w-10 absolute top-0 left-20 xl:left-6 sm:hidden block"
            />

            <div className="flex w-full justify-evenly p-16 sm:hidden">
                <div className="flex flex-col gap-6  text-sm">
                    <h5 className="text-lg font-bold">Kontakt</h5>

                    <div className="flex gap-2 items-center">
                        <img
                            src="/assets/phone-white.svg"
                            className="opacity-80"
                        />
                        <p className="text-80-gray">(0-0) 000 00 00</p>
                    </div>

                    <div className="flex gap-2 items-center">
                        <img
                            src="/assets/mail-white.svg"
                            className="opacity-80"
                        />
                        <p className="text-80-gray">www.mrowkamiasto.com.pl</p>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <h5 className="text-lg font-bold">Adres</h5>

                    <div className={adresInfoStyle}>
                        <p className="relative">
                            <img
                                src="/assets/location-white.svg"
                                className="absolute top-0 -left-6"
                            />
                            ul. Nazwa ulicy 19
                        </p>
                        <p>27-100 Iłża</p>
                    </div>

                    <div className={adresInfoStyle}>
                        <p>NIP: 000-00-00-000</p>
                        <p>RHB: 0000</p>
                        <p>REGON: 000000000</p>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <h5 className="text-white text-lg font-bold">
                        Znajdziesz nas tutaj!
                    </h5>

                    <div className="flex justify-between items-center pr-5">
                        <a href="#">
                            <img src="/assets/fb.svg" alt="" />
                        </a>

                        <a href="#">
                            <img src="/assets/tw.svg" alt="" />
                        </a>

                        <a href="#">
                            <img src="/assets/linkedIn.svg" alt="" />
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
                <Social icon={"/assets/fb.svg"} altText={"facebook icon"} />
                <Social
                    icon={"/assets/linkedIn.svg"}
                    altText={"linkedIn icon"}
                />
                <Social icon={"/assets/tw.svg"} altText={"twitter icon"} />
            </div>

            <div className="text-center border-t-2 w-full border-secondary-300 p-8 sm:hidden block">
                <p className="text-50-gray text-sm">&copy; 2019 PSB Mrówka</p>
            </div>
        </div>
    );
}

export default Footer;
