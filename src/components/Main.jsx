import React, { Component } from 'react';

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

		updatePersonalInfo = (e) => {
			this.setState({
				personalInfo: {
					firstName: this.state.personalInfo.firstName,
					lastName: this.state.personalInfo.lastName,
					jobTitle: this.state.personalInfo.jobTitle,
					email: this.state.personalInfo.email,
					phoneNumber: this.state.personalInfo.phoneNumber,
					address: this.state.personalInfo.address,
				},
			});
		};
	}

	render() {
		return <div>Main</div>;
	}
}
