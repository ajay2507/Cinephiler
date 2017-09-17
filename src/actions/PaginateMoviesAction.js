import axios from 'axios';

import { FETCH_NEXT_PREV_MOVIES, FETCH_NEXT_PREV_MOVIES_SUCCESS, FETCH_NEXT_PREV_MOVIES_REJECTED } from '../constants/ActionTypes';


// To get all the movies
export function fetchNextMovies(filterType,pageNo){
 console.log("inside get movies action");
 alert(filterType);
 const request = axios({
    method: 'get',
    url: 'https://api.themoviedb.org/3/movie/'+filterType+'?api_key=59240ac36bf8f025628e925b3d690f9f&language=en-US&page='+pageNo,
    headers: []
  });
   return {
    type: FETCH_NEXT_PREV_MOVIES,
    payload: request
  };
}

export function fetchNextMoviesSuccess(movies) {
  console.log("success");
  console.log(movies);
  return {
    type: FETCH_NEXT_PREV_MOVIES_SUCCESS,
    payload: movies
  };
}

export function fetchNextMoviesFailure(error) {
  console.log("Error")
  console.log(error)
  return {
    type: FETCH_NEXT_PREV_MOVIES_REJECTED,
    payload: error
  };
}


