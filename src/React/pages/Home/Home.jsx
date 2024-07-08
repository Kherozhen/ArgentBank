import iconChat from '../../../images/icon-chat.png';
import iconMoney from '../../../images/icon-money.png';
import iconSecurity from '../../../images/icon-security.png';

import Header from '../../../React/components/Header/Header';
import Feature from '../../../React/components/Feature/Feature';

function Home() {

    return (
        <>
            <Header />
            <main>
                <section className="hero">
                    <div className="hero-content">
                        <h2 className="sr-only">Promoted Content</h2>
                        <p className="subtitle">No fees.</p>
                        <p className="subtitle">No minimum deposit.</p>
                        <p className="subtitle">High interest rates.</p>
                        <p className="text">Open a savings account with Argent Bank today!</p>
                    </div>
                </section>

                <section className="features">
                    <h2 className="sr-only">Features</h2>
                    <Feature
                        img={iconChat}
                        title="You are our #1 priority"
                        description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.">
                    </Feature>
                    <Feature
                        img={iconMoney}
                        title="More savings means higher rates"
                        description="The more you save with us, the higher your interest rate will be!">
                    </Feature>
                    <Feature
                        img={iconSecurity}
                        title="Security you can trust"
                        description="We use top of the line encryption to make sure your data and money is always safe.">
                    </Feature>
                </section>
            </main>
        </>
    )
}

export default Home;