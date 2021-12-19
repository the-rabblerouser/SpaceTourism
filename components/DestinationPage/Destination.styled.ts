import styled from 'styled-components';

export const Body = styled.div`
	height: 100vh;
	background-color: #0b0d17;
	background-image: url('/assets/destination/background-destination-mobile.jpg');
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;

	@media (min-width: 768px) {
		background-image: url('/assets/destination/background-destination-tablet.jpg');
	}

	@media (min-width: 1224px) {
		background-image: url('/assets/destination/background-destination-desktop.jpg');
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (min-width: 768px) {
	}

	@media (min-width: 1224px) {
		display: grid;
		justify-content: space-between;
		height: 88vh;
		width: 100vw;
		grid-columns-template: 1fr 1fr 2fr;
		grid-rows-template: 2fr;
		grid-template-areas:
			'subheading planet planet'
			'moon planet planet';
	}
`;

export const SubHeading = styled.h6`
	display: flex;
	font-family: ${({ theme }) => theme.barlow};
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	color: ${({ theme }) => theme.white};
	line-height: 19.2px;
	letter-spacing: 2.7px;
	text-transform: uppercase;
	margin: 0 0 0 0;

	@media (min-width: 768px) {
		align-self: start;
		margin: 0 0 0 39px;
		font-size: 20px;
		line-height: 24px;
		letter-spacing: 3.375px;
	}

	@media (min-width: 1224px) {
		grid-area: subheading;
		margin: 76px 0 0 166.5px;
		font-family: Barlow Condensed;
		font-size: 28px;
		line-height: 34px;
		letter-spacing: 4.724999904632568px;
		text-align: left;
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
	letter-spacing: 2.700000047683716px;
	text-align: left;

	@media (min-width: 768px) {
		font-size: 20px;
		font-weight: 700;
		line-height: 24px;
		letter-spacing: 3.375px;
		text-align: left;
	}

	@media (min-width: 1224px) {
		font-size: 28px;
		line-height: 34px;
		letter-spacing: 4.724999904632568px;
		text-align: left;
	}
`;

export const Img = styled.img`
	height: 170px;
	width: 170px;
	margin-top: 32px;

	@media (min-width: 768px) {
		height: 300px;
		width: 300px;
		margin-top: 60px;
	}

	@media (min-width: 1224px) {
		grid-area: moon;
		align-self: center;
		justify-self: end;
		width: 445px;
		height: 445px;
		margin: 0 0 0 230px;
	}
`;

export const PlanetContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (min-width: 1224px) {
		align-items: start;
		grid-area: planet;
		height: 88vh;
	}
`;
