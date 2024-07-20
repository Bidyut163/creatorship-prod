import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    GET_ERRORS,
    AUTH_ERROR,
    USER_LOADED,
    LOGOUT,
} from './types';

// Load user
export const loadUser = () => async (dispatch) => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('/api/auth');

        dispatch({
            type: USER_LOADED,
            payload: res.data,
        });
    } catch (err) {
        dispatch({ type: AUTH_ERROR });
    }
};

// Creator Signup
export const registerCreator = (formData) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const body = JSON.stringify(formData);

    try {
        const res = await axios.post('/api/users/creators', body, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,
        });

        // dispatch({
        //     type: CLEAR_ERRORS,
        // });

        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data;

        if (errors) {
            dispatch({
                type: GET_ERRORS,
                payload: errors,
            });
        }

        dispatch({
            type: REGISTER_FAIL,
        });
    }
};

// Creator Login
export const loginCreator = (email, password) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const body = JSON.stringify({
        email,
        password,
    });

    try {
        const res = await axios.post('/api/auth/creator', body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        });

        // dispatch({
        //     type: CLEAR_ERRORS,
        // });

        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data;

        if (errors) {
            dispatch({ type: GET_ERRORS, payload: errors });
        }

        dispatch({
            type: LOGIN_FAIL,
        });
    }
};

// Business Signup
export const registerBusiness = (formData) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const body = JSON.stringify(formData);

    try {
        const res = await axios.post('/api/users/businesses', body, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,
        });

        // dispatch({
        //     type: CLEAR_ERRORS,
        // });

        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data;

        if (errors) {
            dispatch({
                type: GET_ERRORS,
                payload: errors,
            });
        }

        dispatch({
            type: REGISTER_FAIL,
        });
    }
};

// Business Login
export const loginBusiness = (email, password) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const body = JSON.stringify({
        email,
        password,
    });

    try {
        const res = await axios.post('/api/auth/business', body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        });

        // dispatch({
        //     type: CLEAR_ERRORS,
        // });

        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data;

        if (errors) {
            dispatch({ type: GET_ERRORS, payload: errors });
        }

        dispatch({
            type: LOGIN_FAIL,
        });
    }
};

// logout a user
export const logout = () => (dispatch) => {
    dispatch({
        type: LOGOUT,
    });
};
