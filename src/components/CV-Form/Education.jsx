import React from 'react';

const Education = (props) => {
	const education = props.education;
	const updateEducation = props.updateEducation;
	const addEducation = props.addEducation;
	const deleteEducation = props.deleteEducation;

	let allEducation = education?.map((item, index) => (
		<div className="flex flex-col gap-0" key={index}>
			<label htmlFor={`school${index}`}>School</label>
			<input
				type="text"
				name="school"
				id={`school${index}`}
				className="input"
				placeholder="Harvard University"
				maxLength={50}
				value={education.school}
				onChange={(e) => {
					updateEducation(e, index);
				}}
			/>
			<label htmlFor={`course${index}`}>Course of Study</label>
			<input
				type="text"
				name="course"
				id={`course${index}`}
				className="input"
				placeholder="Computer Science"
				value={education.course}
				onChange={(e) => {
					updateEducation(e, index);
				}}
				maxLength={30}
			/>
			<label htmlFor={`start-date${index}`}>Start Date</label>
			<input
				className="input"
				type="date"
				name="startDate"
				id={`start-date${index}`}
				placeholder=""
				value={education.startDate}
				onChange={(e) => {
					updateEducation(e, index);
				}}
			/>
			<label htmlFor={`end-date${index}`}>End Date</label>
			<input
				className="input"
				type="date"
				name="endDate"
				id={`end-date${index}`}
				placeholder=""
				value={education.endDate}
				onChange={(e) => {
					updateEducation(e, index);
				}}
			/>
			{index > 0 ? (
				<button
					type="button"
					className="bg-slate-900 w-full my-4 text-white p-2 rounded-md"
					onClick={(e) => {
						deleteEducation(index);
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
			<legend className="text-black font-semibold text-xl">Education</legend>
			{allEducation}
			<button
				type="button"
				className="bg-slate-900 w-full my-4 text-white p-2 rounded-md"
				onClick={addEducation}
			>
				Add
			</button>
		</fieldset>
	);
};

export default Education;
