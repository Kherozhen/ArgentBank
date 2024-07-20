
import Account from '../../components/Account/Account';
import Collapse from '../../components/Collapse/Collapse';

function UserAccountDetail () {

    return (
        <section className='userAccountDetail'>
            <Account
                    title="Argent Bank Checking"
                    account="$2,082.79">
            </Account>
            
            <div className="accountDetailContent">
                <div className='accountDetailTitle'>
                    <h4>Date</h4>
                    <h4>Description</h4>
                    <h4>Amount</h4>
                    <h4>Balance</h4>
                </div>
                <div className="collapsecontent">
                    <Collapse />
                </div>
            </div>

        </section>
    )
}

export default UserAccountDetail;