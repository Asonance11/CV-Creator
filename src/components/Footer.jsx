import React from 'react';

const Footer = () => {
	return (
		<footer className="absolute bottom-0 p-4 text-center bg-slate-900 w-full">
			<h1 className="text-gray-200 font-sans font-semi-bold text-lg">
				Made by{' '}
				<a
					className="underline text-blue-600"
					href="https://github.com/Asonance11"
				>
					Me
				</a>{' '}
				view code{' '}
				<a
					className="underline text-blue-600"
					href="https://github.com/Asonance11/CV-Creator"
				>
					Here
				</a>
			</h1>
		</footer>
	);
};

export default Footer;
