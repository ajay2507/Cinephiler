import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MovieDetails extends Component{
   

   constructor(props) {
    	super(props);
    	console.log(this.props);
    } 
   
  
   render(){

        const movieDetails = this.props.movieDetails;
        
        return (
              
            <div>
               <h1>Ajay</h1>
             </div>
        	)
   }

}

export default MovieDetails;