import React, {Component} from "react";
import { GoogleMapLoader, GoogleMap} from "react-google-maps";

class GMap extends Component{
	render(){
		return(
			<div className="map">
				<GoogleMapLoader
					containerElement={
						<div style={{height: '100%'}}/>
					} 
					googleMapElement={
						<GoogleMap defaultZoom={12} defaultCenter={{lat: this.props.lat, lng: this.props.lon}}></GoogleMap>
					}
				/>
			</div>
			);
	}
}

export default GMap;