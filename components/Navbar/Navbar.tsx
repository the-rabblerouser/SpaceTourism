import React from 'react';
import Link from 'next/link';

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

const Navbar = () => {
	return (
		<>
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
		</>
	);
};

export default Navbar;
