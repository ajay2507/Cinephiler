import React, { Component } from 'react';
import { ReactDOM } from 'react-dom';

import { connect } from 'react-redux';
import { fetchNextMovies, fetchNextMoviesSuccess, fetchNextMoviesFailure } from '../actions/movieAction';

class Pagination extends Component{
   
   constructor(props) {
     super(props);
     this.state = {
        'pageNo' : 0
     }
     this.nextPage = this.nextPage.bind(this);
     this.prevPage = this.prevPage.bind(this);
   }

   nextPage(){
      let currentPage = this.state.pageNo;
      this.setState({
         'pageNo': currentPage++
      })
      this.props.fetchMovies(this.props.movieType,currentPage++);
   }


   prevPage(){
      let currentPage = this.state.pageNo;
      if(currentPage > 1){
      this.setState({
         'pageNo': currentPage--
      })

      this.props.fetchMovies(this.props.movieType, currentPage--);
      }
    }





   render(){

   	   return(
           
           <div>
           {this.state.pageNo>0 && <button className="button blue" onClick={this.prevPage} >Prev</button>}
           <button className="button blue" onClick={this.nextPage} >Next</button></div>


   	   	)
   }
  
}


const mapStateToProps = (state) => {
  
  return{

  }
}

const mapDispatchToProps = (dispatch) => {
   
  return {
    fetchMovies: (pageNo) => {
      dispatch(fetchNextMovies(movieType, pageNo)).then((response) => {
           console.log(response);
            !response.error ? dispatch(fetchNextMoviesSuccess(response.value)) : dispatch(fetchNextMoviesFailure(response.payload));
          });
    }
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(Pagination);