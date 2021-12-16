import React, { useState } from 'react';
import Link from 'next/link';

import { useTransition } from 'react-spring';

import { Logo } from '../../lib/icons/Logo';
import { Hamburger } from '../../lib/icons/Hamburger';

import {
	Nav,
	NavbarContainer,
	LogoContainer,
	HamburgerContainer,
	NavLinkContainer,
	NavLink,
	Span,
} from './Navbar.styled';

import Modal from './Modal/Modal';

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
					item && <Modal styles={styles} onClose={() => setshowModal(false)} />
			)}
		</>
	);
};

export default Navbar;
