import axios from 'axios';
import {
    GET_MOVIES_BY_ID,
    GET_MOVIES_BY_ID_SUCCESS,
    GET_MOVIES_BY_ID_REJECTED
} from '../constants/ActionTypes';

// To get individual movie details by id

export function getMovieById(id) {
    console.log("inside get movies action");
    const request = axios({
        method: 'get',
        url: 'https://api.themoviedb.org/3/movie/'+id+'?api_key=59240ac36bf8f025628e925b3d690f9f&language=en-US',
        headers: []
    });
    return {
        type: GET_MOVIES_BY_ID,
        payload: request
    };
}


// Getting successful response
export function getMovieByIdSuccess(movies) {
    console.log("success");
    console.log(movies);
    return {
        type: GET_MOVIES_BY_ID_SUCCESS,
        payload: movies
    };
}

// Handling error
export function getMovieByIdFailure(error) {
    console.log("Error")
    console.log(error)
    return {
        type: GET_MOVIES_BY_ID_REJECTED,
        payload: error
    };
}