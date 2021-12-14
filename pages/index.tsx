import type { NextPage } from 'next';
import Link from 'next/link';

import styled from 'styled-components';

import { Logo } from '../lib/icons/Logo';
import { Hamburger } from '../lib/icons/Hamburger';

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

const Nav = styled.nav`
	display: flex;
	align-items: end;
	width: 100vw;
	height: 136px;

	@media (min-width: 768px) {
	}

	@media (min-width: 1224px) {
	}
`;

const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 96px;
	width: 100%;
`;

const LogoContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100px;
`;

const HamburgerContainer = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100px;
	background: none;
	border: none;
	cursor: pointer;

	@media (min-width: 768px) {
		display: none;
	}
`;

// const Hr = styled.hr`
// 	display: none;

// 	@media (min-width: 1224px) {
// 		display: inline;
// 		position: sticky;
// 		left: 167px;
// 		width: 473px;
// 		border-bottom: 0.0001px solid #979797;
// 		color: #979797;
// 	}
// `;

const NavLinkContainer = styled.div`
	display: none;

	@media (min-width: 768px) {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		height: 100%;
		width: 450px;

		background-color: rgba(225, 225, 225, 0.04);
	}

	@media (min-width: 1224px) {
		display: flex;
		justify-content: space-evenly;
		height: 100%;
		width: 830px;
	}
`;

const NavLink = styled.a`
	display: flex;
	align-items: center;
	height: 100%;
	font-family: ${({ theme }) => theme.barlow};
	color: ${({ theme }) => theme.white};
	font-size: 16px;
	letter-spacing: 2.7px;
	cursor: pointer;

	&:hover {
		border-bottom: 3px solid ${({ theme }) => theme.white};
	}

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
	margin-right: 10px;

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
					<NavbarContainer>
						<LogoContainer>
							<Logo />
						</LogoContainer>
						<HamburgerContainer>
							<Hamburger />
						</HamburgerContainer>
						{/* <Hr /> */}
						<NavLinkContainer>
							<Link href='/'>
								<NavLink>
									<Span>00</Span> HOME
								</NavLink>
							</Link>
							<Link href='/destination'>
								<NavLink>
									<Span>01</Span> DESTINATION
								</NavLink>
							</Link>
							<Link href='/crew'>
								<NavLink>
									<Span>02</Span> CREW
								</NavLink>
							</Link>
							<Link href='/technology'>
								<NavLink>
									<Span>03</Span> TECHNOLOGY
								</NavLink>
							</Link>
						</NavLinkContainer>
					</NavbarContainer>
				</Nav>
				<main></main>
			</Body>
		</>
	);
};

export default Home;
