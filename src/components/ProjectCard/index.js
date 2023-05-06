import React from "react"; 

function ProjectCard({ image, title, description, appLink, codeLink}) {

    return (
        <div className="col-4">
            <div className="card p-1 m-2">
                <img src={image} alt="" className="card-img-top img-fluid p-2" />
                <h5 className="card-title p-1">
                    {title}
                </h5>
                <p className="card-text text-justify p-2">
                    {description}
                </p>
                <a href={appLink} className="btn btn-primary btn-md m-1" target="_blank" rel="noreferrer" disabled={!appLink} >
                    App
                </a>
                <a href={codeLink} className="btn btn-secondary btn-md m-1"  target="_blank" rel="noreferrer" disabled={!codeLink} >
                    Code
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;