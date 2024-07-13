import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { LOGOUT } from '../../../reduxjs/reducers/loginReducer';
import { useNavigate } from "react-router-dom";



function TokenStorage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    useEffect(() => {
        const storageChange = () => {
            if (!localStorage.getItem('token')) {
                dispatch({ type: LOGOUT });
                navigate('/');
            }
        };

        window.addEventListener('storage', storageChange);

        return () => {
            window.removeEventListener('storage', storageChange);
        }
    }, [dispatch, navigate]);
}

export default TokenStorage ;