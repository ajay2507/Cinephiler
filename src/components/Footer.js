import React, { Component } from 'react';
import render from 'react-dom';

class Footer extends Component{

    render(){
    	return(

        <div className="footer">
          <p>
             🚀 Built with <a target="_blank" href="https://facebook.github.io/react/">React</a> and <a target="_blank" href="http://redux.js.org/">Redux</a>. 🚀
          </p>
          <p>
            See source code on <a target="_blank" href="https://github.com/ajay2507/Cinephiler">GitHub</a>
          </p>
          <p className="footerCopyRight">© 2017 Ajaykumar Prathap </p>
        </div>
    		)
    }
}

export default Footer;