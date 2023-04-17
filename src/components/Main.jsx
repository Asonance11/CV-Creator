import React, { Component } from 'react';
import CVForm from './CV-Form/CVForm';

export default class Main extends Component {
	constructor() {
		super();

		this.state = {
			personalInfo: {
				firstName: '',
				lastName: '',
				jobTitle: '',
				email: '',
				phoneNumber: '',
				address: '',
			},
		};
	}

	updatePersonalInfo = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({
			personalInfo: {
				firstName: this.state.personalInfo.firstName,
				lastName: this.state.personalInfo.lastName,
				jobTitle: this.state.personalInfo.jobTitle,
				email: this.state.personalInfo.email,
				phoneNumber: this.state.personalInfo.phoneNumber,
				address: this.state.personalInfo.address,
				[name]: value,
			},
		});
	};

	render() {
		return (
			<div className="p-10 bg-gray-300 font-sans flex justify-center">
				<CVForm info={this.state} getPersonalInfo={this.updatePersonalInfo} />
			</div>
		);
	}
}
