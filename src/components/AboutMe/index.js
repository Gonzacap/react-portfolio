import React, {useState, useEffect} from "react"; 

function AboutMe() {

    return (
        <div className="row justify-content-center">

            <div className="container col-lg-8 bg-light rounded-lg p-2 m-3">
                <div className="text-center" id="description">
                Hola! Soy Gonza, estudiante de la carrera de
                Ingeniería en sistemas de Información<br/>
                Soy un programador autodidacta y proactivo.<br/>
                Mi objetivo es ganar experiencia aplicando y
                expandiendo mis conocimientos.
                </div>
            </div>
        </div>
    );
};

export default AboutMe;