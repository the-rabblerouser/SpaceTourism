import React, { useState } from 'react';
import type { NextPage } from 'next';

import styled from 'styled-components';

import Navbar from '../components/Navbar/Navbar';

import data from '../lib/data.json';

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
		align-self: start;
		margin-left: 38px;
		font-size: 20px;
		line-height: 24px;
		letter-spacing: 3.375px;
	}

	@media (min-width: 1224px) {
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
		font-weight: bold;
		font-size: 20px;
		line-height: 24px;
		letter-spacing: 3.375px;
	}

	@media (min-width: 1224px) {
	}
`;

export const Img = styled.img`
	width: 100%;
	height: 170px;
	justify-self: center;
	margin-top: 32px;

	@media (min-width: 768px) {
		width: 768px;
		height: 310px;
	}

	@media (min-width: 1224px) {
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
		width: 210px;
		height: 60px;
	}

	@media (min-width: 1224px) {
	}
`;

interface ToggleIconTypes {
	selected: string;
	tech: string;
}

export const ToggleIcon = styled.button<ToggleIconTypes>`
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
	background: ${({ selected, tech }) =>
		tech === selected ? '#FFFFFF' : 'none'};
	border: 1px solid ${({ theme }) => theme.grey};
	border-radius: 100%;
	color: ${({ selected, tech }) => (tech === selected ? '#0B0D17' : '#FFFFFF')};
	cursor: pointer;

	@media (min-width: 768px) {
		height: 60px;
		width: 60px;
		font-size: 24px;
		line-height: 28px;
		text-align: center;
		letter-spacing: 1.5px;
	}

	@media (min-width: 1224px) {
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
		margin: 44px 0 0 0;
		width: 458px;
		height: 237px;
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
		font-size: 16px;
		line-height: 19px;
		letter-spacing: 2.7px;
	}

	@media (min-width: 1224px) {
	}
`;

export const Name = styled.h5`
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
		font-size: 40px;
		line-height: 46px;
	}

	@media (min-width: 1224px) {
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
		font-size: 16px;
		line-height: 28px;
	}

	@media (min-width: 1224px) {
	}
`;

const technology: NextPage = () => {
	const [selected, setSelected] = useState<string>('Launch vehicle');
	const [launchTech] = useState<string[]>([
		'Launch vehicle',
		'Spaceport',
		'Space capsule',
	]);

	const techData = data.technology;

	const nameChange = (name: string) => {
		const nameSplit = name.split(/(\s+)/);
		const nameArr = [...nameSplit];

		if (nameArr.length <= 1) {
			return name.toLowerCase();
		} else {
			const removedSpaces = nameArr.filter((item) => item !== ' ');

			const lowerCase = removedSpaces.map((word) => {
				return word[0].toLowerCase() + word.slice(1);
			});

			return `${lowerCase[0]}-${lowerCase[1]}`;
		}
	};

	const techToggle = (tech: string) => setSelected(tech);

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
							src={`./assets/technology/image-${nameChange(
								selected
							)}-landscape.jpg`}
						/>
						<ToggleContainer>
							{techData.map((tech, i) => (
								<ToggleIcon
									key={tech.name}
									selected={selected}
									onClick={() => techToggle(tech.name)}
									tech={tech.name}>
									{i + 1}
								</ToggleIcon>
							))}
						</ToggleContainer>
						<TextContainer>
							{techData.map(({ name, description }) => {
								if (name === selected) {
									return (
										<React.Fragment key={name}>
											<Title>The Terminology</Title>
											<Name>{name}</Name>
											<BodyText>{description}</BodyText>
										</React.Fragment>
									);
								}
							})}
						</TextContainer>
					</Container>
				</main>
			</Body>
		</>
	);
};

export default technology;
