import React from 'react';
import Education from './Education';
import Experience from './Experience';
import Personal from './Personal';
import Skills from './Skills';

const CVPreview = (props) => {
	return (
		<section
			id="cv-preview"
			className="mb-8 bg-white p-4  font-serif shadow-2xl w-full "
		>
			<Personal information={props.info.personalInfo} />
			<Experience experience={props.info.experience} />
			<Education education={props.info.education} />
			<Skills skills={props.info.skills} />
		</section>
	);
};

export default CVPreview;
