import React from "react"; 

// styles
import './styles.css';

const Default_Image = "https://firebasestorage.googleapis.com/v0/b/portfolio-2cf5a.appspot.com/o/test-image.png?alt=media&token=8b9399cc-2f06-468e-b3d0-55114c66a3e1";

function ProjectCard({ id, enable, image, title, description, appLink, codeLink, edit, setCurrentId}) {

    return enable ? (
        <div className="col-12 col-sm-10 col-md-6 col-lg-4 col-xl-3 offset-sm-1 offset-md-0">
            <div className="card p-1 m-2">
                { edit && (<button onClick={ () => setCurrentId(id)} >Edit</button>
                )}
                <div className="card-img-container" >
                    <img 
                        src={image ? image : Default_Image } 
                        alt="" 
                        className="card-img-top img-fluid p-2" 
                        
                    />
                </div>
                <div className="card-body">
                    <h5 className="card-title">
                        {title}
                    </h5>
                    <p className="card-text text-justify">    
                        <span className={"collapse"+id} id={"more"+id}>
                            {description}
                        </span>
                        {/* <a className="read-more-link" data-bs-toggle={"collapse"+id} href={"#more"+id} aria-expanded="false" aria-controls={"more"+id} >... Ver Más</a> */}
                    </p>
                </div>
                <a href={appLink} className="btn btn-primary btn-md m-1" target="_blank" rel="noreferrer" disabled={!appLink} >
                    App
                </a>
                <a href={codeLink} className="btn btn-secondary btn-md m-1"  target="_blank" rel="noreferrer" disabled={!codeLink} >
                    Code
                </a>
                
            </div>
        </div>
    ) : (<></>);
};

export default ProjectCard;