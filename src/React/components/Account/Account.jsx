import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faX } from '@fortawesome/free-solid-svg-icons'; 

import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Account ({ title, account}) {
    
    // changement de l'icone arrivé sur le site et mettre le retour en arrière
    const [accountPage, setAccountPage] = useState(false);
    const location = useLocation();

    // surveiller l'url pour le changement d'icon
    useEffect(() => {
        // Vérifier le chemin actuel de l'URL pour définir l'état initial
        if (location.pathname === "/userAccountDetail") {
            setAccountPage(true);
        } else {
            setAccountPage(false);
        }
    }, [location]);

    const clickToAccount = () => {
        setAccountPage(!accountPage);
    }
    
    return (

        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">{account}</p>
                <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
                <NavLink 
                        to={accountPage ? "/user" : "/userAccountDetail"} 
                        className="transaction-button"
                        onClick={clickToAccount}
                    >
                    <FontAwesomeIcon 
                        className="arrowRight"
                        icon={accountPage ? faX : faChevronRight} 
                    />
                </NavLink>
            </div>  
        </section>
    )
}

export default Account;