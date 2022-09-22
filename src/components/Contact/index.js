import React, {useState, useEffect} from "react"; 

function Contact() {

    return (
        <div className="">
            <div className="row">
                <div className="col-sm-12  offset-sm-0 col-md-8 offset-md-2 ">
                    <div className="card">
    
                        <div className="card-header bg-dark text-center">
                            <h3 className="text-light">Contactame</h3>
                        </div>
                        <div className="card-body">
    
                            <form action="https://formspree.io/f/xgepbnej" method="POST">
    
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="email" name="_replyto" required />
                                </div>
                                <div className="form-group">
                                    <textarea cols="30" rows="5" className="form-control" placeholder="Tu Mensaje" name="message" required></textarea>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block">
                                        Enviar
                                    </button>
                                </div>
    
                            </form>
    
                        </div>
    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;