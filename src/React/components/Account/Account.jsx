import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'; 

function Account ({ title, account}) {

    return (

        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">{account}</p>
                <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
                <button 
                className="transaction-button">
                <FontAwesomeIcon 
                    className="arrowRight"
                    icon={faChevronRight} />
                </button>
            </div>
        </section>
    )
}

export default Account;