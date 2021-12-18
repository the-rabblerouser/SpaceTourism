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

// import data from '../lib/data.json';

const crew: NextPage = () => {
	const [selected, setSelected] = useState<string>('Douglas Hurley');
	const [crew] = useState<string[]>([
		'Douglas Hurley',
		'Mark Shuttleworth',
		'Victor Glover',
		'Anousheh Ansari',
	]);

	const nameChange = (name: string) => {
		const nameSplit = name.split(/(\s+)/);
		const nameArr = [...nameSplit];
		const removedSpaces = nameArr.filter((item) => item !== ' ');

		const lowerCase = removedSpaces.map((word) => {
			return word[0].toLowerCase() + word.slice(1);
		});

		return `${lowerCase[0]}-${lowerCase[1]}`;
	};

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
							<Img src={`./assets/crew/image-${nameChange(selected)}.png`} />
						</ImgContainer>
						<TextContainer>
							<ToggleContainer>
								<ToggleIcon />
								<ToggleIcon />
								<ToggleIcon />
								<ToggleIcon />
							</ToggleContainer>
							<Title>COMMANDER</Title>
							<Name>DOUGLAS HURLEY</Name>
							<BodyText>
								Douglas Gerald Hurley is an American engineer, former Marine
								Corps pilot and former NASA astronaut. He launched into space
								for the third time as commander of Crew Dragon Demo-2.
							</BodyText>
						</TextContainer>
					</Container>
				</main>
			</Body>
		</>
	);
};

export default crew;
