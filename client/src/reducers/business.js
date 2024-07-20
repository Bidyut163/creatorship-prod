import { GET_BUSINESSES, BUSINESS_ERROR } from '../actions/types';

const initialState = {
    businesses: [],
    business: null,
    loading: true,
    error: {},
};
export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        // case GET_USER:
        //     return {
        //         ...state,
        //         user: payload,
        //         loading: false,
        //     };

        case GET_BUSINESSES:
            return {
                ...state,
                businesses: payload,
                loading: false,
            };
        // case ADD_USER:
        //     return {
        //         ...state,
        //         users: [...state.users, payload],
        //         loading: false,
        //     };

        // case EDIT_USER:
        //     return {
        //         ...state,
        //         user: payload,
        //         loading: false,
        //     };
        // case DELETE_USER:
        //     return {
        //         ...state,
        //         users: state.users.filter((user) => user.id !== payload),
        //         loading: false,
        //     };

        case BUSINESS_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        default:
            return state;
    }
}
