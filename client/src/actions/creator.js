import axios from 'axios';
import { GET_CREATORS, CREATOR_ERROR } from './types';

const baseUrl = process.env.BASE_URL || 'https://creatorship-iecg.onrender.com';

// Get List of Creators
export const getCreators = () => async (dispatch) => {
    try {
        const res = await axios.get(`${baseUrl}/api/users/creators`);

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
