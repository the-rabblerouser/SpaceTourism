import React, { useState } from 'react';
import type { NextPage } from 'next';

import styled from 'styled-components';

import Navbar from '../components/Navbar/Navbar';

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

const Img = styled.img`
	height: 170px;
	width: 170px;
	margin-top: 32px;

	@media (min-width: 768px) {
	}

	@media (min-width: 1224px) {
	}
`;

const PlanetToggleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 28px;
	width: 237.5px;
	margin-top: 26px;

	@media (min-width: 768px) {
	}

	@media (min-width: 1224px) {
	}
`;

const PlanetLink = styled.button`
	display: inline-block;
	height: 17px;
	padding-bottom: 30px;
	margin: 0;
	background: none;
	border: none;
	font-family: ${({ theme }) => theme.barlow};
	font-size: 14px;
	color: ${({ theme }) => theme.purple};
	line-height: 17px;
	letter-spacing: 2.3625px;
	cursor: pointer;

	&:hover {
		border-bottom: 3px solid ${({ theme }) => theme.grey};
	}

	@media (min-width: 768px) {
	}

	@media (min-width: 1224px) {
	}
`;

const Heading = styled.h2`
    height: 64px;
    width: 187px;
	font-family: ${({ theme }) => theme.bellefair};
	font-size: 56px;
    font-weight: 400;
    line-height: 64.18px;
    text-align: center;
	margin: 20px; 0 0 0;
	color: ${({ theme }) => theme.white};

	@media (min-width: 768px) {
		
	}

	@media (min-width: 1224px) {
		
	}
`;

const BodyText = styled.p`
	height: 125px;
	width: 327px;
	margin: 1px 0 0 0;
	font-family: ${({ theme }) => theme.barlow};
	font-style: normal;
	font-weight: 400;
	font-size: 15px;
	line-height: 167%;
	word-spacing: 1px;
	text-align: center;
	color: ${({ theme }) => theme.purple};

	@media (min-width: 768px) {
	}

	@media (min-width: 1224px) {
	}
`;

const Hr = styled.hr`
	height: 1px;
	width: 327px;
	left: 24px;
	top: 605px;
	border-radius: 0px;
	color: ${({ theme }) => theme.hrBlack};

	@media (min-width: 768px) {
	}

	@media (min-width: 1224px) {
	}
`;

interface StatTextTypes {
	marginTop?: string;
}

const StatText = styled.p<StatTextTypes>`
	font-family: ${({ theme }) => theme.barlow};
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 17px;
	letter-spacing: 2.362499952316284px;
	text-align: center;
	text-transform: uppercase;
	color: ${({ theme }) => theme.purple};
	margin-top: ${({ marginTop }) => marginTop};

	@media (min-width: 768px) {
	}

	@media (min-width: 1224px) {
	}
`;

const Stat = styled.p`
	font-family: ${({ theme }) => theme.bellefair};
	font-size: 28px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px;
	letter-spacing: 0px;
	text-align: center;
	color: ${({ theme }) => theme.white};
	margin: 0;

	@media (min-width: 768px) {
	}

	@media (min-width: 1224px) {
	}
`;

const destination: NextPage = () => {
	return (
		<>
			<Body>
				<Navbar />
				<main>
					<Container>
						<SubHeading>
							<Span>01</Span> PICK YOUR DESTINATION
						</SubHeading>
						<Img src='./assets/destination/image-moon.png' />
						<PlanetToggleContainer>
							<PlanetLink>MOON</PlanetLink>
							<PlanetLink>MARS</PlanetLink>
							<PlanetLink>EUROPA</PlanetLink>
							<PlanetLink>TITAN</PlanetLink>
						</PlanetToggleContainer>
						<Heading>MOON</Heading>
						<BodyText>
							See our planet as you&apos;ve never seen it before. A perfect
							relaxing trip away to help regain perspective and come back
							refreshed. While you&apos;re there, take in some history by
							visiting the Luna 2 and Apollo 11 landing sites.
						</BodyText>
						<Hr />
						<StatText>AVG. DISTANCE</StatText>
						<Stat>384,400 km</Stat>
						<StatText marginTop='2rem'>Est. travel time</StatText>
						<Stat>3 DAYS</Stat>
					</Container>
				</main>
			</Body>
		</>
	);
};

export default destination;
