import React, { useState } from 'react';
import type { NextPage } from 'next';

import Navbar from '../components/Navbar/Navbar';
import Planet from '../components/DestinationPage/Planet/Planet';
import {
	Body,
	Container,
	SubHeading,
	Span,
	Img,
	PlanetContainer,
} from '../components/DestinationPage/Destination.styled';

const Destination: NextPage = () => {
	const [selected, setSelected] = useState<string>('MOON');
	const [planets] = useState<string[]>(['MOON', 'MARS', 'EUROPA', 'TITAN']);

	return (
		<>
			<Body>
				<Navbar />
				<main>
					<Container>
						<>
							<SubHeading>
								<Span>01</Span> PICK YOUR DESTINATION
							</SubHeading>
							<Img
								src={`./assets/destination/image-${selected.toLowerCase()}.webp`}
							/>
						</>
						<PlanetContainer>
							<Planet
								planets={planets}
								selected={selected}
								setSelected={setSelected}
							/>
						</PlanetContainer>
					</Container>
				</main>
			</Body>
		</>
	);
};

export default Destination;
