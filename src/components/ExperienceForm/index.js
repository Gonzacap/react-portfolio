import React from "react";

const ExperienceForm = ({ addUpdate, cancelUpdate, exp, setExperience }) => {

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setExperience({ ...exp, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addUpdate(exp);
    };

    const handleCancel = (e) => {
        e.preventDefault();
        cancelUpdate();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3 className="h3">{exp.id ? "Update Experience" : "Add Experience"}</h3>
            <div className="form-group input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Project"
                    value={exp.project}
                    name="project"
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="form-group input-group">
                <textarea
                    rows="3"
                    value={exp.technologies}
                    name="technologies"
                    placeholder="Technologies"
                    className="form-control"
                    onChange={handleInputChange}
                ></textarea>
            </div>
            <div className="form-group input-group">
                <textarea
                    rows="3"
                    value={exp.description}
                    name="description"
                    placeholder="Description"
                    className="form-control"
                    onChange={handleInputChange}
                ></textarea>
            </div>
            <div className="form-group input-group">
                <textarea
                    rows="3"
                    value={exp.rol}
                    name="rol"
                    placeholder="Rol"
                    className="form-control"
                    onChange={handleInputChange}
                ></textarea>
            </div>
            <div className="form-group form-check">
                <input
                    type="checkbox"
                    value={exp?.status ? true : false}
                    name="status"
                    placeholder="status"
                    className="form-check-input"
                    onChange={handleInputChange}
                />
                <label className="form-check-label" >Enable</label>
            </div>
            <button className="btn btn-primary btn-block">
                {exp.id ? "Update" : "Add"}
            </button>
            {exp.id && (
                <button
                    className="btn btn-secondary btn-block"
                    onClick={handleCancel}
                >
                    Cancel
                </button>
            )}
        </form>
    );
};

export default ExperienceForm;