import React, { useState } from 'react';
import { NextPage } from 'next';

import Navbar from '../components/Navbar/Navbar';
import {
	Body,
	Container,
	SubHeading,
	Span,
	ImgContainer,
	Img,
	TextContainer,
	ToggleContainer,
	ToggleIcon,
	Title,
	Name,
	BodyText,
} from '../components/CrewPage/Crew.styled';

import { upperCase } from '../lib/utils/upperCase';
import data from '../lib/data.json';

const crew: NextPage = () => {
	const [selected, setSelected] = useState<string>('Douglas Hurley');
	const [crewMembers] = useState<string[]>([
		'Douglas Hurley',
		'Mark Shuttleworth',
		'Victor Glover',
		'Anousheh Ansari',
	]);

	const crewData = data.crew;

	const crewToggle = (crew: string) => setSelected(crew);

	return (
		<>
			<Body>
				<Navbar />
				<main>
					<Container>
						<SubHeading>
							<Span>02</Span> MEET YOUR CREW
						</SubHeading>
						<ImgContainer>
							<Img src={`./assets/crew/image-${upperCase(selected)}.png`} />
						</ImgContainer>
						<TextContainer>
							<ToggleContainer>
								{crewMembers.map((crew) => (
									<ToggleIcon
										key={crew}
										selected={selected}
										crew={crew}
										onClick={() => crewToggle(crew)}
									/>
								))}
							</ToggleContainer>
							{crewData.map(({ name, role, bio }) => {
								if (name === selected) {
									return (
										<React.Fragment key={name}>
											<Title>{role}</Title>
											<Name>{name}</Name>
											<BodyText>{bio}</BodyText>
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

export default crew;
