import { GET_CREATORS, CREATOR_ERROR } from '../actions/types';

const initialState = {
    creators: [],
    creator: null,
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

        case GET_CREATORS:
            return {
                ...state,
                creators: payload,
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

        case CREATOR_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        default:
            return state;
    }
}
