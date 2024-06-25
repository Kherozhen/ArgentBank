


function Account ({ title, account}) {

    return (

        <section class="account">
            <div class="account-content-wrapper">
                <h3 class="account-title">{title}</h3>
                <p class="account-amount">{account}</p>
                <p class="account-amount-description">Available Balance</p>
            </div>
            <div class="account-content-wrapper cta">
                <button class="transaction-button">View transactions</button>
            </div>
        </section>
    )
}

export default Account;