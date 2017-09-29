var React = require('react');

var WeatherForm = React.createClass({
	


	onFormSubmit: function(e) {
		e.preventDefault();

		var location = this.refs.location.value;
		if(typeof location === 'string' && location.length > 0){
			this.refs.location.value = '';
			this.props.onSearch(location);
		}
	},

	render: function(){
		return(
			<div>
				<form onSubmit={this.onFormSubmit}>
					<input type="text" placeholder='Enter City Name' ref='location'/>
					<button>Enter</button>
				</form>
			</div>
		)
	}
});

module.exports = WeatherForm;