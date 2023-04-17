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
			experience: [
				{
					position: '',
					company: '',
					startDate: '',
					endDate: '',
					description: '',
				},
			],
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

	updateExperience = (e, val) => {
		const name = e.target.name;
		const value = e.target.value;

		this.setState({
			experience: this.state.experience.map((item, index) => {
				if (index === val) {
					return {
						position: item.position,
						company: item.company,
						startDate: item.startDate,
						endDate: item.endDate,
						description: item.description,
						[name]: value,
					};
				} else {
					return item;
				}
			}),
		});
	};

	render() {
		return (
			<div className="p-10 bg-gray-300 font-sans flex justify-center">
				<CVForm
					info={this.state}
					getPersonalInfo={this.updatePersonalInfo}
					getExperience={this.updateExperience}
				/>
			</div>
		);
	}
}
