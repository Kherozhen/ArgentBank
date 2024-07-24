import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';



function Field({ label, initialValue }) {

    const [value, setValue] = useState(initialValue);
    const [editing, setEditing] = useState(false);

    const changeValue = (e) => {
        setValue(e.target.value)
    };

    // validé avec 'Enter'
    const enterPress = (e) => {
        if (e.key === 'Enter') {
            setEditing(false)
        }
    };

    // cliquer hors de l'input enleve le focus
    const outClick = () => {
        setEditing(false)
    };

    // débuter l'édition
    const startEditing = () => {
        setEditing(true);
    };


    return (
        <div className='collapseDetails'>
            <label htmlFor="note" className='detailsTitle'>{label}</label>
            <div className="inputNote">
                {editing ? (
                    <input
                        className="inputCategoryNote"
                        type="text"
                        value={value}
                        onChange={changeValue}
                        onKeyDown={enterPress}
                        onBlur={outClick}
                        autoFocus
                    />
                ) : (
                    <span onClick={startEditing}>{value}</span>
                )}
                {!editing && (
                    <button className="pencil" onClick={startEditing}>
                        <FontAwesomeIcon icon={faPencil} />
                    </button>
                )}
            </div>
        </div>
    );
}

export default Field;