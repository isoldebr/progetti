import {
    SEARCH_SHOWS,
    SET_LOADING,
    SET_DETAIL,
    CLEAR_DETAIL
} from "../types";

const showReducer = (state, action) => {
    switch(action.type) {
        case SET_LOADING: 
            return {
                ...state,
                loading: true
            };
        case  SEARCH_SHOWS: 
            return {
                ...state,
                shows: action.payload,
                loading: false
            };
        case  SET_DETAIL: 
            return {
                ...state,
                showDetail: action.payload,
                loading: false
            };
        /* case  CLEAR_DETAIL: 
            return {
                ...state,
                shows: action.payload,
                loading: false
            }; */
        
        default:
            return state;
    }
}

export default showReducer;