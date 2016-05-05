import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {fetchWeather} from "../actions";

class SearchBar extends Component{
	constructor(props){
		super(props);

		this.state = {
			term: ""
		}
			
		// Bind context to the functions
		this.onSearchTermChange = this.onSearchTermChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onSearchTermChange(event){
		this.setState({
			term: event.target.value
		});
	}

	onFormSubmit(event){
		event.preventDefault();

		this.props.fetchWeather(this.state.term);
		this.setState({
			term: ""
		});
	}

	render(){
		return(
				<div>
					<div className="alert alert-info margin-top">
						<h1 className="text-center">
							Weather
							<br/>
							<small>5 Day Average Weather Dashboard</small>
						</h1>
					</div>
					<form onSubmit={this.onFormSubmit} className="input-group margin-top">
						<input
							type="text"
							className="form-control"
							placeholder="Address"
							value={this.state.term}
							onChange={this.onSearchTermChange}
						/>
						<span className="input-group-btn">
							<button className="btn btn-info">Submit</button>
						</span>
					</form>
				</div>
			);
	}
}


function mapDispatchToProps(dispatch){
	return bindActionCreators({
		fetchWeather
	}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);