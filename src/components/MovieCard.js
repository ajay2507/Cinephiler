import React, { Component } from 'react';
import render from 'react-dom';

import './Movie.css';

class MovieCard extends Component{
  
  render(){

    const movie = this.props.movie;

  	return (
         
    
  <div className="card col-md-3">
  <img src={"https://image.tmdb.org/t/p/w500/"+movie.poster_path } alt="Avatar"  />
  <div className="container">
    <h4><b>{movie.title}</b></h4> 
    <p>{movie.overview}</p> 
  </div>
</div>
    

  )
  }
}

export default MovieCard;