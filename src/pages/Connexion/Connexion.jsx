import React, { useState } from 'react';

// hook de Reduce pour dispatcher les action et séléctionner des parties
import { useDispatch, useSelector } from 'react-redux';
// action de Redux pour gérer les différentes étapes de connexion
import { loginRequest, loginSuccess, loginFailure } from '../../actions/authActions';

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Header from '../../components/Header/Header';

// import pour l'icone 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'; 

function Connexion() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Const pour envoyer les actions a redux
  const dispatch = useDispatch();

  // gère l'etat du formulaire de connexion
  const { loading, error } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const handleLogin =  async (e) => {
    e.preventDefault();

    // Envoi de l'action de connexion
    dispatch(loginRequest({ username, password }));

    // Appel a l'api avec Axios
    try {
      const response = await axios.post('http://localhost:3001/api-docs/user/login', {email: username, password });
      const user = response.data;
    
    // Vérifie les users => if ok, envoi sur la page des comptes, else met un message d'erreur
    if (user.token) {
      // Sauvegarder le token
      localStorage.setItem('token', user.token);
      dispatch(loginSuccess(user));
      navigate('/user');
    } else {
      dispatch(loginFailure('Invalid email or password'));
    }
  } catch (error) {
    dispatch(loginFailure('Invalid email or password'));
  }
};

  // ajout d'un bouton et de sa const pour permettre de voir son mdp
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={handleLogin}>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}>
                      <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </button>
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button className="sign-in-button" type="submit" disabled={loading}>
                    Sign In
                </button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
            <Link to="/newProfil">New profil</Link>
        </section>
      </main>
    </>
  );
}

export default Connexion;