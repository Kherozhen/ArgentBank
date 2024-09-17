import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TokenStorage from '../../components/Security/Token';

import Account from '../../components/Account/Account';
import Collapse from '../../components/Collapse/Collapse';


function UserAccountDetail () {

    // si pas de token => deconnexion => redirection sur la page accueil
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token) {
            navigate('/');
        }
    }, [navigate]);


    TokenStorage();


    return (
        <section className='userAccountDetail'>
            <Account
                title="Argent Bank Checking (x3448)"
                account="$48,098.43">
            </Account>
            
            <div className="accountDetailContent">
                <div className='accountDetailTitle'>
                    <h4>Date</h4>
                    <h4>Description</h4>
                    <h4>Amount</h4>
                    <h4>Balance</h4>
                </div>
                <div className="collapsecontent">
                    <Collapse 
                        date="27/02/20"
                        description="Golden Sun Bakery"
                        amount="$8.00"
                        balance="$298.00"
                        type="Electronic"
                        >
                    </Collapse>
                    <Collapse 
                        date="27/02/20"
                        description="Golden Sun Bakery"
                        amount="$8.00"
                        balance="$298.00"
                        type="Electronic"
                        >
                    </Collapse>
                    <Collapse 
                        date="27/02/20"
                        description="Golden Sun Bakery"
                        amount="$8.00"
                        balance="$298.00"
                        type="Electronic"
                        >
                    </Collapse>
                    <Collapse 
                        date="27/02/20"
                        description="Golden Sun Bakery"
                        amount="$8.00"
                        balance="$298.00"
                        type="Electronic"
                        >
                    </Collapse>
                    <Collapse 
                        date="27/02/20"
                        description="Golden Sun Bakery"
                        amount="$8.00"
                        balance="$298.00"
                        type="Electronic"
                        >
                    </Collapse>
                    
                </div>
            </div>

        </section>
    )
}

export default UserAccountDetail;