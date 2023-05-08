import React, {} from "react"; 
// Containers
import Projects from '../Projects';
// eslint-disable-next-line no-unused-vars
import Technologies from '../Technologies';
// Components
import AboutMe from '../../components/AboutMe';
import Contact from '../../components/Contact';
// import PresentationImage from '../../components/PresentationImage';
// UI
import Divider from '../../components/ui/Divider';
// Contex
import { useAuth } from '../../context/authContext';


function Main() {

    const { user } = useAuth();

    return (
        <main id="main" className="container">
            {/* <PresentationImage /> */}
            <AboutMe />
            <Divider />
            <Projects />       
            <Divider />
            {/* <Technologies /> */}
            <Divider />
            <Contact />
        </main>
    );
};

export default Main;