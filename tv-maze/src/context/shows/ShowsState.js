import {useReducer} from 'react';
import axios from 'axios';
import showsContext from './showsContext';
import showReducer from './showsReducer';
import {
    SEARCH_SHOWS,
    SET_LOADING,
    SET_DETAIL,
    CLEAR_DETAIL
} from "../types";

function ShowsState (props) {
    const initialState = {
        shows: [],
        showDetail: {},
        loading: false
    }

    const [state, dispatch] = useReducer(showReducer, initialState);

    const searchShows = async(searchTerm) => {
        dispatch({type: SET_LOADING});

        const { data } = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);

        dispatch({
            type: SEARCH_SHOWS,
            payload: data
        });
    };

    const getDetail = async (id) => {
        dispatch({
            type: SET_LOADING,
        });

        const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);

        console.log(data);

        dispatch({
            type: SET_DETAIL,
            payload: data
        });
    };
    
    /* const clearDetail = () => {
        dispatch({
            type: CLEAR_DETAIL
        });

        const { data } = await axios.get(``);

        console.log(data);

        dispatch({
            type: CLEAR_DETAIL,
            payload: data
        });
    } */

    return (
        <showsContext.Provider
            value={{
                shows: state.shows,
                singleShow: state.singleShow,
                loading: state.loading,
                searchShows,
                getDetail, 
                //clearDetail
            }}
        >
            {props.children}
        </showsContext.Provider>
    );
}

export default ShowsState;