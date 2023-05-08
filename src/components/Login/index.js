import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Context
import { useAuth } from '../../context/authContext';

// styles
import './styles.css';

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const {user, login, logout} = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();

        login( email, password);

        if( user?.uid ){
            setError(null);
            navigate("/");
        } else {
            setError('Oops!');
        }
    };

    const handleLogout = () => {
        logout();
    };

  return (
    <div className="container container-fluid h-100">
        <div className="row h-100" >
        
            <div className="col-12 my-auto mx-auto"> 

                <div className="row">
                    { user?.uid && ( 
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
                    { user?.uid && (
                        <form className="col-8 text-center mx-auto p-2" onSubmit={handleLogout}>
                            <button className="btn btn-secondary" type="submit">Log Out</button>
                        </form>
                    )}
                </div>

            </div>
        </div>
    </div>
  );
}

export default Login;