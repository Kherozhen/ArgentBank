import { NavLink } from 'react-router-dom';



function ErrorPage () {

    return (

        <div className='pageError'>
            <h1>404</h1>
            <p>Oops! This page doesn't exist.</p>

            <NavLink to="/">Go come back</NavLink>

        </div>
        
    )
}
    

export default ErrorPage;