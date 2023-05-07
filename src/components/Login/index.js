import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// eslint-disable-next-line no-unused-vars
import { NavLink, useNavigate } from 'react-router-dom';

// styles
import './styles.css';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const auth = getAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    let resUser = await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => userCredential.user )
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
            return false;
        });

    if( resUser ){
        setUser(resUser);
        setError(null);
        navigate("/");
    } else {
        setError('Oops!');
    }
  };

  return (
    <div className="container container-fluid h-100">
        <div className="row h-100" >
        
            <div className="col-12 my-auto mx-auto"> 

                <div className="row">
                    { user && ( 
                        <div className="col-6 my-auto mx-auto" >
                            <label className="text-center mx-auto alert alert-success w-100" >
                                Welcome user!!
                            </label>
                        </div> 
                    )}
                </div>

                <div className="row">
                    { error && ( 
                        <div className="col-6 my-auto mx-auto" >
                            <label className="text-center mx-auto alert alert-danger w-100" >
                                {error}
                            </label>
                        </div> 
                    ) }
                </div>
                
                <div className="row">
                    <form className="col-8 text-center mx-auto p-2" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label >
                                Email:
                                <input className="form-control" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </label>
                        </div>
                        <br />
                        <div className="form-group">
                            <label>
                                Password:
                                <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </label>
                        </div>
                        <br />
                        <button className="btn btn-primary" type="submit">Log In</button>
                    </form>
                </div>

            </div>
        </div>
    </div>
  );
}

export default Login;