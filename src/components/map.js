import React, {Component} from 'react';

export default class GoogleMap extends Component {
	constructor(props){
		super(props)
	}

	componentDidMount(){
		// creates embeded google map
		new google.maps.Map(this.refs.map, {
			zoom :12,
			center:{
				lat: this.props.lat,
				lng: this.props.lng
			}
		});
	}

	render(){
		// this.refs.map 
		// ref allows us to taget a particular tag in react
		return <div ref='map' />
	}
}