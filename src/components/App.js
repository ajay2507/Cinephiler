import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

import MovieApp from './MovieApp';
import MovieDetails from './MovieDetails';


class App extends Component{
   
   render(){
   	   console.log(this.props);
   	   return(
          
          <div>
             {!this.props.movieById && <MovieApp />}
             {this.props.movieById && <MovieDetails data={this.props.movieDetails} />}
          </div>

   	   	)
   }

}

const mapStateToProps = (state) => {
    console.log("app.js");
	console.log(state);
	return {
		movieById : state.movies.moviesList.movieById,
		movieDetails : state.movies.moviesList.movies
	}
} 

export default connect(mapStateToProps, null)(App);