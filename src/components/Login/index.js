import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// styles
import './styles.css';

function Login() {
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
    } else {
        setError('Oops!');
    }
  };

  return (
    <div className="row h-100" >
        
        <div className="container login_container rounded col-6 my-auto mx-auto"> 

            { user && ( 
                <div className="container col-8 my-auto mx-auto" >
                    <label className="col-12 text-center mx-auto alert alert-success" >
                        Welcome user!!
                    </label>
                </div> 
            ) }

            { error && ( 
                <div className="container col-8 my-auto mx-auto" >
                    <label className="col-12 text-center mx-auto alert alert-danger" >
                        {error}
                    </label>
                </div> 
            ) }

            <form className="text-center mx-auto" onSubmit={handleSubmit}>
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
  );
}

export default Login;