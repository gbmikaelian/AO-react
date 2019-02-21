import { FETCH_USER_SUCCESS } from '../constants/actionTypes';

const InitialState = {
    email: '',
    password: '',
    token: ''
};

export default function user (state = InitialState, action) {
    switch (action.type) {
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                token: action.payload.token
            };
    
        default:
            break;
    }
    
    return state;
}