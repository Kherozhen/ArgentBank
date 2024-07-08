import HeaderUser from '../../../React/components/Header/HeaderUser';
import Account from '../../../React/components/Account/Account';



function User() {

    return (
        <>
            <HeaderUser />

            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br />Tony Jarvis!</h1>
                    <button className="edit-button">Edit Name</button>
                </div>

                <h2 className="sr-only">Accounts</h2>
                <Account
                    title="Argent Bank Checking"
                    account="$2,082.79">
                </Account>

                <Account
                    title="Argent Bank Savings"
                    account="$10,928.42">
                </Account>

                <Account
                    title="Argent Bank Credit Card"
                    account="$184.30">
                </Account>
            </main>
        </>
    )
}

export default User;
