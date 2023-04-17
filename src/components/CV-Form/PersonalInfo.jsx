import React from 'react';

const PersonalInfo = () => {
	return (
		<fieldset className="flex flex-col gap-0">
			<legend className="text-black font-semibold text-xl">
				Personal Information
			</legend>
			<label htmlFor="first-name">First Name</label>
			<input
				className=" input"
				type="text"
				name="firstName"
				id="first-name"
				placeholder="John"
				maxLength={20}
			/>
			<label htmlFor="last-name">Last Name</label>
			<input
				className=" input"
				type="text"
				name="lastName"
				id="last-name"
				placeholder="Doe"
				maxLength={20}
			/>
			<label htmlFor="job-title">Job Title</label>
			<input
				className="input"
				type="text"
				name="jobTitle"
				id="job-title"
				placeholder="Junior Frontend Developer"
				maxLength={50}
			/>
			<label htmlFor="email">Email</label>
			<input
				className="input"
				type="email"
				name="email"
				id="email"
				placeholder="JohnDoe@example.com"
			/>
			<label htmlFor="address">Address</label>
			<input
				type="text"
				name="address"
				id="address"
				placeholder="21, Jump Street, Florida"
				className="input"
				maxLength={70}
			/>
			<label htmlFor="phone-number">Phone Number</label>
			<input
				type="tel"
				name="phone-number"
				id="phone-number"
				className="input"
			/>
		</fieldset>
	);
};

export default PersonalInfo;
