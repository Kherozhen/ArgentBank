import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { closeForm } from '../../../reduxjs/actions/actionForm';

import { userInfo } from '../../../reduxjs/actions/actionUserName'; 

function Form () {

    // Partie pour envoyer le changement de user name

    const [userName, setUserName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    // Partie pour récupérer les champs Nom et Prénom
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                    method: 'PUT',
                    headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}` 
                    },
                    body: JSON.stringify({ userName : userName })
                });
                if (!response.ok) {
                    throw new Error('Error from API');
                }
                const userData = await response.json();
                console.log('Fetched user data:', userData);
                if (userData && userData.body) {
                    setFirstName(userData.body.firstName);
                    setLastName(userData.body.lastName);
                    setUserName(userData.body.userName || userData.body.firstName);
                } else {
                    throw new Error('Problem user data');
                }
                
            } catch (error) {
                setError(error.message);
            }
        };

        fetchUser();
    }, [userName]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting userName:', userName);

        try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}` 
                },
                body: JSON.stringify({userName})
            });
          
            const data = await response.json();
            console.log('Response data:', data);
            if (data.status !== 200){
                setError('Error updating')
            } else {
                dispatch(userInfo(userName));
                dispatch(closeForm());
            }
          } catch(error) {
            setError('Error')          
        }
        
    };

    const buttonCancel = () => {
        dispatch(closeForm());
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit user info</h2>
            
            <div className='labelInputForm'>
                <label htmlFor="userName">User name: </label>
                <input 
                type="text" 
                id="userName" 
                name="userName"
                //value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
                />
            </div>
            <div className='labelInputForm'>
                <label htmlFor="firstName">First name: </label>
                <input 
                className='inputLocked'
                type="text" 
                id="firstName" 
                name="firstName"
                value={firstName}
                disabled/>
            </div>
            <div className='labelInputForm'>
                <label htmlFor="lastName">Last name: </label>
                <input 
                className='inputLocked'
                type="text" 
                id="lastName" 
                name="lastName"
                value={lastName}
                disabled/>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className='buttonsForm'>
                <button type="submit">Save</button>
                <button type="button" onClick={buttonCancel}>Cancel</button>
            </div>
        </form>
    );
}

export default Form;