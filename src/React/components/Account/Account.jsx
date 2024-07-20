import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'; 

import { NavLink } from 'react-router-dom';

function Account ({ title, account}) {

    return (

        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">{account}</p>
                <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
                <NavLink to="/userAccountDetail" className="transaction-button">
                    <FontAwesomeIcon 
                        className="arrowRight"
                        icon={faChevronRight} />
                </NavLink>
            </div>
        </section>
    )
}

export default Account;