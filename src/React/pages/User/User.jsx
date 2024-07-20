import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import Account from '../../../React/components/Account/Account';
import Form from '../../components/Form/Form';

import TokenStorage from '../../components/Security/Token';
import { closeForm } from '../../../reduxjs/actions/actionForm';

function User() {

    // si pas de token => deconnexion => redirection sur la page accueil
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token) {
            navigate('/');
        }
        return () => {
            dispatch(closeForm());  // Fermeture du questionnaire quand on quitte la page
          };
    }, [dispatch, navigate]);


    TokenStorage();

    
    // Fermeture du questionnaire => retour du titre
    const openForm = useSelector((state) => state.form.openForm);


    return (
        <>
            <main className="main bg-dark">
                <div className="header">
                    {openForm ? <Form /> : <h1 className='titleAccount'>Welcome back</h1>}
                </div>

                <h2 className="sr-only">Accounts</h2>
                <Account
                    title="Argent Bank Checking"
                    account="$2,082.79">
                </Account>

                <Account
                    title="Argent Bank Savings"
                    account="$10,928.42">
                </Account>

                <Account
                    title="Argent Bank Credit Card"
                    account="$184.30">
                </Account>
            </main>
        </>
    )
}

export default User;
