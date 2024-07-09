import { useState } from "react";



function Form (props) {

    const [userName, setUserName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.userNameChange(userName)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit user info</h2>
            <div>
                <label htmlFor="userName">User name</label>
                <input 
                type="text" 
                id="userName" 
                name="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="firstName">First name</label>
                <input 
                type="text" 
                id="firstName" 
                name="firstName"/>
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input 
                type="text" 
                id="lastName" 
                name="lastName"/>
            </div>
            <button type="submit">Save</button>
            <button type="submit" onClick={() => props.onCancel()}>Cancel</button>
        </form>
    );
}

export default Form;