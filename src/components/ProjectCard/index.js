import React, {useState} from "react"; 

// styles
import './styles.css';

const Default_Image = "https://firebasestorage.googleapis.com/v0/b/portfolio-2cf5a.appspot.com/o/test-image.png?alt=media&token=8b9399cc-2f06-468e-b3d0-55114c66a3e1";

function ProjectCard({ id, enable, image, title, description, appLink, codeLink, edit, setCurrentId}) {

    const appLinkValid = appLink && appLink !== '';
    const codeLinkValid = codeLink && codeLink !== '';

    const [expanded, setExpanded] = useState(false);
    
    const maxLength = 100;
    const shortDescription = description.length > maxLength ? description.substring(0, maxLength - 10) + '...' : description;
  
    const toggleExpanded = () => setExpanded(!expanded);

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
                <div className={expanded ? "card-body card-h expanded" : "card-body card-h"}>
                    <h5 className="card-title">
                        {title}
                    </h5>
                    <div className={expanded ? "card-text expanded" : "card-text"}>
                        <p className="text-justify">    
                            {expanded ? description : shortDescription}
                            {description.length > maxLength && (
                                <button onClick={toggleExpanded} className="btn btn-link p-0">
                                    {expanded ? 'Ver menos' : 'Ver más'}
                                </button>
                            )}
                        </p>
                    </div>
                </div>
                <a href={appLinkValid ? appLink : ''} className={"btn " + ( appLinkValid ? 'btn-primary' : 'btn-danger disabled' ) + " btn-md m-1 "} target="_blank" rel="noreferrer" >
                    App
                </a>
                <a href={codeLinkValid ? codeLink : ''} className={"btn " + ( codeLinkValid ? 'btn-secondary' : 'btn-danger disabled' ) + " btn-md m-1"}  target="_blank" rel="noreferrer" >
                    Code
                </a>
                
            </div>
        </div>
    ) : (<></>);
};

export default ProjectCard;