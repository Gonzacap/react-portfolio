import React, { useState } from 'react';
//styles
import './styles.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <>
        <div className="container login_container rounded mx-auto">    
            <form className="text-center mx-auto" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label >
                        Username:
                        <input className="form-control" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
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
    </>
  );
}

export default Login;