import axios from 'axios';

import {
    PROFILE_ERROR,
    UPDATE_PROFILE,
    GET_PROFILE,
    CLEAR_PROFILE,
} from './types';

// Get  current users profile
export const getCurrentProfile = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/profiles/me');

        dispatch({
            type: GET_PROFILE,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {
                msg: err.response.messageText,
                status: err.response.status,
            },
        });
    }
};

// Get  creator profile by ID
export const getCreatorProfileById = (userId) => async (dispatch) => {
    dispatch({ type: CLEAR_PROFILE });
    try {
        const res = await axios.get(`/api/profiles/creator/${userId}`);

        dispatch({
            type: GET_PROFILE,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {
                msg: err.response.messageText,
                status: err.response.status,
            },
        });
    }
};

// Get  business profile by ID
export const getBusinessProfileById = (userId) => async (dispatch) => {
    dispatch({ type: CLEAR_PROFILE });
    try {
        const res = await axios.get(`/api/profiles/business/${userId}`);

        dispatch({
            type: GET_PROFILE,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {
                msg: err.response.messageText,
                status: err.response.status,
            },
        });
    }
};

// create or update creator profile
export const updateCreatorProfile =
    (formData, history, edit = false) =>
    async (dispatch) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const res = await axios.post(
                '/api/profiles/creator',
                formData,
                config
            );

            dispatch({
                type: UPDATE_PROFILE,
                payload: res.data,
            });

            // dispatch(
            //     setAlert(
            //         edit ? 'Profile Updated' : 'Profile Created',
            //         'success'
            //     )
            // );

            history.push('/admin/dashboard');
        } catch (err) {
            const errors = err.response.data.errors;

            // if (errors) {
            //     errors.forEach((error) => {
            //         dispatch(setAlert(error.msg, 'danger'));
            //     });
            // }

            dispatch({
                type: PROFILE_ERROR,
                payload: {
                    msg: err.response.messageText,
                    status: err.response.status,
                },
            });
        }
    };

// create or update business profile
export const updateBusinessProfile =
    (formData, history, edit = false) =>
    async (dispatch) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const res = await axios.post(
                '/api/profiles/business',
                formData,
                config
            );

            dispatch({
                type: UPDATE_PROFILE,
                payload: res.data,
            });

            // dispatch(
            //     setAlert(
            //         edit ? 'Profile Updated' : 'Profile Created',
            //         'success'
            //     )
            // );

            history.push('/admin/dashboard');
        } catch (err) {
            const errors = err.response.data.errors;

            // if (errors) {
            //     errors.forEach((error) => {
            //         dispatch(setAlert(error.msg, 'danger'));
            //     });
            // }

            dispatch({
                type: PROFILE_ERROR,
                payload: {
                    msg: err.response.messageText,
                    status: err.response.status,
                },
            });
        }
    };
