import axios from 'axios';
import { FILTER_MOVIES, FILTER_MOVIES_SUCCESS, FILTER_MOVIES_REJECTED } from '../constants/ActionTypes';

// To get all the movies
export function filterMoviesByCategory(filterType){
 console.log("inside get movies action");
 alert(filterType);
 const request = axios({
    method: 'get',
    url: 'https://api.themoviedb.org/3/movie/'+filterType+'?api_key=59240ac36bf8f025628e925b3d690f9f&language=en-US&page=1',
    headers: []
  });
   return {
    type: FILTER_MOVIES,
    payload: request
  };
}




export function filterMoviesSuccess(movies) {
  console.log("success");
  console.log(movies);
  return {
    type: FILTER_MOVIES_SUCCESS,
    payload: movies
  };
}

export function filterMoviesFailure(error) {
  console.log("Error")
  console.log(error)
  return {
    type: FILTER_MOVIES_REJECTED,
    payload: error
  };
}

