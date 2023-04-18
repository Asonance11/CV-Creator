import React from 'react';

const Skills = (props) => {
	const allSkills = props.skills.map((skill, index) => (
		<li key={index + 10}>{skill[index]}</li>
	));

	return (
		<section className="my-4 text-black">
			<h2 className="text-center text-2xl text-black font-semibold">SKILLS</h2>
			{allSkills}
		</section>
	);
};

export default Skills;
