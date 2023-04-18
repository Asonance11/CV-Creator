import React from 'react';
import Education from './Education';
import Experience from './Experience';
import Personal from './Personal';
import Skills from './Skills';

const CVPreview = (props) => {
	return (
		<section
			id="cv-preview"
			className="mb-8 bg-white p-4  shadow-2xl w-[350px] sm:w-[80vw]"
		>
			<Personal infomation={props.personalInfo} />
			<Experience experience={props.experience} />
			<Education education={props.education} />
			<Skills skills={props.skills} />
		</section>
	);
};

export default CVPreview;
