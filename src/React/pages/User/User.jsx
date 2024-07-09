import { useState } from 'react';

import HeaderUser from '../../../React/components/Header/HeaderUser';
import Account from '../../../React/components/Account/Account';




function User() {

    const [userName, setUserName] = useState('Tony Jarvis') // changer le nom quand le lien avec l'api marchera

    const userNameChange = (newUserName) => {
        setUserName(newUserName); // pour mettre à jour le nom sur le site
    }

    // Reset le form au cancel
    const buttonCancel = () => {

    };

    return (
        <>
            <HeaderUser />

            <main className="main bg-dark">
                <div className="header">
                    <h1 className='titleAccount'>Welcome back<br />{userName}</h1>
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
