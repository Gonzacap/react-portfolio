import React, {useState, useEffect} from "react"; 

function Resume() {

    return (
        <div className="row justify-content-center">
            <a href="./viewCV.html" className="btn btn-primary m-1" target="_blank">Mi CV (Esp)</a>
            <a href="./viewEngCV.html" className="btn btn-primary m-1" target="_blank">My CV (Eng)</a>
        </div>
    );
};

export default Resume;