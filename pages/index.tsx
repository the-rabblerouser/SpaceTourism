import type { NextPage } from 'next';

import styled from 'styled-components';

import Navbar from '../components/Navbar/Navbar';

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

const Home: NextPage = () => {
	return (
		<>
			<Body>
				<Navbar />
				<main></main>
			</Body>
		</>
	);
};

export default Home;
