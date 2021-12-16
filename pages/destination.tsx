import React, { useState } from 'react';
import type { NextPage } from 'next';

import styled from 'styled-components';

import Navbar from '../components/Navbar/Navbar';
import Planet from '../components/DestinationPage/Planet';

const Body = styled.div`
	height: 100vh;
	background-color: #0b0d17;
	background-image: url('/assets/destination/background-destination-mobile.jpg');
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;

	@media (min-width: 768px) {
		background-image: url('/assets/destination/background-destination-tablet.jpg');
	}

	@media (min-width: 1224px) {
		background-image: url('/assets/destination/background-destination-desktop.jpg');
	}
`;

const SubHeading = styled.h6`
	display: flex;
	align-items: center;
	font-family: ${({ theme }) => theme.barlow};
	font-weight: 400;
	font-size: 16px;
	color: ${({ theme }) => theme.white};
	line-height: 19.2px;
	letter-spacing: 2.7px;
	text-transform: uppercase;
	margin: 0 0 0 0;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (min-width: 768px) {
	}

	@media (min-width: 1224px) {
	}
`;

const Span = styled.div`
	display: inline;
	opacity: 25%;
	margin-right: 16px;

	@media (min-width: 768px) {
	}

	@media (min-width: 1224px) {
	}
`;

const destination: NextPage = () => {
	const [selected, setSelected] = useState<string>('MOON');
	const [planets] = useState<string[]>(['MOON', 'MARS', 'EUROPA', 'TITAN']);

	return (
		<>
			<Body>
				<Navbar />
				<main>
					<Container>
						<SubHeading>
							<Span>01</Span> PICK YOUR DESTINATION
						</SubHeading>
						<Planet
							planets={planets}
							selected={selected}
							setSelected={setSelected}
						/>
					</Container>
				</main>
			</Body>
		</>
	);
};

export default destination;
