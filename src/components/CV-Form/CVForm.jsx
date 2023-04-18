import html2pdf from 'html2pdf.js';
import React from 'react';
import Education from './Education';
import Experience from './Experience';
import PersonalInfo from './PersonalInfo';
import Skills from './Skills';

const CVForm = (props) => {
	function printPreview() {
		const element = document.getElementById('cv-preview');
		let opt = {
			margin: 1,
			filename: 'myCV.pdf',
			image: { type: 'jpeg', quality: 0.98 },
			html2canvas: { scale: 2 },
			jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
		};
		html2pdf().set(opt).from(element).save();
	}

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

			<button
				type="button"
				className="text-white p-4 bg-red-600 rounded-md w-full"
				onClick={printPreview}
			>
				Convert to PDF
			</button>
		</form>
	);
};

export default CVForm;
