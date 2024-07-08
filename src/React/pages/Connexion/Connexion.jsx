import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../reduxjs/actions/userSlice';
import { useNavigate } from 'react-router-dom';

import Header from '../../../React/components/Header/Header';

// import pour l'icone 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faCircleUser } from '@fortawesome/free-regular-svg-icons'; 


function Connexion() {

  // state
  const [userName, setUserName] = useState ('');
  const [password, setPassword] = useState ('');

  // redux state
  const { error } = useSelector((state)=>state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLoginEvent=(e)=>{
    e.preventdefault();
    let userCredentials={
      userName, password
    }
    dispatch(loginUser(userCredentials)).then((result)=>{
      if(result.payload){
        setUserName('');
        setPassword('');
        navigate('/user')
      }
    })
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
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={userName}
                        onChange={(e)=>setUserName(e.target.value)}
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