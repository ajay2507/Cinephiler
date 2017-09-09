import React, { Component } from 'react';
import { ReactDOM } from 'react-dom';

class Pagination extends Component{
   
   render(){

   	   return(
           
           <div><button className="button blue" onClick="">Prev</button>
           <button className="button blue" onClick="">Next</button></div>


   	   	)
   }
  
}

export default Pagination;