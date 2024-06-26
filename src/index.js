import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import '../src/css/main.css';

import Home from './pages/Home/Home';
import Connexion from './pages/Connexion/Connexion';
import User from './pages/User/User';
import NewProfil from './pages/Connexion/NewProfil';

import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/user" element={<User />} />
          <Route path="/newprofil" element={<NewProfil />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>
);

