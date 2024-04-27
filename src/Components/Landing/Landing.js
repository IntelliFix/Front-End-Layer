import React from "react";
import { Banner } from "./Banner/Banner";
import { Skills } from "./Skills/Skills";
import { Pricings } from "./Pricing/Pricing";
import { Contact } from "./Contact/Contact";
import { Footer } from "./Footer/Footer";


export const Landing = () => {
    return (
        <div>
            <Banner />
            <Skills />
            <Pricings />
            <Contact />
            <Footer />
        </div>
    );
}