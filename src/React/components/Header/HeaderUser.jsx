
import { NavLink } from 'react-router-dom';
import LogoArgentBank from '../../../images/argentBankLogo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faGear, faPowerOff } from '@fortawesome/free-solid-svg-icons';

import { useDispatch } from 'react-redux';
import { openForm } from '../../../reduxjs/actions/actionForm';


function HeaderUser() {

    const dispatch = useDispatch(); 

    // Afficher le formulaire au clique sur l'icone
    const buttonIconForm = () => {
        dispatch(openForm()); 
    }

    // Déconnexion
    

    return (
        <nav className="main-nav">
            <NavLink to="/" className="main-nav-logo">
                <img className="main-nav-logo-image" src={LogoArgentBank} alt="Argent Bank Logo"/>
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div className="navIcons">
                <p className='userNameAccount'>User Name</p>
                <NavLink to="/user" className="main-nav-item">
                    <FontAwesomeIcon icon={faCircleUser} />
                </NavLink>
                <NavLink 
                to="" 
                className="main-nav-item"
                onClick={buttonIconForm}>
                    <FontAwesomeIcon icon={faGear} />
                </NavLink>
                <NavLink to="/" className="main-nav-item">
                    <FontAwesomeIcon icon={faPowerOff} />
                </NavLink>
            </div>
      </nav>
    );
}

export default HeaderUser;