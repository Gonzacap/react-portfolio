import React from "react"; 

function ProjectCard(props) {

    console.log('props', props);

    return (

            <div className="card p-1 m-2">
                <img src={props.image} alt="" className="card-img-top img-fluid p-2" />
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text text-justify p-2">{props.description}
                </p>
                <a href={props.appLink} className="btn btn-primary btn-md m-1" target="_blank" rel="noreferrer" disabled={!props.appLink} >
                    App
                </a>
                <a href={props.codeLink} className="btn btn-secondary btn-md m-1"  target="_blank" rel="noreferrer" disabled={!props.codeLink} >
                    Code
                </a>
            </div>
    );
};

export default ProjectCard;