import React, {useState, useEffect} from "react";
import ProjectCard from "components/ProjectCard"; 

function Projects() {

    const proj = [];

    const p = {
        img:"img/img-12.jpg",
        title:"Alas EJ Web",
        description:"Como mienbro de Alas Empresa Junior participe en el desarrollo y mantenimiento de la página web. La misma esta realizada en WordpPress, Elementor y utiliza un SSL de Cloudflare", 
        appLink:"https://alasempresajunior.com.ar",
        codeLink:""
    };

    proj.push(p);

    return (
        <>
            <div className="sep" id="sep-title">
                Projects
                <div>
                { proj && proj.map((p, i) => 
                    <ProjectCard key={'projectCrad-'+i} props={{...p}} />
                )}
                </div>
            </div>
        </>
    );
};

export default Projects;