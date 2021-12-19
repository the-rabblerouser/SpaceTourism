import React, { useState } from 'react';
import type { NextPage } from 'next';

import styled from 'styled-components';

import Navbar from '../components/Navbar/Navbar';

export const Body = styled.div`
	height: 100vh;
	background-color: #0b0d17;
	background-image: url('/assets/technology/background-technology-mobile.jpg');
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;

	@media (min-width: 768px) {
		background-image: url('/assets/technology/background-technology-tablet.jpg');
	}

	@media (min-width: 1224px) {
		background-image: url('/assets/technology/background-technology-desktop.jpg');
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	height: 88vh;

	@media (min-width: 768px) {
	}

	@media (min-width: 1224px) {
		display: grid;
		justify-content: space-evenly;
		align-items: start;
		height: 88vh;
		width: 100vw;
		grid-columns-template: 2fr 2fr;
		grid-rows-template: 3fr;
		grid-template-areas:
			'subheading img'
			'bodytext img'
			'toggle img';
	}
`;

export const SubHeading = styled.h6`
	display: flex;
	font-family: ${({ theme }) => theme.barlow};
	font-weight: 400;
	font-size: 16px;
	font-style: normal;
	font-weight: normal;
	color: ${({ theme }) => theme.white};
	line-height: 19.2px;
	letter-spacing: 2.7px;
	text-transform: uppercase;
	margin: 0 0 0 0;

	@media (min-width: 768px) {
	}

	@media (min-width: 1224px) {
		grid-area: subheading;
		justify-self: start;
		width: 300px;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		letter-spacing: 4.725px;
		margin: 76px 0 0 166px;
	}
`;

export const Span = styled.div`
	display: inline;
	opacity: 25%;
	margin-right: 16px;
	font-family: ${({ theme }) => theme.barlow};
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: 19px;
	letter-spacing: 2.7px;
	text-align: center;

	@media (min-width: 768px) {
	}

	@media (min-width: 1224px) {
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		letter-spacing: 4.725px;
	}
`;

export const Img = styled.img`
	width: 100%;
	height: 170px;
	justify-self: center;
	margin-top: 32px;

	@media (min-width: 768px) {
	}

	@media (min-width: 1224px) {
		height: 100%;
		width: 100%;
		margin-top: 0;
		margin-right: 137px;
	}
`;

export const ToggleContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 152px;
	height: 40px;
	margin-top: 34px;

	@media (min-width: 768px) {
	}

	@media (min-width: 1224px) {
	}
`;

export const ToggleIcon = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40px;
	width: 40px;
	font-family: ${({ theme }) => theme.bellefair};
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 18px;
	text-align: center;
	letter-spacing: 1px;
	background: none;
	border: 1px solid ${({ theme }) => theme.grey};
	border-radius: 100%;
	color: ${({ theme }) => theme.white};
	cursor: pointer;

	@media (min-width: 1224px) {
		height: 15px;
		width: 15px;
	}
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	height: 220px;
	width: 327px;
	margin: 26px 0 0 0;

	@media (min-width: 768px) {
	}

	@media (min-width: 1224px) {
	}
`;

export const Title = styled.h6`
	height: 18px;
	width: 100%;
	font-family: ${({ theme }) => theme.bellefair};
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	color: ${({ theme }) => theme.white};
	line-height: 18.34px;
	text-transform: uppercase;
	opacity: 0.5;
	text-align: center;
	margin: 26px 0 0 0;

	@media (min-width: 768px) {
	}

	@media (min-width: 1224px) {
	}
`;

export const Name = styled.h5`
	height: 28px;
	width: 327px;
	font-family: ${({ theme }) => theme.bellefair};
	font-family: Bellefair;
	font-size: 24px;
	font-style: normal;
	font-weight: normal;
	color: ${({ theme }) => theme.white};
	line-height: 28px;
	text-align: center;
	text-transform: uppercase;
	line-height: auto;
	letter-spacing: 0px;
	margin: 9px 0 0 0;

	@media (min-width: 768px) {
	}

	@media (min-width: 1224px) {
		width: 100%;
		font-style: normal;
		font-weight: normal;
		font-size: 56px;
		line-height: 64px;
		text-align: left;
		margin: 15px 0 0 0;
	}
`;

export const BodyText = styled.p`
	height: 175px;
	width: 100%;
	font-family: ${({ theme }) => theme.barlow};
	font-style: normal;
	font-weight: normal;
	font-size: 15px;
	line-height: 25px;
	text-align: center;
	color: ${({ theme }) => theme.purple};
	margin: 16px 0 0 0;

	@media (min-width: 768px) {
		grid-area: bodytext;
		height: 84px;
		width: 458px;
		font-size: 16px;
		line-height: 28px;
		text-align: center;
	}

	@media (min-width: 1224px) {
		font-style: normal;
		font-weight: normal;
		font-size: 18px;
		line-height: 32px;
		text-align: left;
		margin: 27px 0 0 0;
	}
`;

const technology: NextPage = () => {
	return (
		<>
			<Body>
				<Navbar />
				<main>
					<Container>
						<SubHeading>
							<Span>03</Span> SPACE LAUNCH 101
						</SubHeading>
						<Img
							src={`./assets/technology/image-launch-vehicle-landscape.jpg`}
						/>
						<ToggleContainer>
							<ToggleIcon>1</ToggleIcon>
							<ToggleIcon>2</ToggleIcon>
							<ToggleIcon>3</ToggleIcon>
						</ToggleContainer>
						<TextContainer>
							<Title>The Terminology</Title>
							<Name>Launch Vehicle</Name>
							<BodyText>
								A launch vehicle or carrier rocket is a rocket-propelled vehicle
								used to carry a payload from Earth's surface to space, usually
								to Earth orbit or beyond. Our WEB-X carrier rocket is the most
								powerful in operation. Standing 150 metres tall, it's quite an
								awe-inspiring sight on the launch pad!
							</BodyText>
						</TextContainer>
					</Container>
				</main>
			</Body>
		</>
	);
};

export default technology;
