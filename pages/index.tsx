import type { NextPage } from 'next';

import styled from 'styled-components';

import Navbar from '../components/Navbar/Navbar';

import {
	SubHeading2,
	Heading2,
	BodyText,
} from '../components/GlobalThemeComponents.styled';

const Body = styled.div`
	height: 100vh;
	background-color: #0b0d17;
	background-image: url('/assets/home/background-home-mobile.jpg');
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;

	@media (min-width: 768px) {
		background-image: url('/assets/home/background-home-tablet.jpg');
	}

	@media (min-width: 1224px) {
		background-image: url('/assets/home/background-home-desktop.jpg');
		background-position: right;
		background-size: 65vw 100vh;
	}
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

const Oval = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 150px;
	width: 150px;
	border-radius: 100%;
	margin-top: 10rem;
	font-family: ${({ theme }) => theme.bellefair};
	font-size: 20px;
	word-spacing: 1px;
	letter-spacing: 1.25px;
	background-color: ${({ theme }) => theme.white};
	color: ${({ theme }) => theme.black};

	@media (min-width: 768px) {
	}

	@media (min-width: 1224px) {
	}
`;

const Home: NextPage = () => {
	return (
		<>
			<Body>
				<Navbar />
				<main>
					<Container>
						<SubHeading2 margin='0'>SO, YOU WANT TO TRAVEL TO</SubHeading2>
						<Heading2 margin='1rem 0 0 0'>SPACE</Heading2>
						<BodyText margin='1rem 0 0 0' width='327px' height='150px'>
							Let&apos;s face it; if you want to go to space, you might as well
							genuinely go to outer space and not hover kind of on the edge of
							it. Well sit back, and relax because we&apos;ll give you a truly
							out of this world experience!
						</BodyText>
						<Oval>EXPLORE</Oval>
					</Container>
				</main>
			</Body>
		</>
	);
};

export default Home;
