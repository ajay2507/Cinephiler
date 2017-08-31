import React, { Component } from 'react';
import render from 'react-dom';

import { connect } from 'react-redux';
import { getMovieById, getMovieByIdSuccess, getMovieByIdFailure } from '../actions/MovieByIdAction';


import './Movie.css';

class MovieCard extends Component{
  
  constructor(props) {
     super(props);
     //this.getMovieDetails = this.getMovieDetails.bind(this);
   } 

   getMovieDetails(id){
      alert(id);

      this.props.getIndividualMovies(id);

   }

  render(){

    const movie = this.props.movie;

  	return (
      
    <div className="card col-md-3">
     <img className="poster" src={"https://image.tmdb.org/t/p/w500/"+movie.poster_path } alt="Avatar"  />
     <div className="container">
     <h4><b>{movie.title}</b></h4> 
     <button className="button" onClick={this.getMovieDetails.bind(this,movie.id)}>View Details</button> 
    </div>
   </div>
    

  )
  }
}


const mapStateToProps = (state) => {
  
  return{

  }
}

const mapDispatchToProps = (dispatch) => {
   
  return {
    getIndividualMovies: (id) => {
      dispatch(getMovieById(id)).then((response) => {
           console.log(response);
            !response.error ? dispatch(getMovieByIdSuccess(response.value)) : dispatch(getMovieByIdFailure(response.payload));
          });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);