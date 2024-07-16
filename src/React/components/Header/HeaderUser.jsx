
import { NavLink } from 'react-router-dom';
import LogoArgentBank from '../../../images/argentBankLogo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faGear, faPowerOff } from '@fortawesome/free-solid-svg-icons';

import { useDispatch, useSelector } from 'react-redux';
import { openForm } from '../../../reduxjs/actions/actionForm';
import { LOGOUT } from '../../../reduxjs/reducers/loginReducer';

function HeaderUser() {

    const dispatch = useDispatch(); 

    // Afficher le formulaire au clique sur l'icone
    const buttonIconForm = () => {
        dispatch(openForm()); 
    }

    // Déconnexion
    const buttonLogout = () => {
        dispatch({ type: LOGOUT });
        window.location.reload(); // Forcer le rechargement de la page
    };

    // Afficher le user name du profil
    const userName = useSelector((state => state.user.userName))


    return (
        <nav className="main-nav">
            <NavLink to="/" className="main-nav-logo">
                <img className="main-nav-logo-image" src={LogoArgentBank} alt="Argent Bank Logo"/>
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div className="navIcons">
                <p className='userNameAccount'>{userName}</p> {/*attention remettre les accolades*/}
                <NavLink to="/user" className="main-nav-item">
                    <FontAwesomeIcon 
                    className="iconNav" 
                    icon={faCircleUser} />
                </NavLink>
                <button
                className="main-nav-item"
                onClick={buttonIconForm}>
                    <FontAwesomeIcon 
                    className="iconNav" 
                    icon={faGear} />
                </button>
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