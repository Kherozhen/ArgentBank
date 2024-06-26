import HeaderUser from '../../components/Header/HeaderUser';
import Account from '../../components/Account/Account';

import React, { useEffect, useState } from 'react';
import axios from 'axios';


function User() {

    const [profile, setProfile] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
        const token = localStorage.getItem('token');

        try {
            const response = await axios.post('http://localhost:3001/api-docs/user/login', {}, {
            headers: {
            Authorization: `Bearer ${token}`
        }
            });
                setProfile(response.data);
        } catch (error) {
                setError('Failed to fetch profile');
        }
        };

    fetchProfile();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!profile) {
    return <p>Loading...</p>;
  }

    return (
        <>
            <HeaderUser />

            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br />Tony Jarvis!</h1>
                    <button className="edit-button">Edit Name</button>
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
