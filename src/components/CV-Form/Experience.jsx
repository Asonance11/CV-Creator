import React from 'react';

const Experience = (props) => {
	const experience = props.experience;
	const updateExperience = props.updateExperience;
	const addExperience = props.addExperience;
	const deleteExperience = props.deleteExperience;

	let allExperience = experience?.map((item, index) => (
		<div className="flex flex-col gap-0" key={index}>
			<label htmlFor={`position${index}`}>Position</label>
			<input
				className="input"
				type="text"
				name="position"
				id={`position${index}`}
				placeholder="Junior Backend Developer"
				maxLength={50}
				value={experience.position}
				onChange={(e) => {
					updateExperience(e, index);
				}}
			/>
			<label htmlFor={`company${index}`}>Company</label>
			<input
				className="input"
				type="text"
				name="company"
				id={`position${index}`}
				placeholder="Amazon"
				maxLength={30}
				value={experience.company}
				onChange={(e) => {
					updateExperience(e, index);
				}}
			/>
			<label htmlFor={`start-date${index}`}>Start Date</label>
			<input
				className="input"
				type="text"
				name="startDate"
				id={`start-date${index}`}
				placeholder="2020"
				value={experience.startDate}
				onChange={(e) => {
					updateExperience(e, index);
				}}
				maxLength={5}
			/>
			<label htmlFor={`end-date${index}`}>End Date</label>
			<input
				className="input"
				type="text"
				name="endDate"
				id={`end-date${index}`}
				placeholder="Present"
				value={experience.endDate}
				onChange={(e) => {
					updateExperience(e, index);
				}}
				maxLength={8}
			/>
			<label htmlFor={`description${index}`}>Job Description</label>
			<textarea
				className="w-full input resize-none"
				name="description"
				id={`description${index}`}
				cols="30"
				rows="10"
				placeholder="Job Description"
				value={experience.description}
				onChange={(e) => {
					updateExperience(e, index);
				}}
			></textarea>
			{index > 0 ? (
				<button
					type="button"
					className="bg-slate-900 w-full my-4 text-white p-2 rounded-md"
					onClick={(e) => {
						deleteExperience(index);
					}}
				>
					Delete
				</button>
			) : (
				''
			)}
			<hr className="my-4" />
		</div>
	));
	return (
		<fieldset className="my-4">
			<legend className="text-black font-semibold text-xl">Experience</legend>
			{allExperience}
			<button
				type="button"
				className="bg-slate-900 w-full my-4 text-white p-2 rounded-md"
				onClick={addExperience}
			>
				Add
			</button>
		</fieldset>
	);
};

export default Experience;
