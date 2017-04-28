import React from 'react';
import ReactDom from 'react-dom';
import style from '../../public/assets/materialize/sass/materialize.scss';

class Layout extends React.Component {
	render() {
		return (
			<div class="container">
        <div class="row">
      		<div class="col s12">
      			<div class="card blue-grey darken-1">
	            <div class="card-content white-text">
	              <span class="card-title">Card Title</span>
	              <p>I am a very simple card. I am good at containing small bits of information.
	              I am convenient because I require little markup to use effectively.</p>
	            </div>
	            <div clas="card-action">
	              <a href="#">This is a link</a>
	              <a href="#">This is a link</a>
	            </div>
          </div>
      		</div>
      	</div>
      </div>
		); 
	}
}

const app = document.getElementById('app');

ReactDom.render(<Layout />, app);