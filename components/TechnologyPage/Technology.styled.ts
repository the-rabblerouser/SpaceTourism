import styled from 'styled-components';

export const Body = styled.div`
	height: 100vh;
	background-color: #0b0d17;
	background-image: url('/assets/technology/background-technology-mobile.jpg');
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;

	@media (min-width: 768px) {
		background-image: url('/assets/technology/background-technology-tablet.jpg');
	}

	@media (min-width: 1224px) {
		background-image: url('/assets/technology/background-technology-desktop.jpg');
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	height: 88vh;

	@media (min-width: 768px) {
	}

	@media (min-width: 1224px) {
		display: grid;
		justify-content: space-evenly;
		align-items: start;
		height: 88vh;
		width: 100vw;
		grid-columns-template: 50% 50%;
		grid-rows-template: 50% 50%;
		grid-template-areas:
			'subheading img'
			'media img';
	}
`;

export const SubHeading = styled.h6`
	display: flex;
	font-family: ${({ theme }) => theme.barlow};
	font-weight: 400;
	font-size: 16px;
	font-style: normal;
	font-weight: normal;
	color: ${({ theme }) => theme.white};
	line-height: 19.2px;
	letter-spacing: 2.7px;
	text-transform: uppercase;
	margin: 0 0 0 0;

	@media (min-width: 768px) {
		align-self: start;
		margin: 40px 0 0 38px;
		font-size: 20px;
		line-height: 24px;
		letter-spacing: 3.375px;
	}

	@media (min-width: 1224px) {
		grid-area: subheading;
		width: 305px;
		height: 34px;
		font-size: 28px;
		line-height: 34px;
		letter-spacing: 4.725px;
		margin: 76px 0 0 166.5px;
	}
`;

export const Span = styled.div`
	display: inline;
	opacity: 25%;
	margin-right: 16px;
	font-family: ${({ theme }) => theme.barlow};
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: 19px;
	letter-spacing: 2.7px;
	text-align: center;

	@media (min-width: 768px) {
		font-weight: bold;
		font-size: 20px;
		line-height: 24px;
		letter-spacing: 3.375px;
	}

	@media (min-width: 1224px) {
		font-size: 28px;
		line-height: 34px;
		letter-spacing: 4.725px;
	}
`;

export const ImgContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;

	@media (min-width: 768px) {
		margin-top: 136px;
	}

	@media (min-width: 1224px) {
		grid-area: img;
		width: 50vw;
	}
`;

export const Img = styled.img`
	width: 100%;
	height: 170px;
	justify-self: center;
	margin-top: 32px;

	@media (min-width: 768px) {
		width: 100vw;
		height: 310px;
	}

	@media (min-width: 1224px) {
		justify-self: end;
		margin-top: 0;
		width: 515px;
		height: 527px;
	}
`;

export const MediaContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;

@media (min-width: 768px) {
	margin-top: 44px;
}

@media (min-width: 1224px) {
    grid-area: media;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 50vh;
    width: 50vw;
`;

export const ToggleContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 152px;
	height: 40px;
	margin-top: 34px;

	@media (min-width: 768px) {
		width: 210px;
		height: 60px;
		margin-top: 56px;
	}

	@media (min-width: 1224px) {
		margin-top: 0;
		height: 100%;
		flex-direction: column;
		align-items: center;
		justify-content: start;
	}
`;

interface ToggleIconTypes {
	selected: string;
	tech: string;
}

export const ToggleIcon = styled.button<ToggleIconTypes>`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40px;
	width: 40px;
	font-family: ${({ theme }) => theme.bellefair};
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 18px;
	text-align: center;
	letter-spacing: 1px;
	background: none;
	background: ${({ selected, tech }) =>
		tech === selected ? '#FFFFFF' : 'none'};
	border: 1px solid ${({ theme }) => theme.grey};
	border-radius: 100%;
	color: ${({ selected, tech }) => (tech === selected ? '#0B0D17' : '#FFFFFF')};
	cursor: pointer;

	@media (min-width: 768px) {
		height: 60px;
		width: 60px;
		font-size: 24px;
		line-height: 28px;
		text-align: center;
		letter-spacing: 1.5px;
	}

	@media (min-width: 1224px) {
		height: 80px;
		width: 80px;
		margin-bottom: 32px;
	}
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	height: 220px;
	width: 327px;
	margin: 26px 0 0 0;

	@media (min-width: 768px) {
		margin: 44px 0 0 0;
		width: 458px;
		height: 237px;
	}

	@media (min-width: 1224px) {
		margin: 0 0 0 0;
		height: 100%;
		width: 470px;
	}
`;

export const Title = styled.h6`
	height: 18px;
	width: 100%;
	font-family: ${({ theme }) => theme.bellefair};
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	color: ${({ theme }) => theme.white};
	line-height: 18.34px;
	text-transform: uppercase;
	opacity: 0.5;
	text-align: center;
	margin: 26px 0 0 0;

	@media (min-width: 768px) {
		font-size: 16px;
		line-height: 19px;
		letter-spacing: 2.7px;
	}

	@media (min-width: 1224px) {
		margin: 11px 0 0 0;
		font-size: 16px;
		line-height: 19px;
		letter-spacing: 2.7px;
		text-align: left;
	}
`;

export const Name = styled.h5`
	font-family: ${({ theme }) => theme.bellefair};
	font-family: Bellefair;
	font-size: 24px;
	font-style: normal;
	font-weight: normal;
	color: ${({ theme }) => theme.white};
	line-height: 28px;
	text-align: center;
	text-transform: uppercase;
	line-height: auto;
	letter-spacing: 0px;
	margin: 9px 0 0 0;

	@media (min-width: 768px) {
		font-size: 40px;
		line-height: 46px;
	}

	@media (min-width: 1224px) {
		width: 100%;
		font-size: 56px;
		line-height: 64px;
		text-align: left;
	}
`;

export const BodyText = styled.p`
	height: 175px;
	width: 100%;
	font-family: ${({ theme }) => theme.barlow};
	font-style: normal;
	font-weight: normal;
	font-size: 15px;
	line-height: 25px;
	text-align: center;
	color: ${({ theme }) => theme.purple};
	margin: 16px 0 0 0;

	@media (min-width: 768px) {
		font-size: 16px;
		line-height: 28px;
	}

	@media (min-width: 1224px) {
		width: 444px;
		margin: 17px 0 0 0;
		font-size: 18px;
		line-height: 32px;
		word-spacing: 1.2px;
		text-align: left;
	}
`;
