import axios from 'axios';
import { GET_BUSINESSES, BUSINESS_ERROR } from './types';

// Get List of Businesses
export const getBusinesses = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/users/businesses');

        dispatch({
            type: GET_BUSINESSES,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: BUSINESS_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};
