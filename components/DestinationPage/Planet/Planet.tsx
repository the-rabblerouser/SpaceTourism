import React from 'react';

import {
	PlanetToggleContainer,
	PlanetLink,
	Heading,
	BodyText,
	Hr,
	StatContainer,
	StatText,
	Stat,
} from './Planet.styled';

import data from '../../../lib/data.json';

interface PlanetPropTypes {
	planets: string[];
	selected: string;
	setSelected: (planet: string) => void;
}

const Planet = ({ planets, selected, setSelected }: PlanetPropTypes) => {
	const planetToggle = (planet: string) => setSelected(planet);

	const destinations = data.destinations;

	return (
		<>
			<PlanetToggleContainer>
				{planets.map((planet) => {
					return (
						<PlanetLink
							key={planet}
							selected={selected}
							planet={planet}
							onClick={() => planetToggle(planet)}>
							{planet}
						</PlanetLink>
					);
				})}
			</PlanetToggleContainer>
			{destinations.map(({ name, description, distance, travel }) => {
				if (name.toUpperCase() === selected) {
					return (
						<React.Fragment key={name}>
							<Heading>{name.toUpperCase()}</Heading>
							<BodyText>{description}</BodyText>
							<Hr />
							<StatContainer>
								<div>
									<StatText>AVG. DISTANCE</StatText>
									<Stat>{distance.toUpperCase()}</Stat>
								</div>
								<div>
									<StatText marginTop='2rem'>Est. travel time</StatText>
									<Stat>{travel.toUpperCase()}</Stat>
								</div>
							</StatContainer>
						</React.Fragment>
					);
				}
			})}
		</>
	);
};

export default Planet;
