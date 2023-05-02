import { useState } from 'react';
import CVForm from './CV-Form/CVForm';
import CVPreview from './CV-Preview/CVPreview';

const Main = () => {
	const [personalInfo, setPersonalInfo] = useState({
		firstName: '',
		lastName: '',
		jobTitle: '',
		email: '',
		phoneNumber: '',
		address: '',
	});
	const [experience, setExperience] = useState([
		{
			position: '',
			company: '',
			startDate: '',
			endDate: '',
			description: '',
		},
	]);
	const [education, setEducation] = useState([
		{
			school: '',
			course: '',
			startDate: '',
			endDate: '',
		},
	]);
	const [skills, setSkills] = useState([]);

	const updatePersonalInfo = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setPersonalInfo({
			...personalInfo,
			[name]: value,
		});
	};

	// Experience
	const updateExperience = (e, val) => {
		const name = e.target.name;
		const value = e.target.value;

		setExperience(
			experience.map((item, index) => {
				if (index === val) {
					return {
						...item,
						[name]: value,
					};
				} else {
					return item;
				}
			})
		);
	};

	const addNewExperience = () => {
		setExperience(
			experience.concat([
				{
					position: '',
					company: '',
					startDate: '',
					endDate: '',
					description: '',
				},
			])
		);
	};

	const deleteExperience = (key) => {
		setExperience(experience.filter((item, index) => key !== index));
	};

	// Education
	const updateEducation = (e, val) => {
		const name = e.target.name;
		const value = e.target.value;

		setEducation(
			education.map((item, index) => {
				if (index === val) {
					return {
						...item,
						[name]: value,
					};
				} else {
					return item;
				}
			})
		);
	};

	const addNewEducation = () => {
		setEducation(
			education.concat([
				{
					school: '',
					course: '',
					startDate: '',
					endDate: '',
				},
			])
		);
	};

	const deleteEducation = (key) => {
		setEducation(education.filter((item, index) => key !== index));
	};

	// skills
	const updateSkills = (e, val) => {
		const value = e.target.value;

		setSkills(
			skills.map((skill, index) => {
				if (index === val) {
					return value;
				} else {
					return skill;
				}
			})
		);
	};

	const addNewSkill = () => {
		setSkills(skills.concat(''));
	};

	const deleteSKill = (key) => {
		setSkills(
			skills.filter((item, index) => {
				key !== index;
			})
		);
	};

	let state = {
		personalInfo: personalInfo,
		experience: experience,
		education: education,
		skills: skills,
	};

	return (
		<div className="p-10 bg-gray-300 font-sans flex flex-col justify-center items-center ">
			<CVForm
				info={state}
				getPersonalInfo={updatePersonalInfo}
				getExperience={updateExperience}
				addExperience={addNewExperience}
				deleteExperience={deleteExperience}
				getEducation={updateEducation}
				addEducation={addNewEducation}
				deleteEducation={deleteEducation}
				getSkills={updateSkills}
				addSkill={addNewSkill}
				deleteSkill={deleteSKill}
			/>
			<CVPreview info={state} />
		</div>
	);
};

export default Main;
