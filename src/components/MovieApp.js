import React, { Component } from 'react';
import render from 'react-dom';
import { connect } from 'react-redux';

import { getMovies, getMoviesSuccess, getMoviesFailure } from '../actions/movieAction';
import { getTVShows, getTVShowSuccess, getTVShowsFailure } from '../actions/TVShowsAction';

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
    
    getMovieType(type){
      this.setState({
        enableButton : !this.state.enableButton
      })

      if(this.state.enableButton){
        this.props.getMovies();
      }else{
        this.props.getTVShowsDetails();
      }
    }


    componentWillMount() {
        this.props.getMovies();
    }

    render() {
    
    //const { movies, loading, error } = this.props.movieList;
    return (

     <div>
     <div>
          <button className="button" onClick={this.getMovieType}>Upcoming</button>
          <button className="button" onClick={this.getMovieType}>Top Rated</button>
          {this.state.enableButton && <button className="button" onClick={this.getMovieType}>Serials</button> }
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
    getMovies: () => {
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieApp);

