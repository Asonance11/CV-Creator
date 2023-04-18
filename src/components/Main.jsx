import React, { Component } from 'react';
import CVForm from './CV-Form/CVForm';
import CVPreview from './CV-Preview/CVPreview';

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
			education: [
				{
					school: '',
					course: '',
					startDate: '',
					endDate: '',
				},
			],
			skills: [],
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

	// Experience
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

	addNewExperience = () => {
		this.setState({
			experience: this.state.experience.concat([
				{
					position: '',
					company: '',
					startDate: '',
					endDate: '',
					description: '',
				},
			]),
		});
	};

	deleteExperience = (key) => {
		this.setState({
			experience: this.state.experience.filter((item, index) => key !== index),
		});
	};

	// Education
	updateEducation = (e, val) => {
		const name = e.target.name;
		const value = e.target.value;

		this.setState({
			education: this.state.education.map((item, index) => {
				if (index === val) {
					return {
						school: item.school,
						course: item.course,
						startDate: item.startDate,
						endDate: item.endDate,
						[name]: value,
					};
				} else {
					return item;
				}
			}),
		});
	};

	addNewEducation = () => {
		this.setState({
			education: this.state.education.concat([
				{
					school: '',
					course: '',
					startDate: '',
					endDate: '',
				},
			]),
		});
	};

	deleteEducation = (key) => {
		this.setState({
			education: this.state.education.filter((item, index) => key !== index),
		});
	};

	// skills
	updateSkills = (e, val) => {
		let value = e.target.valur;
		this.setState({
			skills: this.state.skills.map((skill, index) => {
				if (index === val) {
					return value;
				} else {
					return skill;
				}
			}),
		});
	};

	addNewSkill = () => {
		this.setState({
			skills: this.state.skills.concat(''),
		});
	};

	deleteSkill = (key) => {
		this.setState({
			skills: this.state.skills.filter((item, index) => key !== index),
		});
	};

	render() {
		return (
			<div className="p-10 bg-gray-300 font-sans flex flex-col justify-center ">
				<CVForm
					info={this.state}
					getPersonalInfo={this.updatePersonalInfo}
					getExperience={this.updateExperience}
					addExperience={this.addNewExperience}
					deleteExperience={this.deleteExperience}
					getEducation={this.updateEducation}
					addEducation={this.addNewEducation}
					deleteEducation={this.deleteEducation}
					getSkills={this.updateSkills}
					addSkill={this.addNewSkill}
					deleteSkill={this.deleteSkill}
				/>
				<CVPreview />
			</div>
		);
	}
}
