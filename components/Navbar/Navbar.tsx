import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useTransition } from 'react-spring';

import { Logo } from '../../lib/icons/Logo';
import { Hamburger } from '../../lib/icons/Hamburger';

import {
	Nav,
	NavbarContainer,
	LogoContainer,
	Hr,
	HamburgerContainer,
	NavLinkContainer,
	NavLink,
	Span,
} from './Navbar.styled';

import Modal from './Modal/Modal';

const Navbar = () => {
	const [showModal, setshowModal] = useState<boolean>(false);

	const router = useRouter();

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
					<Link href='/' passHref>
						<LogoContainer>
							<Logo />
						</LogoContainer>
					</Link>
					<HamburgerContainer
						showModal={showModal}
						onClick={() => setshowModal(true)}>
						<Hamburger />
					</HamburgerContainer>
					<NavLinkContainer>
						<Hr />
						<Link href='/' passHref>
							<NavLink pathname={router.pathname}>
								<Span>00</Span> HOME
							</NavLink>
						</Link>
						<Link href='/destination' passHref>
							<NavLink pathname={router.pathname}>
								<Span>01</Span> DESTINATION
							</NavLink>
						</Link>
						<Link href='/crew' passHref>
							<NavLink pathname={router.pathname}>
								<Span>02</Span> CREW
							</NavLink>
						</Link>
						<Link href='/technology' passHref>
							<NavLink pathname={router.pathname}>
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
