import React, { useState } from 'react';
import Link from 'next/link';

import { useTransition, animated } from 'react-spring';
import styled from 'styled-components';

import { Logo } from '../../lib/icons/Logo';
import { Hamburger } from '../../lib/icons/Hamburger';
import { CloseIcon } from '../../lib/icons/CloseIcon';

import {
	Nav,
	NavbarContainer,
	LogoContainer,
	HamburgerContainer,
	NavLinkContainer,
	NavLink,
	Span,
} from './Navbar.styled';

export const ModalContainer = styled.div`
	display: flex;
	justify-content: end;
	align-items: end;
	height: 100vh;
	width: 100vw;
`;

export const ModalMain = styled.div`
	display: flex;
	justify-content: end;
	align-items: start;
	height: 100vh;
	width: 254px;
	background-color: rgba(255, 255, 255, 0.44);
`;

const ModalLinkContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-content: start;
	height: 30vh;
	width: 450px;
	margin: 0.5rem 0 0 3rem;

	@media (min-width: 768px) {
	}

	@media (min-width: 1224px) {
	}
`;

const ModalLink = styled.a`
	display: flex;
	align-items: center;
	height: 100%;
	font-family: ${({ theme }) => theme.barlow};
	color: ${({ theme }) => theme.white};
	font-size: 16px;
	letter-spacing: 2.7px;
	cursor: pointer;
`;

export const CloseContainer = styled.button`
	display: flex;
	justify-content: end;
	align-items: center;
	height: 100%;
	width: 90%;
	margin-right: 2rem;
	background: none;
	border: none;
	cursor: pointer;

	@media (min-width: 768px) {
		display: none;
	}
`;

// const Span = styled.span`
// 	display: inline;
// 	font-family: ${({ theme }) => theme.barlow};
// 	font-weight: bold;
// 	color: ${({ theme }) => theme.white};
// 	margin-right: 10px;

// 	@media (min-width: 768px) {
// 		display: none;
// 	}

// 	@media (min-width: 1224px) {
// 		display: inline;
// 	}
// `;

const Navbar = () => {
	const [showModal, setshowModal] = useState<boolean>(false);

	const transitions = useTransition(showModal, {
		from: { opacity: 0, transform: 'translateX(240px)' },
		enter: {
			opacity: 1,
			height: '100vh',
			width: '100vw',
			zindex: '1',
			position: 'fixed',
			top: '0',
			transform: 'translateX(0px)',
		},
		leave: { opacity: 0, transform: 'translateX(240px)' },
	});
	return (
		<>
			<Nav>
				<NavbarContainer>
					<LogoContainer>
						<Logo />
					</LogoContainer>
					<HamburgerContainer
						showModal={showModal}
						onClick={() => setshowModal(true)}>
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

			{transitions(
				(styles, item) =>
					item && (
						<animated.div style={styles} onClick={() => setshowModal(false)}>
							<ModalContainer>
								<ModalMain>
									<ModalLinkContainer>
										<CloseContainer>
											<CloseIcon />
										</CloseContainer>
										<Link href='/'>
											<ModalLink>
												<Span>00</Span> HOME
											</ModalLink>
										</Link>
										<Link href='/destination'>
											<ModalLink>
												<Span>01</Span> DESTINATION
											</ModalLink>
										</Link>
										<Link href='/crew'>
											<ModalLink>
												<Span>02</Span> CREW
											</ModalLink>
										</Link>
										<Link href='/technology'>
											<ModalLink>
												<Span>03</Span> TECHNOLOGY
											</ModalLink>
										</Link>
									</ModalLinkContainer>
								</ModalMain>
							</ModalContainer>
						</animated.div>
					)
			)}
		</>
	);
};

export default Navbar;
