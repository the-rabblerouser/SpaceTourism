import type { NextPage } from 'next';

import styled, { ThemeConsumer } from 'styled-components';

import {
	Heading1,
	SubHeading2,
} from '../components/GlobalThemeComponents.styled';

const Nav = styled.nav`
	display: flex;
	justify-conent: space-between;
	align-items: center;
	width: 100vw;

	@media (min-width: 768px) {
		height: 96px;
	}

	@media (min-width: 1224px) {
	}
`;

const Home: NextPage = () => {
	return (
		<>
			<Nav></Nav>
			<main>
				<Heading1>Earth</Heading1>
				<SubHeading2>EUROPA</SubHeading2>
			</main>
		</>
	);
};

export default Home;
