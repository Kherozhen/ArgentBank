
import { NavLink } from 'react-router-dom';
import LogoArgentBank from '../../../images/argentBankLogo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faGear, faPowerOff } from '@fortawesome/free-solid-svg-icons';

import { useDispatch, useSelector } from 'react-redux';
import { openForm } from '../../../reduxjs/actions/actionForm';
import { LOGOUT } from '../../../reduxjs/reducers/loginReducer';
import { useEffect, useState } from 'react';


function HeaderUser() {

    const dispatch = useDispatch();
    const userName = useSelector(state => state.userName.userName);
    const [firstName, setFirstName] = useState('');
    const [error, setError] = useState(null);

    // Afficher le user name du profil
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                    method: 'PUT',
                    headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}` 
                    },
                    body: JSON.stringify()
                });
                if (!response.ok) {
                    throw new Error('Error from API');
                }
                const userData = await response.json();
                console.log('Fetched user data:', userData);
                if (userData && userData.body) {
                    setFirstName(userData.body.firstName);

                } else {
                    throw new Error('Problem user data');
                }   
            } catch (error) {
                setError(error.message);
            }
        };
        fetchUser();
    }, []);

    // Afficher le formulaire au clique sur l'icone
    const buttonIconForm = () => {
        dispatch(openForm()); 
    }

    // Déconnexion
    const buttonLogout = () => {
        dispatch({ type: LOGOUT });
        window.location.reload(); // Forcer le rechargement de la page
    };

    return (
        <nav className="main-nav">
            <NavLink to="/" className="main-nav-logo">
                <img className="main-nav-logo-image" src={LogoArgentBank} alt="Argent Bank Logo"/>
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div className="navIcons">
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <p className='userNameAccount'>{userName || firstName}</p>
                <NavLink 
                    to="/user" 
                    className="main-nav-item">
                        <FontAwesomeIcon 
                        className="iconNav" 
                        icon={faCircleUser} />
                </NavLink>
                <NavLink
                    to="/user"
                    className="main-nav-item"
                    onClick={buttonIconForm}>
                        <FontAwesomeIcon 
                        className="iconNav" 
                        icon={faGear} />
                </NavLink>
                <button 
                    className="main-nav-item"
                    onClick={buttonLogout}>
                        <FontAwesomeIcon 
                        className="iconNav" 
                        icon={faPowerOff} />
                </button>
            </div>
      </nav>
    );
}

export default HeaderUser;