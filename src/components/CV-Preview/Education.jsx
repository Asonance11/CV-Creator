import React from 'react';

const Education = (props) => {
	const allEducation = props.education.map((degree, index) => (
		<div>
			<div className="flex items-center justify-between">
				<h3 className="text-black text-lg font-bold">
					{degree.course.toUpperCase()}
				</h3>
				<p className="text-black">
					{degree.startDate} - {degree.endDate}
				</p>
			</div>
			<p className="font-semibold text-lg">{degree.school}</p>
		</div>
	));

	return (
		<section className="my-4 text-black">
			<h2 className="text-center text-2xl text-black font-semibold">
				EDUCATION
			</h2>
			<div className="flex flex-col gap-4 my-4">{allEducation}</div>
			<hr />
		</section>
	);
};

export default Education;
