import styled from 'styled-components';

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
	background-color: rgba(255, 255, 255, 0.04);
`;

export const ModalLinkContainer = styled.div`
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

export const ModalLink = styled.a`
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
