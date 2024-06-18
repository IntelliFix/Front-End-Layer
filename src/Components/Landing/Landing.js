import React from "react";
import { Banner } from "./Banner/Banner";
import { Skills } from "./Skills/Skills";
import { Team } from "./Team/Team";
import { Contact } from "./Contact/Contact";
import { Footer } from "./Footer/Footer";


export const Landing = () => {
    return (
        <div>
            <Banner />
            <Skills />
            <Team />
            <Contact />
            <Footer />
        </div>
    );
}