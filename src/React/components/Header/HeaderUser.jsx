import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoArgentBank from '../../../images/argentBankLogo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faGear, faPowerOff } from '@fortawesome/free-solid-svg-icons';

import Form from '../Form/Form'


function HeaderUser() {

    // Afficher le formulaire pour le changement du UserName
    const [form, setForm] = useState(false)

    // Afficher le formulaire au clique sur l'icone
    const formIcon = () => {
        setForm(true); 
    }

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
                onClick={formIcon}>
                    <FontAwesomeIcon icon={faGear} />
                </NavLink>
                <NavLink to="/" className="main-nav-item">
                    <FontAwesomeIcon icon={faPowerOff} />
                </NavLink>
            </div>
            {form && <Form />}
      </nav>
    );
}

export default HeaderUser;