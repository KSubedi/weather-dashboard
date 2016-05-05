import React, {Component} from "react";

class Footer extends Component{
	render(){
		return(
				<div className="text-center">
					<hr/>
					<p>&copy; 2016 <a href="https://kaushalsubedi.com/" target="_blank">Kaushal Subedi</a>, All Rights Reserved. Weather Data provided by <a href="http://openweathermap.org" target="_blank">OpenWeatherMap</a>.</p>
				</div>
			);
	}
}

export default Footer;