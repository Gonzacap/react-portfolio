import React, {useState, useEffect} from "react"; 

function PresentationImage() {

    return (
        <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-4 my-3 mx-auto" style="text-align: center;">
                <img src="./img/img.jpeg" alt="" id="my-photo" />
            </div>
        </div>
    );
};

export default PresentationImage;