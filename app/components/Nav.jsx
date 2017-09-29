var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
		onSearch: function(e){
			e.preventDefault();

			alert('no handled yet!');
		},
		render: function(){	
		return(
			<div className="top-bar">
			  <div className="top-bar-left">
			    <ul className="menu">
			      <li className="menu-text">Get Weather</li>
			      <li><IndexLink activeClassName="active" activeStyle={{fontSize: '21px'}} to="/">Get Weather</IndexLink></li>
			      <li><Link activeClassName="active" activeStyle={{fontSize: '21px'}} to="/About">About</Link></li>
			      <li><Link activeClassName="active" activeStyle={{fontSize: '21px'}} to="/Examples">Examples</Link></li>
			    </ul>
			  </div>
			  <div className='top-bar-right'>
			  	<form onSubmit={this.onSearch}>
			     <ul className="menu">
			  	  <li><input type='text' placeholder='Search for Weather' /></li>	
			  	  <li><input type='submit' className='button' value='Search for Weather'/></li>	
			  	 </ul>
			  	</form> 
			  </div>
			</div>  
		)
	}
});

module.exports = Nav;