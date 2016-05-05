import React, {Component} from "react";
import _ from "lodash";
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from "react-sparklines";

class Chart extends Component{
	getAverage(data){
		return _.round(_.sum(data)/data.length);
	}

	render(){
		return(
			<div className="text-center">
				<Sparklines height={120} width={260} data={this.props.data}>
					<SparklinesLine color={this.props.color}/>
					<SparklinesReferenceLine type="avg"/>
				</Sparklines>
				<div className="text-center">Average: {this.getAverage(this.props.data)}{this.props.unit}</div>
			</div>
			);
	}
}

export default Chart;