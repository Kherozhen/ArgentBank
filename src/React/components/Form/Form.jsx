


function Form () {

    return (
        <form action='' method='post'>
            <h2>Edit user info</h2>
            <div>
                <label for="userName">User name</label>
                <input type="text" id="userName" name="userName"/>
            </div>
            <div>
                <label for="firstName">First name</label>
                <input type="text" id="firstName" name="firstName"/>
            </div>
            <div>
                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName"/>
            </div>
            <button type="submit">Save</button>
            <button type="submit">Cancel</button>
        </form>
    )
}

export default Form;