import React from 'react';

const Skills = (props) => {
	const allSkills = props.skills.map((skill, index) => (
		<li key={index + 10}>{skill[index]}</li>
	));

	return (
		<section>
			<h2>Skills</h2>
			{allSkills}
		</section>
	);
};

export default Skills;
