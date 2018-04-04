import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMap from '../components/map';

import WeatherChart from '../components/weather_chart';

class WeatherList extends Component{
	

	renderWeather(cityData){
		
		const city = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressure = cityData.list.map(weather => weather.main.pressure);
		const humidity = cityData.list.map(weather => weather.main.humidity);
		
		const {lat, lon} = cityData.city.coord;
		
		return (
			<tr key={city} >
				<td> <GoogleMap lat={lat} lng={lon} /> </td>
				<td> <WeatherChart data={temps} color='red' units='K'/> </td>
				<td> <WeatherChart data={pressure} color='green' units='HPA' /> </td>
				<td> <WeatherChart data={humidity} color='black' units='%' /> </td>
			</tr>
		);
	}

	render(){
		return (
			<table className='table table-hover'>
				<thead>
					<tr>
						<th>City</th>
						<th>Tempture (K)</th>
						<th>Pressure (HPA) </th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{ this.props.weather.map(this.renderWeather) }
				</tbody>
			</table>
		);
	}
}

const mapStateToProps = ({weather}) => ({
	weather: weather
});

export default connect(mapStateToProps)(WeatherList);