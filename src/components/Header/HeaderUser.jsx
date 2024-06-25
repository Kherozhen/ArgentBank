import { NavLink } from 'react-router-dom';
import LogoArgentBank from '../../images/argentBankLogo.png';

function HeaderUser() {

    return (
        <nav className="main-nav">
            <NavLink to="/" className="main-nav-logo">
                <img className="main-nav-logo-image" src={LogoArgentBank} alt="Argent Bank Logo"/>
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
            <NavLink to="/user" className="main-nav-item">
                <i class="fa fa-user-circle"></i>
                Tony
            </NavLink>
            <NavLink to="/" className="main-nav-item">
                <i class="fa fa-sign-out"></i>
                Sign Out
            </NavLink>
        </div>
      </nav>
    )
}

export default HeaderUser;