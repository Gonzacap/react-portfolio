import React, { useState, useEffect } from "react";
import retrieveExperiences from "../../api/retrieveExperiences";
import addExperiences from "../../api/addExperiences";

// Components
import ExperienceCard from "../../components/ExperienceCard";
import ExperienceForm from "../../components/ExperienceForm";

// Context
import { useAuth } from "../../context/authContext";

// styles
import './styles.css';

function Experiences() {

    const [experiences, setExperiences] = useState(null);
    const [currentId, setCurrentId] = useState(null);
    const { user } = useAuth();

    const initialStateValues = {
        id: null,
        project: '',
        technologies: '',
        description: '',
        rol: '',
        status: true,
    };

    const [values, setValues] = useState(initialStateValues);

    const loadExperiences = async () => {

        let res = await retrieveExperiences();

        if (res) {
            setExperiences(res);
        }
    }

    const addUpdate = async () => {
        try {
            await addExperiences(values);
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
        loadExperiences();
    }, []);

    useEffect(() => {
        if (currentId) {
            setValues({ ...experiences[currentId] });
        }
    }, [currentId]);

    return (
        <>
            <div className="row ">
                <div className="col-8 offset-2 text-center bg bg-light rounded py-2 my-2">
                    <h2>Experiencias Laborales</h2>
                </div>
            </div>
            {user?.uid && (
                <div className="row">
                    <div className="col-8 offset-2 text-center bg bg-light rounded py-2 my-2">
                        <ExperienceForm {...{ addUpdate, cancelUpdate, exp: values, setExperience: setValues }} />
                    </div>
                </div>
            )}
            <div className="row my-4">
                {!experiences && (
                    <div className="col-12 spinner-container">
                        <div className="spinner-border spinner-lg text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}
                {experiences && Object.keys(experiences).map((key) =>
                    <div key={'experienceCrad-' + key + '-col'} className="col-12 col-lg-6">
                        <ExperienceCard key={'experienceCrad-' + key} {...experiences[key]} />
                    </div>
                )}
            </div>
        </>
    );
};

export default Experiences;