import React from 'react';

const Experience = (props) => {
	const workExperience = props.experience.map((job, index) => (
		<div>
			<div className="flex items-center justify-between">
				<h3 className="text-black text-lg font-bold">
					{job.position.toUpperCase()}
				</h3>
				<p className="text-black">
					{job.startDate} - {job.endDate}
				</p>
			</div>
			<p className="font-semibold text-lg">{job.company}</p>
			<p className="font-medium">{job.description}</p>
		</div>
	));

	return (
		<section className="my-4 text-black">
			<h2 className="text-center text-2xl text-black font-semibold">
				PROFESSIONAL EXPERIENCE
			</h2>
			<div className="flex flex-col gap-4 my-4">{workExperience}</div>
		</section>
	);
};

export default Experience;
