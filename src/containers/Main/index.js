import React, {useState, useEffect} from "react"; 

// Containers
import Projects from '../Projects';
import Technologies from '../Technologies';
// Components
import AboutMe from '../../components/AboutMe';
import Contact from '../../components/Contact';
import PresentationImage from '../../components/PresentationImage';
// uI
import Divider from '../../components/ui/Divider';

function Main() {

    return (
        <main className="container">
            {/* <PresentationImage /> */}
            <AboutMe />
            <Divider />
            <Projects />       
            <Divider />
            <Technologies />
            <Divider />
            <Contact />
        </main>
    );
};

export default Main;