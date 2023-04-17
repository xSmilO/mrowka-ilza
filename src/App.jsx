import React from "react";
import Offer from "./components/Offer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Info from "./components/Info";
import Contact from "./components/Contact";
import Location from "./components/Location";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
    return (
        <div className="bg-gray-100 font-body sm:overflow-y-hidden">
            <Nav />
            <Hero />
            <Offer />
            <Info />
            <About />
            <Contact />
            <Location />
            <Footer />
            
        </div>
    );
}

export default App;

