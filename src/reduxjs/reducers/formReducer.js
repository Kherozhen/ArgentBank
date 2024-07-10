import { OPEN_FORM, CLOSE_FORM } from '../actions/actionForm';

// état initial, le formulaire est fermé
const initialState = {
    openForm: false
}

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_FORM:
            return {...state, openForm: true };
        case CLOSE_FORM:
            return {...state, closeForm: false };
        default:
            return state;
    }
};

export default formReducer;