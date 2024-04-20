import React, { useState, useEffect } from "react";
import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
// styles
import './styles.css';


function ExperienceCard({ id, status, project, technologies, description, rol, setCurrentId }) {

    useEffect(() => {
        const accordionElement = document.getElementById(`accordion-${id}`);
        const bsCollapse = new bootstrap.Collapse(accordionElement);

        return () => {
            bsCollapse.dispose();
        };
    }, [id]);

    return status ? (
        <>
            <div className="card text-white mb-3">
                <div className="card-header">Proyecto: {project}</div>
                <div className="card-body">
                    <div className="accordion accordion-flush" id={`accordion-${id}`}>
                        <div className="accordion-item">
                            <p className="h2 accordion-header" id={`head-teach-${id}`}>
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse-tech-${id}`}
                                    aria-expanded="false"
                                    aria-controls={`#collapse-tech-${id}`}
                                >
                                    Tecnologias
                                </button>
                            </p>
                            <div
                                id={`collapse-tech-${id}`}
                                className="accordion-collapse collapse"
                                aria-labelledby={`head-teach-${id}`}
                                data-bs-parent={`accordion-${id}`}
                            >
                                <div className="accordion-body">{technologies}</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <p className="h2 accordion-header" id={`head-desc-${id}`}>
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse-desc-${id}`}
                                    aria-expanded="false"
                                    aria-controls={`#collapse-desc-${id}`}
                                >
                                    Descripción
                                </button>
                            </p>
                            <div
                                id={`collapse-desc-${id}`}
                                className="accordion-collapse collapse"
                                aria-labelledby={`head-desc-${id}`}
                                data-bs-parent={`accordion-${id}`}
                            >
                                <div className="accordion-body">{description}</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <p className="h2 accordion-header" id={`head-rol-${id}`}>
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse-rol-${id}`}
                                    aria-expanded="false"
                                    aria-controls={`#collapse-rol-${id}`}
                                >
                                    Rol
                                </button>
                            </p>
                            <div
                                id={`collapse-rol-${id}`}
                                className="accordion-collapse collapse"
                                aria-labelledby={`#head-rol-${id}`}
                                data-bs-parent={`accordion-${id}`}
                            >
                                <div className="accordion-body">{rol}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : (<></>);
};

export default ExperienceCard;