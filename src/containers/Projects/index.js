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
            <div className="card_container" >
                Projects
                <div>
                { projects && Object.keys(projects).map((key) => 
                    <ProjectCard key={'projectCrad-'+key} props={{...projects[key]}} />
                )}
                </div>
            </div>
        </>
    );
};

export default Projects;