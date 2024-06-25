import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest, loginSuccess, loginFailure } from '../../actions/authActions';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header/Header';

const users = [
  { email: 'tony@stark.com', password: 'password123', firstName: 'Tony', lastName: 'Stark' },
  { email: 'steve@rogers.com', password: 'password456', firstName: 'Steve', lastName: 'Rogers' },
];

function Connexion() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginRequest({ username, password }));

    const user = users.find((u) => u.email === username && u.password === password);
    if (user) {
      dispatch(loginSuccess(user));
      navigate('/user');
    } else {
      dispatch(loginFailure('Invalid email or password'));
    }
  };

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
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
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
        </section>
      </main>
    </>
  );
}

export default Connexion;