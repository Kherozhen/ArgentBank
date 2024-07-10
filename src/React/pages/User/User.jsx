
import HeaderUser from '../../../React/components/Header/HeaderUser';
import Account from '../../../React/components/Account/Account';
import Form from '../../components/Form/Form';
import { useSelector } from 'react-redux';



function User() {

    const openForm = useSelector(state => state.form.openForm);

    return (
        <>
            <HeaderUser />

            <main className="main bg-dark">
                <div className="header">
                    {openForm ? <Form /> : <h1 className='titleAccount'>Welcome back<br /></h1>}
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
