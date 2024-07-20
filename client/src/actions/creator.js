import axios from 'axios';
import { GET_CREATORS, CREATOR_ERROR } from './types';

// Get List of Creators
export const getCreators = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/users/creators');

        dispatch({
            type: GET_CREATORS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: CREATOR_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};
