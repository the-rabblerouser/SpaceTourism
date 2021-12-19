import React, { useState } from 'react';
import type { NextPage } from 'next';

import styled from 'styled-components';

import Navbar from '../components/Navbar/Navbar';

export const Body = styled.div`
	height: 100vh;
	background-color: #0b0d17;
	background-image: url('/assets/crew/background-crew-mobile.jpg');
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;

	@media (min-width: 768px) {
		background-image: url('/assets/crew/background-crew-tablet.jpg');
	}

	@media (min-width: 1224px) {
		background-image: url('/assets/crew/background-crew-desktop.jpg');
	}
`;

const technology: NextPage = () => {
	return (
		<>
			<Body>
				<Navbar />
				<main></main>
			</Body>
		</>
	);
};

export default technology;
