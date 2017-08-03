import React from 'react';
import ReactDOM from 'react-dom';


import MovieApp from './MovieApp';
import MovieDetails from './MovieDetails';


class App extends Component{
   
   render(){
   	   return(
          
          <div>
             <MovieApp />
             <MovieDetails />
          </div>

   	   	)
   }

}

export default App;