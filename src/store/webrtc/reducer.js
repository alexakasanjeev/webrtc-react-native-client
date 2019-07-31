import Status from '../../services/Status';
import {
    SIGNALLING_SERVER_CONNECTION_SUCCESS,
    SIGNALLING_SERVER_CONNECTION_LOADING,
    SIGNALLING_SERVER_CONNECTION_ERROR,
    ALL_USER_ACTION,
    NEW_USER_ACTION,
} from './actions';

const initialState = {
    signallingServerConnectionStatus: Status.DEFAULT,
    users: [],
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SIGNALLING_SERVER_CONNECTION_SUCCESS:
        case SIGNALLING_SERVER_CONNECTION_LOADING:
            return {
                ...state,
                signallingServerConnectionStatus: payload.status
            }
        case SIGNALLING_SERVER_CONNECTION_ERROR:
            return {
                ...state,
                signallingServerConnectionStatus: payload.status,
                errorMessage: payload.errorMessage,
            }
        case ALL_USER_ACTION:
            return {
                ...state,
                users: payload.users,
            }
        case NEW_USER_ACTION:
            return {
                ...state,
                users: [...state.users, payload.user],
            }
        default:
            return state;
    }
}