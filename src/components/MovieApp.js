import React, { Component } from 'react';
import render from 'react-dom';
import { connect } from 'react-redux';

import { getMovies, getMoviesSuccess, getMoviesFailure } from '../actions/movieAction';
import { getTVShows, getTVShowSuccess, getTVShowsFailure } from '../actions/TVShowsAction';
import { filterMoviesByCategory, filterMoviesSuccess, filterMoviesFailure } from '../actions/FilterMovieAction';

import MovieCard from './MovieCard';
import './Movie.css';


class MovieApp extends Component {

    
    constructor(props) {
      super(props);
      this.state = {
        enableButton : true
      }
      this.getMovieType = this.getMovieType.bind(this); 
    }
    
    // get Movies based on Movies and TV shows
    getMovieType(){
      this.setState({
        enableButton : !this.state.enableButton
      })

      if(this.state.enableButton){
        this.props.getAllMovies();
      }else{
        this.props.getTVShowsDetails();
      }
    }

    getMoviesByCategory(filterType){
        this.props.getMovieByCategory(filterType);
    }


    componentWillMount() {
        
        this.props.getAllMovies();
    }

    render() {
    
    //const { movies, loading, error } = this.props.movieList;
    return (

     <div className="container">
     <div>
          <button className="button red" onClick={this.getMoviesByCategory.bind(this,'upcoming')}>Upcoming</button>
          <button className="button red" onClick={this.getMoviesByCategory.bind(this,'top_rated')}>Top Rated</button>
          {this.state.enableButton && <button className="button" onClick={this.getMovieType}>TV Shows</button> }
          {!this.state.enableButton && <button className="button" onClick={this.getMovieType}>Movies</button>} 
     </div>
     <div className="container">
       <section className="col-md-12">
          
         { this.props.movieList.map(singleMovie => (

             <MovieCard movie={singleMovie} />
         )) 
       }
        </section>
      </div></div>
            

        )
    }
}


const mapStateToProps = (state) => {
  
  if(state.movies.moviesList.movies.length > 0){
  return { 
    movieList: state.movies.moviesList.movies
  }}else{
     return { 
    movieList: []
  }
  };
}

const mapDispatchToProps = (dispatch) => {
   console.log("inside dispatch");
   console.log(dispatch);
  return {
    getAllMovies: () => {
      dispatch(getMovies()).then((response) => {
           console.log(response);
            !response.error ? dispatch(getMoviesSuccess(response.value)) : dispatch(getMoviesFailure(response.payload));
          });
    },

    getTVShowsDetails:() => {
       dispatch(getTVShows()).then((response) => {
           console.log(response);
            !response.error ? dispatch(getTVShowSuccess(response.value)) : dispatch(getTVShowsFailure(response.payload));
          });
    },

    getMovieByCategory:(filterType) => {
        dispatch(filterMoviesByCategory(filterType)).then((response) => {
            console.log(response);
            !response.error ? dispatch(filterMoviesSuccess(response.value)) : dispatch(filterMoviesFailure(response.payload)); 
        })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieApp);

