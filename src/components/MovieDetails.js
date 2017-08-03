import React from 'react';
import ReactDOM from 'react-dom';

class MovieDetails extends Component{
   
   render(){
        
        return (
              
   <div className="main-content js-app"><div className="movie-detailed">
	<div className="poster-holder js-img-placeholder">
		<img src="http://image.tmdb.org/t/p/w1280//kiWvoV78Cc3fUwkOHKzyBgVdrDD.jpg" alt="" className="movie-detailed__poster trans-img js-trans-img" />
	<div className="loading tt is-hidden">
	
</div></div>		
	
	<div className="movie-details">
		<a rel="nofollow" href="/" className="action action--back js-action--back">
			<svg height="80px" width="80px" className="action__icon action__icon--back" viewBox="0 0 80 80"><rect height="38" width="5" x="19" y="20.547"></rect><polygon points="46.371,59 49.906,55.465 36.488,42.047 61,42.047 61,37.047 36.652,37.047 49.906,23.793 46.371,20.258 27,39.629"></polygon></svg>
		</a>

		<h1 className="movie-details__title">The Revenant</h1>

		<div className="movie-details__content">
			<p>In the 1820s, a frontiersman, Hugh Glass, sets out on a path of vengeance against those who left him for dead after a bear mauling.</p>
		</div>

		<div>
	 
		<button className="action action-watchlist--added js-watchlist--add">
			<svg height="80px" width="80px" className="action__icon action__icon--add" viewBox="0 0 80 80"><polygon points="61,37 43,37 43,19 37,19 37,37 19,37 19,43 37,43 37,61 43,61 43,43 61,43 "></polygon></svg>
			Add to watchlist
		</button>
	
</div>
	</div>
</div></div>
        	)
   }

}

export default 