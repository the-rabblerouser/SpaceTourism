import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';

import Navbar from '../components/Navbar/Navbar';
import {
	Body,
	Container,
	SubHeading,
	Span,
	ImgContainer,
	Img,
	MediaContainer,
	ToggleContainer,
	ToggleIcon,
	TextContainer,
	Title,
	Name,
	BodyText,
} from '../components/TechnologyPage/Technology.styled';

import { lowerCase } from '../lib/utils/lowerCase';
import data from '../lib/data.json';

const technology: NextPage = () => {
	const [selected, setSelected] = useState<string>('Launch vehicle');
	const [photo, setPhoto] = useState<string>('landscape');

	const techData = data.technology;

	const photoSize = () =>
		window.innerWidth >= 1440 ? setPhoto('portrait') : setPhoto('landscape');

	useEffect(() => {
		photoSize();
	}, [photo]);

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
						<ImgContainer>
							<Img
								src={`./assets/technology/image-${lowerCase(
									selected
								)}-${photo}.jpg`}
							/>
						</ImgContainer>
						<MediaContainer>
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
												<Title>The Terminology...</Title>
												<Name>{name}</Name>
												<BodyText>{description}</BodyText>
											</React.Fragment>
										);
									}
								})}
							</TextContainer>
						</MediaContainer>
					</Container>
				</main>
			</Body>
		</>
	);
};

export default technology;
