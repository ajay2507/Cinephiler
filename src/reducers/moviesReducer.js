import {
    GET_MOVIES,
    GET_MOVIES_FULFILLED,
    GET_MOVIES_SUCCESS,
    GET_MOVIES_REJECTED,
    GET_MOVIES_BY_ID,
    GET_MOVIES_BY_ID_SUCCESS,
    GET_MOVIES_BY_ID_REJECTED,
    FILTER_MOVIES,
    FILTER_MOVIES_SUCCESS,
    FILTER_MOVIES_REJECTED
} from '../constants/ActionTypes';

const INITIAL_STATE = {
    moviesList: { movies: [], movieById: false, error: null, loading: false },
   
   };

export default function(state = INITIAL_STATE, action) {
    let error;
    switch (action.type) {

        case GET_MOVIES: // get movie list and loading true
            return { ...state, moviesList: { movies: [], movieById: false, error: null, loading: true } };

        case GET_MOVIES_SUCCESS: // successfully get movie list and make loading false
            return { ...state, moviesList: { movies: action.payload.data.results, movieById: false, error: null, loading: false } };

        case GET_MOVIES_REJECTED: // throw error message
            error = action.payload || { message: action.payload.message };
            return { ...state, moviesList: { movies: [], movieById: false, error: error, loading: false } };


        case GET_MOVIES_BY_ID: // get movie by id
            return { ...state, moviesList: { movies: [], movieById: true, error: null, loading: true } };

        case GET_MOVIES_BY_ID_SUCCESS: // successfully get individual movie details
            return { ...state, moviesList: { movies: action.payload.data, movieById: true, error: null, loading: false } };

        case GET_MOVIES_BY_ID_REJECTED: // throw error message
            error = action.payload || { message: action.payload.message };
            return { ...state, moviesList: { movies: [], movieById: true, error: error, loading: false } };
   
        
        case FILTER_MOVIES: // Filter movies by upcoming or top rated
            return { ...state, moviesList: { movies: [], movieById: true, error: null, loading: true } };

        case FILTER_MOVIES_SUCCESS: // successfully get movies by upcoming or top rated
            return { ...state, moviesList: { movies: action.payload.data, movieById: true, error: null, loading: false } };

        case FILTER_MOVIES_REJECTED: // throw error message
            error = action.payload || { message: action.payload.message };
            return { ...state, moviesList: { movies: [], movieById: true, error: error, loading: false } };
   


        default:
            return state;

    }

}