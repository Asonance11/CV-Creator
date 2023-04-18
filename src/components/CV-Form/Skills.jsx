import React from 'react';

const Skills = (props) => {
	const skills = props.skills;
	const updateSkills = props.updateSkills;
	const addSkill = props.addSkill;
	const deleteSkill = props.deleteSkill;

	let allSkills = skills.map((item, index) => (
		<div key={index} className="flex flex-col gap-0">
			<label htmlFor={`skill${index}`}>Skill</label>
			<input
				className="input"
				type="text"
				name="skill"
				id={`skill${index}`}
				placeholder={`Skill ${index + 1}`}
				maxLength={30}
				value={skills[index]}
				onChange={(e) => {
					updateSkills(e, index);
				}}
			/>
			<button
				type="button"
				onClick={(e) => {
					deleteSkill(index);
				}}
				className="bg-slate-900 w-full my-4 text-white p-2 rounded-md"
			>
				Delete
			</button>
			<hr className="my-4" />
		</div>
	));

	return (
		<fieldset className="my-4">
			<legend className="text-black font-semibold text-xl">Skills</legend>
			{allSkills}
			<button
				type="button"
				className="bg-slate-900 w-full my-4 text-white p-2 rounded-md"
				onClick={addSkill}
			>
				Add
			</button>
		</fieldset>
	);
};

export default Skills;
