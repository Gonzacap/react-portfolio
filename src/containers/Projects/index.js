import React, { useState, useEffect } from "react";
import retrieveProjects from "../../api/retrieveProjects";
import addProjects from "../../api/addProjects";

// Components
import ProjectCard from "../../components/ProjectCard";
import EditForm from "../../components/EditForm";

// Context
import { useAuth } from "../../context/authContext";

// styles
import './styles.css';

function Projects() {

    const [projects, setProjects] = useState(null);
    const [currentId, setCurrentId] = useState(null);
    const { user } = useAuth();

    const initialStateValues = {
        appLink: '',
        codeLink: '',
        description: '',
        enable: false,
        id: null,
        image: '',
        title: '',
    };

    const [values, setValues] = useState(initialStateValues);

    const loadProjects = async () => {

        let res = await retrieveProjects();
        if (res) {
            setProjects(res);
        }
    }

    const addUpdate = async () => {
        try {
            await addProjects(values);
        } catch (error) {
            console.error(error);
        }

        setValues({ ...initialStateValues })
    };

    const cancelUpdate = () => {
        setCurrentId(null);
        setValues({ ...initialStateValues });
    };

    useEffect(() => {
        loadProjects();
    }, []);

    useEffect(() => {
        if (currentId) {
            setValues({ ...projects[currentId] });
        }
    }, [currentId]);

    return (
        <>
            <div className="row ">
                <div className="col-8 offset-2 text-center bg bg-light rounded py-2 my-2">
                    <h2>Proyectos</h2>
                </div>
            </div>
            {user?.uid && (
                <div className="row">
                    <div className="col-8 offset-2 text-center bg bg-light rounded py-2 my-2">
                        <EditForm {...{ addUpdate, cancelUpdate, currentId }} values={values} setValues={setValues} />
                    </div>
                </div>
            )}
            <div className="scroller">
                <div className="card-row row flex-nowrap flex-md-wrap mb-3">
                    {!projects && (
                        <div className="col-12 spinner-container">
                            <div className="spinner-border spinner-lg text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )}
                    {projects && Object.keys(projects).map((key) =>
                        <ProjectCard key={'projectCrad-' + key} {...projects[key]} edit={user?.uid} setCurrentId={setCurrentId} />
                    )}
                </div>
            </div>
        </>
    );
};

export default Projects;