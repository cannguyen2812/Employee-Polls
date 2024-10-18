import { HIDE_LOADING, SHOW_LOADING } from "../actions/loading";

export default function loading(state={}, action) {
    switch (action.type) {
        case SHOW_LOADING:
            return {
                ...state,
                loading: action.payloads
            }
        case HIDE_LOADING:
            return {
                ...state,
                loading: action.payloads
            }    
        default:
            return state;
    }
}