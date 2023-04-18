import {
	faEnvelope,
	faLocation,
	faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Personal = (props) => {
	const firstName = props.information.firstName;
	const lastName = props.information.lastName;
	const jobTitle = props.information.jobTitle;
	const email = props.information.email;
	const phoneNumber = props.information.phoneNumber;
	const address = props.information.address;

	return (
		<section className="flex flex-col gap-2">
			<h1 className="text-5xl font-bold text-black text-center">
				{firstName.toUpperCase() + ' ' + lastName.toUpperCase()}
			</h1>
			<h3 className="text-center text-xl font-medium">
				{jobTitle.toUpperCase()}
			</h3>
			<hr />
			<div className="flex items-center justify-center gap-4">
				<div className="flex items-center gap-1">
					<FontAwesomeIcon icon={faPhone} /> {phoneNumber}
				</div>
				<div className="flex items-center gap-2">
					<FontAwesomeIcon icon={faEnvelope} />
					{email}
				</div>
				<div className="flex items-center gap-2">
					<FontAwesomeIcon icon={faLocation} />
					{address}
				</div>
			</div>
			<hr />
		</section>
	);
};

export default Personal;
