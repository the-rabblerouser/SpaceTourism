import styled from 'styled-components';

export const Body = styled.div`
	height: 100vh;
	background-color: #0b0d17;
	background-image: url('/assets/crew/background-crew-mobile.jpg');
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;

	@media (min-width: 768px) {
		background-image: url('/assets/crew/background-crew-tablet.jpg');
	}

	@media (min-width: 1224px) {
		background-image: url('/assets/crew/background-crew-desktop.jpg');
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 24px;

	@media (min-width: 768px) {
		display: grid;
		justify-content: center;
		align-items: center;
		grid-columns-template: 1fr;
		grid-rows-template: 1fr 1fr 1fr;
		grid-template-areas:
			'subHeading'
			'bodyText'
			'img';
		height: 88vh;
		width: 100vw;
		margin-top: 0;
		overflow: hidden;
	}
	}

	@media (min-width: 1224px) {
		display: grid;
		justify-content: space-evenly;
		align-items: start;
		height: 88vh;
		width: 100vw;
		grid-columns-template: 2fr 2fr;
		grid-rows-template: 3fr;
		grid-template-areas:
			'subheading img'
			'bodytext img'
			'toggle img';
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
		grid-area: subHeading;
		justify-self: start;
		width: 100vw;
		margin: 0 0 0 39px;
		font-size: 20px;
		line-height: 24px;
		letter-spacing: 3.375px;
	}

	@media (min-width: 1224px) {
		grid-area: subheading;
		justify-self: start;
		width: 300px;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		letter-spacing: 4.725px;
		margin: 76px 0 0 166px;
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
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		letter-spacing: 4.725px;
	}
`;

export const ImgContainer = styled.div`
	display: flex;
	justify-content: center;
	height: 223px;
	width: 327px;
	margin-top: 32px;
	border-bottom: 1px solid ${({ theme }) => theme.hrBlack};

	@media (min-width: 768px) {
		grid-area: img;
		justify-self: center;
		height: 532px;
		width: 368.85333251953125px;
		border-bottom: none;
	}

	@media (min-width: 1224px) {
		grid-area: img;
		justify-self: start;
		align-self: start;
		width: 100%;
		height: 85vh;
	}
`;

export const Img = styled.img`
	height: 222px;
	width: 177.12px;
	justify-self: center;

	@media (min-width: 768px) {
		height: 532px;
		width: 368.85333251953125px;
		margin-top: 40px;
	}

	@media (min-width: 1224px) {
		height: 100%;
		width: 100%;
		margin-top: 0;
		margin-right: 137px;
	}
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 220px;
	width: 100%;

	@media (min-width: 768px) {
		width: 536px;
		height: 232px;
		grid-area: bodyText;
		display: grid;
		justify-self: center;
		grid-columns-template: 1fr;
		grid-rows-template: 1fr 1fr 1fr 1fr;
		grid-template-areas:
			'title'
			'name'
			'bodytext'
			'toggleContainer';
	}

	@media (min-width: 1224px) {
		width: 50vw;
		grid-area: bodytext;
		justify-content: start;
		margin-left: 166px;
	}
`;

export const ToggleContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 10px;
	width: 88px;

	@media (min-width: 768px) {
		grid-area: toggleContainer;
		justify-self: center;
		margin: 40px 0 0 0;
	}

	@media (min-width: 1224px) {
		justify-self: start;
		width: 132px;
		height: 15px;
		margin: 125px 0 0 0;
	}
`;

interface ToggleIconTypes {
	selected: string;
	crew: string;
}

export const ToggleIcon = styled.button<ToggleIconTypes>`
	height: 10px;
	width: 10px;
	border-radius: 100%;
	border: none;
	background: ${({ selected, crew }) =>
		crew === selected ? '#FFFFFF' : '#979797'};
	cursor: pointer;

	@media (min-width: 1224px) {
		height: 15px;
		width: 15px;
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
	margin: 32px 0 0 0;

	@media (min-width: 768px) {
		grid-area: title;
		font-size: 24px;
		line-height: 28px;
		text-align: center;
	}

	@media (min-width: 1224px) {
		height: 37px;
		font-style: normal;
		font-weight: normal;
		font-size: 32px;
		line-height: 37px;
		text-align: left;
		margin: 154px 0 0 0;
	}
`;

export const Name = styled.h5`
	height: 28px;
	width: 327px;
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
	margin: 8px 0 0 0;

	@media (min-width: 768px) {
		grid-area: name;
		height: 46px;
		width: 457px;
		font-size: 40px;
		line-height: 46px;
		text-align: center;
	}

	@media (min-width: 1224px) {
		width: 100%;
		font-style: normal;
		font-weight: normal;
		font-size: 56px;
		line-height: 64px;
		text-align: left;
		margin: 15px 0 0 0;
	}
`;

export const BodyText = styled.p`
	height: 100px;
	width: 80%;
	font-family: ${({ theme }) => theme.barlow};
	font-style: normal;
	font-weight: normal;
	font-size: 15px;
	line-height: 25px;
	text-align: center;
	word-spacing: 2px;
	color: ${({ theme }) => theme.purple};
	margin: 16px 0 0 0;

	@media (min-width: 768px) {
		grid-area: bodytext;
		height: 84px;
		width: 458px;
		font-size: 16px;
		line-height: 28px;
		text-align: center;
	}

	@media (min-width: 1224px) {
		font-style: normal;
		font-weight: normal;
		font-size: 18px;
		line-height: 32px;
		text-align: left;
		margin: 27px 0 0 0;
	}
`;
