import React from "react";

const EditForm = ( { addUpdate, cancelUpdate, currentId, values, setValues } ) => {

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addUpdate(values);
    };

    const handleCancel = (e) => {
        e.preventDefault();
        cancelUpdate();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3 className="h3">{currentId ? "Update Project" : "Add Project" }</h3>
            <div className="form-group input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    value={values.title}
                    name="title"
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="form-group input-group">
                <input
                    type="text"
                    value={values.image}
                    name="imgage"
                    placeholder="Image URL"
                    className="form-control"
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <textarea
                    rows="3"
                    className="form-control"
                    placeholder="Add a Description"
                    name="description"
                    value={values.description}
                    onChange={handleInputChange}
                ></textarea>
            </div>
            <div className="form-group input-group">
                <input
                    type="text"
                    value={values.appLink}
                    name="appLink"
                    placeholder="App Link"
                    className="form-control"
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group input-group">
                <input
                    type="text"
                    value={values.codeLink}
                    name="codeLink"
                    placeholder="Code Link"
                    className="form-control"
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group form-check">
                <input
                    type="checkbox"
                    value={values?.enable ? true : false}
                    name="enable"
                    placeholder="Enable"
                    className="form-check-input"
                    onChange={handleInputChange}
                />
                <label className="form-check-label" >Enable</label>
            </div>
            <button className="btn btn-primary btn-block">
                { currentId ? "Update" : "Add" }
            </button>
            { currentId && (
                <button 
                    className="btn btn-secondary btn-block"
                    onClick={handleCancel}
                >
                Cancel
                </button>
            ) }
        </form>
    );
};

export default EditForm;