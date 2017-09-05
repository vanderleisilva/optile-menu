import React from "react";
import PropTypes from 'prop-types';
import axios from 'axios';

export default class Upload extends React.Component {

	static propTypes = {
		apiUrl: PropTypes.string
	}

	handleUploadFile(event, api) {
		const data = new FormData();
		data.append('file', event.target.files[0]);
		axios.post(`${api}/menu`, data);
	}

	render() {
		return(
			<div className="thumbnail">
	          <img src={ this.props.apiUrl + "/menu" } alt="Lunch menu" />          
	            <div className="caption">
	            <p>See what we have for lunch without leave your seat</p>
	            <p>
	              <label title="Update Menu" className="btn btn-primary">
	                  Update <span className="glyphicon glyphicon-upload" aria-hidden="true"></span> 
	                  <input type="file" className="hidden" onChange={event => this.handleUploadFile(event, this.props.apiUrl)} />
	              </label>
	            </p>
	          </div>
	        </div>
		);
	}

}
