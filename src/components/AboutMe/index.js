import React, {useState, useEffect} from "react"; 

function AboutMe() {

    return (
        <div className="row justify-content-center">

            <div className="col-10 col-sm-10 col-lg-6 bg-light rounded p-2 m-3">
                <div className="text-center" id="description">
                Hola! Soy Gonza.<br/>
                Soy desarrollador web Full-stack.<br/>
                Mi objetivo es seguir aprendiendo y creciendo
                profesionalmente, expandiendo mis habilidades en
                programación y resolución de problemas.
                </div>
            </div>
        </div>
    );
};

export default AboutMe;