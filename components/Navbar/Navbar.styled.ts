import styled from 'styled-components';

export const Nav = styled.nav`
	display: flex;
	align-items: start;
	width: 100vw;
	height: 136px;

	@media (min-width: 1224px) {
		align-items: end;
	}
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 96px;
	width: 100%;

	@media (min-width: 768px) {
		height: 96px;
	}

	@media (min-width: 1224px) {
	}
`;

export const LogoContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100px;
`;

interface HamburgerTypes {
	showModal: boolean;
}

export const HamburgerContainer = styled.button<HamburgerTypes>`
	display: ${({ showModal }) => (showModal ? 'none' : 'flex')};
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

// export const Hr = styled.hr`
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

export const NavLinkContainer = styled.div`
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

export const NavLink = styled.a`
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

export const Span = styled.span`
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
