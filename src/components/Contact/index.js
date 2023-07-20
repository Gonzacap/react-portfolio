import React, {useState, useEffect} from "react"; 

function Contact() {

    return (
        <section className="row py-2 my-2">

                <div className="col-sm-12  offset-sm-0 col-md-8 offset-md-2 ">
                    <div className="card">
    
                        <div className="card-header bg-dark text-center">
                            <h3 className="text-light">Contactame</h3>
                        </div>
                        <div className="card-body">
    
                            <form action="https://formspree.io/f/xgepbnej" method="POST">
    
                                <div className="input-group my-2">
                                    <input type="text" className="form-control" placeholder="email" name="_replyto" required />
                                </div>
                                <div className="input-group my-2">
                                    <textarea cols="30" rows="5" className="form-control" placeholder="Tu Mensaje" name="message" required></textarea>
                                </div>
                                <div className="input-group my-2">
                                    <input type="file" className="form-control" placeholder="Adjuntar archivo" name="upload" />
                                </div>
                                <div className="form-group my-2 text-center">
                                    <button type="submit" className="btn btn-primary btn-block px-5">
                                        Enviar
                                    </button>
                                </div>
    
                            </form>
    
                        </div>
    
                    </div>
                </div>

        </section>
    );
};

export default Contact;