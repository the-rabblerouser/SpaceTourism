import type { NextPage } from 'next';

import styled from 'styled-components';

import { Logo } from '../lib/icons/Logo';

const Body = styled.div`
	height: 100vh;
	background-color: #000;
	background-image: url('/assets/home/background-home-mobile.jpg');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	@media (min-width: 768px) {
		background-image: url('/assets/home/background-home-tablet.jpg');
	}

	@media (min-width: 1224px) {
		background-image: url('/assets/home/background-home-desktop.jpg');
	}
`;

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100vw;
	height: 96px;

	@media (min-width: 768px) {
	}

	@media (min-width: 1224px) {
	}
`;

const LogoContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100px;

	@media (min-width: 768px) {
	}

	@media (min-width: 1224px) {
	}
`;

const NavLinkContainer = styled.div`
	display: none;
	@media (min-width: 768px) {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		height: 100%;
		background-color: rgba(225, 225, 225, 0.04);
		width: 450px;
	}

	@media (min-width: 1224px) {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		height: 100%;
		width: 830px;
	}
`;

const NavLink = styled.a`
	font-family: ${({ theme }) => theme.barlow};
	color: ${({ theme }) => theme.white};
	font-size: 16px;
	letter-spacing: 2.7px;

	@media (min-width: 768px) {
	}

	@media (min-width: 1224px) {
	}
`;

const Span = styled.span`
	display: inline;
	font-family: ${({ theme }) => theme.barlow};
	font-weight: bold;
	color: ${({ theme }) => theme.white};

	@media (min-width: 768px) {
		display: none;
	}

	@media (min-width: 1224px) {
		display: inline;
	}
`;

const Home: NextPage = () => {
	return (
		<>
			<Body>
				<Nav>
					<LogoContainer>
						<Logo />
					</LogoContainer>

					<NavLinkContainer>
						<NavLink>
							<Span>00</Span> HOME
						</NavLink>
						<NavLink>
							<Span>01</Span> DESTINATION
						</NavLink>
						<NavLink>
							<Span>02</Span> CREW
						</NavLink>
						<NavLink>
							<Span>03</Span> TECHNOLOGY
						</NavLink>
					</NavLinkContainer>
				</Nav>
				<main></main>
			</Body>
		</>
	);
};

export default Home;
