import React, {Component} from "react";
import {connect} from "react-redux";

import Chart from "../components/chart";
import GoogleMap from "../components/google_map";

class WeatherList extends Component{
	

	constructor(props){
		super(props);

		this.renderWeatherRows = this.renderWeatherRows.bind(this);
	}

	renderWeatherRows(){

		return this.props.weather.map((city) => {
			const tempData = city.list.map(weather => weather.main.temp);
			const humData = city.list.map(weather => weather.main.humidity);
			const presData = city.list.map(weather =>  weather.main.pressure);
			const {lat, lon} = city.city.coord;

			return(
					<tr key={city.city.id}>
						<td>
							<div className="text-center">
								<GoogleMap lon={lon} lat={lat}/>
								<p>{city.city.name}</p>
							</div>
						</td>
						<td>
							<Chart data={tempData} color="orange" unit="F"/>
						</td>
						<td>
							<Chart data={presData} color="red" unit="torr"/>
						</td>
						<td>
							<Chart data={humData} color="blue" unit="%"/>
						</td>
					</tr>
				);
		})
	}

	render(){
		if(this.props.weather.length == 0){
			return(
					<div className="alert alert-info text-center margin-top">Please enter a City above to get started.</div>
				);
		}else{
			return(
				<table className="table table-hover table-striped margin-top">
					<thead>
						<tr className="info">
							<td className="text-center"><strong>City</strong></td>
							<td className="text-center"><strong>Temperature</strong></td>
							<td className="text-center"><strong>Pressure</strong></td>
							<td className="text-center"><strong>Humidity</strong></td>
						</tr>
					</thead>
					<tbody>
						{this.renderWeatherRows()}
					</tbody>
				</table>
				);
		}
	}
}

function mapStateToProps({ weather }){
	return {
		weather
	}
}

export default connect(mapStateToProps)(WeatherList);