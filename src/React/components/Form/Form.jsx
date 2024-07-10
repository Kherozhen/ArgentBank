import { useDispatch } from 'react-redux';
import { closeForm } from '../../../reduxjs/actions/actionForm';


function Form () {

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(closeForm());
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit user info</h2>
            <div className='labelInputForm'>
                <label htmlFor="userName">User name: </label>
                <input 
                type="text" 
                id="userName" 
                name="userName"
                />
            </div>
            <div className='labelInputForm'>
                <label htmlFor="firstName">First name: </label>
                <input 
                type="text" 
                id="firstName" 
                name="firstName"/>
            </div>
            <div className='labelInputForm'>
                <label htmlFor="lastName">Last name: </label>
                <input 
                type="text" 
                id="lastName" 
                name="lastName"/>
            </div>
            <div className='buttonsForm'>
                <button type="submit">Save</button>
                <button type="submit">Cancel</button>
            </div>
        </form>
    );
}

export default Form;