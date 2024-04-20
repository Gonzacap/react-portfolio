import React, { useState } from "react";

// styles
import './styles.css';


function ExperienceCard({ id, enable, project, description, setCurrentId }) {

    return enable ? (
        <>
            <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                <div class="card-header">{project}</div>
                <div class="card-body">
                    <div class="accordion accordion-flush" id="">
                        <div class="accordion-item">
                            <p class="h2 accordion-header" id={`${id}-head-teach`}>
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#${id}-collapse-tech`}
                                    aria-expanded="false"
                                    aria-controls={`#${id}-collapse-tech`}
                                >
                                    Tecnologias
                                </button>
                            </p>
                            <div
                                id={`${id}-collapse-tech`}
                                class="accordion-collapse collapse"
                                aria-labelledby={`${id}-head-teach`}
                            >
                                <div class="accordion-body">{technologies}</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <p class="h2 accordion-header" id={`${id}-head-desc`}>
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#${id}-collapse-desc`}
                                    aria-expanded="false"
                                    aria-controls={`#${id}-collapse-desc`}
                                >
                                    Descripción
                                </button>
                            </p>
                            <div
                                id={`${id}-collapse-desc`}
                                class="accordion-collapse collapse"
                                aria-labelledby={`${id}-head-desc`}
                            >
                                <div class="accordion-body">{description}</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <p class="h2 accordion-header" id={`${id}-head-rol`}>
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#${id}-collapse-rol`}
                                    aria-expanded="false"
                                    aria-controls={`#${id}-collapse-rol`}
                                >
                                    Acordeón artículo #3
                                </button>
                            </p>
                            <div
                                id={`${id}-collapse-rol`}
                                class="accordion-collapse collapse"
                                aria-labelledby={`#${id}-head-rol`}
                            >
                                <div class="accordion-body">{rol}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : (<></>);
};

export default ExperienceCard;