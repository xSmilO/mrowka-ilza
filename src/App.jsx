import React from "react";
import Categories from "./components/Categories";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Offer from "./components/Offer";
import Contact from "./components/Contact";
import Location from "./components/Location";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
    return (
        <div className="bg-gray-100 font-body">
            <Nav />
            <Hero />
            <Categories />
            <Offer />
            <About />
            <Contact />
            <Location />
            <Footer />
        </div>
    );
}

export default App;

