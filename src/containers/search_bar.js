import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index';

class SearchBar extends Component{
	constructor(props){
		super(props);

		this.state = {term: ''}
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	
	onFormSubmit(event){
		event.preventDefault();
		this.props.fetchWeather(this.state.term);
		this.setState({term: ''});
	}
	
	render(){
		return (
			<form onSubmit={this.onFormSubmit} className='input-group'>
				<input 
					className='form-control'
					placeholder='Get a 5 day forecast'
					value={this.state.term}
					onChange={(event) => this.setState({term: event.target.value})} />

				<span className='input-group-btn'>
					<button type='submit' className='btn btn-secondary'>Submit</button>
				</span>
			</form>
		);
	}
}

const mapDispatchToProps = (dispatch) => 
	bindActionCreators({fetchWeather}, dispatch);

export default connect(null, mapDispatchToProps)(SearchBar);