import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { closeForm } from '../../../reduxjs/actions/actionForm';



function Form () {
    


    // Partie pour récupérer les champs Nom et Prénom
   {/* useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/v1/user/profile');
                if (!response.ok) {
                    throw new Error('Error from API');
                }
                const userData = await response.json();
                setFirstName(userData.user.firstName);
                setLastName(userData.user.lastName);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchUser();
    }, []); */}

    // Partie pour envoyer le changement de user name

    const [userName, setUserName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

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
            if (data.status !== 200){
                setError('Error updating')
            }
          } catch(error) {
            setError('Error')          
        }
    
        dispatch(closeForm());
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
                value={userName}
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
                onChange={(e) => setFirstName(e.target.value)}
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
                onChange={(e) => setLastName(e.target.value)}
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