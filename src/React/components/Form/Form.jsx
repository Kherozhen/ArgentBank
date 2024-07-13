import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { closeForm } from '../../../reduxjs/actions/actionForm';



function Form () {

    const [userName, setUserName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    // Partie pour récupérer les champs Nom et Prénom

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch ('http://localhost:3001/api/v1/user/profile');
                if (!response.ok) {
                    throw new Error('Error data api');
                }
                const userData = await response.json();
                setFirstName(userData.firstName);
                setLastName(userData.lastName);
            }
            catch (error) {
                setError(error.message);
            } 
        }
    })


    // Partie pour envoyer le changement de user name
   
    

    // Fermer le formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(closeForm());
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit user info</h2>
            <div className='labelInputForm'>
                <label htmlFor="userName">User name: </label>
                <input 
                type="text" 
                id="userName" 
                name="userName"
                />
            </div>
            <div className='labelInputForm'>
                <label htmlFor="firstName">First name: </label>
                <input 
                type="text" 
                id="firstName" 
                name="firstName"ù
                onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <div className='labelInputForm'>
                <label htmlFor="lastName">Last name: </label>
                <input 
                type="text" 
                id="lastName" 
                name="lastName"
                onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <div className='buttonsForm'>
                <button type="submit">Save</button>
                <button type="submit">Cancel</button>
            </div>
        </form>
    );
}

export default Form;