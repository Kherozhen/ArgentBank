import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import Header from '../../../React/components/Header/Header';

// import pour l'icone 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faCircleUser } from '@fortawesome/free-regular-svg-icons'; 


function Connexion() {

  // state
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginEvent=(e)=>{
    e.preventDefault();

    let userCredentials={
      email : email,
      password : password
    }

    fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(userCredentials)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (data.status !== 200){
        setError(true);
        return;
      }
      else {
        dispatch({
          type: 'LOGIN',
          payload: {
            token: data.body.token
          }
        });
        
        navigate('/user');
      }
    }).catch(error => {
      console.error(error);
    });
  }

  // ajout d'un bouton pour permettre de voir son mdp
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
            <FontAwesomeIcon 
            className="sign-in-icon"
            icon={faCircleUser} />
            <h1>Sign In</h1>
            <form onSubmit={handleLoginEvent}>
                <div className="input-wrapper">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div className="input-wrapper inputPassword">
                    <label htmlFor="password">Password</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <button 
                      className="showPassword"
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}>
                      <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </button>
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button className="sign-in-button" type="submit">
                    Sign In
                </button>
                 {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </section>
      </main>
    </>
  );
}

export default Connexion;