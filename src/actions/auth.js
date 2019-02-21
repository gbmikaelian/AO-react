import axios from 'axios';
import { FETCH_USER_SUCCESS } from '../constants/actionTypes';
export const auth = user => async dispatch => {
    const data = {username: 'admin', password: '123456'};
    const user = await axios.post('http://localhost:4000/auth/sign-in', data);
    
    dispatch({type: FETCH_USER_SUCCESS, payload: user.data})
}