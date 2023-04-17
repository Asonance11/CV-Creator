import React from 'react';
import PersonalInfo from './PersonalInfo';

const CVForm = () => {
	return (
		<form className="bg-slate-100 p-4 rounded-lg shadow-2xl w-[350px] sm:w-[80vw]">
			<PersonalInfo />
		</form>
	);
};

export default CVForm;
