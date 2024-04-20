import React, { useState, useEffect } from "react";

// Components
import ExperienceCard from "../../components/ExperienceCard";

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

        let mock = {
            id: "123",
            project: "Sistema de Gestión de Producción",
            technologies: "react, redux, semantic-ui, cypress, node, websockets, jquery, postman, propel, mysql, symphony, micro servicios",
            description: "Era un sistema de gestion de produccion para una fabrica metalmecanica, el mismo estaba compuestos un gran sistema legacy en php el cual contenia el admin dashboard y la db de la aplicacion; un cliente en react; y un middleware en node que cumplia la funcion un servicio de sincronización de datos en tiempo real.",
            rol: "asdasdads",
            status: true,
        }

        let res = [mock]; // await retrieveExperiences();
        if (res) {
            setExperiences(res);
        }
    }

    const addUpdate = async (currentId) => {
        /* try {
            if (!values.id) {
                console.log('agregar');
                const aux = await addExperiences(values);
                console.log('aux', aux);
            } else {
                console.log('editar');
            }
        } catch (error) {
            console.error(error);
        } */

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
                    <h2>Experiences</h2>
                </div>
            </div>
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
                        <ExperienceCard key={'experienceCrad-' + key} {...experiences[key]} setCurrentId={setCurrentId} />
                    </div>
                )}
            </div>
        </>
    );
};

export default Experiences;