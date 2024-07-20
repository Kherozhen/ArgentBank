import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Provider, useSelector } from 'react-redux';
import store from './reduxjs/store/store';

import '../src/css/main.css';

import Home from './React/pages/Home/Home';
import Connexion from './React/pages/Connexion/Connexion';
import User from './React/pages/User/User';
import UserAccountDetail from './React/pages/User/UserAcccountDetail';
import ErrorPage from './React/pages/Error/ErrorPage';


import HeaderUser from './React/components/Header/HeaderUser';
import Header from './React/components/Header/Header';
import Footer from './React/components/Footer/Footer';

function Layout({ children }) {
  const token = useSelector((state) => state.login.token);

  return (
      <>
          {token ? <HeaderUser /> : <Header />}
          {children}
          <Footer />
      </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/user" element={<User />} />
            <Route path="/userAccountDetail" element={<UserAccountDetail />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  </React.StrictMode>
);

