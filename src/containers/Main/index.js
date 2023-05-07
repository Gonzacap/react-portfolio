import React, {} from "react"; 
// Containers
import Projects from '../Projects';
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

    const auth = useAuth();
    console.log('auth', auth);

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