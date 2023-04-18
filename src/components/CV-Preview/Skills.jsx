import React from 'react';

const Skills = (props) => {
	const allSkills = props.skills.map((skill, index) => (
		<li className="font-semibold" key={index + 10}>
			{skill}
		</li>
	));

	return (
		<section className="my-4 text-black">
			<h2 className="text-center text-2xl text-black font-semibold">SKILLS</h2>
			<div className="flex items-center justify-center gap-2 flex-wrap">
				{allSkills}
			</div>
		</section>
	);
};

export default Skills;
