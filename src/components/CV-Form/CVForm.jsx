import React from 'react';
import Education from './Education';
import Experience from './Experience';
import PersonalInfo from './PersonalInfo';
import Skills from './Skills';

const CVForm = (props) => {
	return (
		<form className="mb-8 bg-slate-100 p-4 rounded-lg shadow-2xl w-[350px] sm:w-[80vw]">
			<PersonalInfo
				personalInfo={props.info.personalInfo}
				updatePersonalInfo={props.getPersonalInfo}
			/>
			<Experience
				experience={props.info.experience}
				updateExperience={props.getExperience}
				addExperience={props.addExperience}
				deleteExperience={props.deleteExperience}
			/>
			<Education
				education={props.info.education}
				updateEducation={props.getEducation}
				addEducation={props.addEducation}
				deleteEducation={props.deleteEducation}
			/>
			<Skills
				skills={props.info.skills}
				updateSkills={props.getSkills}
				addSkill={props.addSkill}
				deleteSkill={props.deleteSkill}
			/>
		</form>
	);
};

export default CVForm;
