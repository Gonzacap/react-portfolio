import React, { useState, useEffect} from "react";
import retrieveProjects from "../../api/retrieveProjects"; 

// containers
import ProjectCard from "../../components/ProjectCard";

// styles
import './styles.css';

function Projects() {

    const [projects, setProjects] = useState(null);

    const loadProjects = async () => {
        
        let res  = await retrieveProjects();
        if(res){
            setProjects(res);
        }  
    }
    
    useEffect(() => {
        loadProjects();
    }, []);

    return (
        <>
            <div className=" container" >
                <div className="row">
                    <div className="col-8 offset-2 text-center bg bg-light rounded">
                        <h2>Projects</h2>
                    </div>
                </div>
                <div className="row">
                    { projects && Object.keys(projects).map((key) =>
                        <ProjectCard key={'projectCrad-'+key} {...projects[key]} />
                    )}
                </div>
            </div>
        </>
    );
};

export default Projects;