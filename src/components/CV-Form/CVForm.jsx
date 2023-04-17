import React from 'react';
import Experience from './Experience';
import PersonalInfo from './PersonalInfo';

const CVForm = (props) => {
	return (
		<form className="bg-slate-100 p-4 rounded-lg shadow-2xl w-[350px] sm:w-[80vw]">
			<PersonalInfo
				personalInfo={props.info.personalInfo}
				updatePersonalInfo={props.getPersonalInfo}
			/>
			<Experience />
		</form>
	);
};

export default CVForm;
