import axios from 'axios';
import { GET_TV_SHOWS, GET_TV_SHOWS_SUCCESS, GET_TV_SHOWS_REJECTED } from '../constants/ActionTypes';

// To get all the movies
export function getTVShows(){
 console.log("inside get movies action");
 const request = axios({
    method: 'get',
    url: 'https://api.themoviedb.org/3/tv/popular?api_key=59240ac36bf8f025628e925b3d690f9f&language=en-US&page=1',
    headers: []
  });
   return {
    type: GET_TV_SHOWS,
    payload: request
  };
}


export function getTVShowSuccess(shows) {
  console.log("success");
  console.log(shows);
  return {
    type: GET_TV_SHOWS_SUCCESS,
    payload: shows
  };
}

export function getTVShowsFailure(error) {
  console.log("Error")
  console.log(error)
  return {
    type: GET_TV_SHOWS_REJECTED,
    payload: error
  };
}

