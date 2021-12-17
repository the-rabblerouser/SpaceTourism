import styled from 'styled-components';

export const PlanetToggleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 28px;
	width: 237.5px;
	margin-top: 26px;

	@media (min-width: 768px) {
		height: 34px;
		width: 285.5px;
		margin-top: 50px;
	}

	@media (min-width: 1224px) {
		height: 34px;
		width: 285.5px;
	}
`;

interface PlanetLinkTypes {
	selected: string;
	planet: string;
}

export const PlanetLink = styled.button<PlanetLinkTypes>`
	display: inline-block;
	height: 17px;
	padding-bottom: 30px;
	margin: 0;
	background: none;
	border-top: none;
	border-right: none;
	border-left: none;
	border-bottom: ${({ selected, planet }) =>
		planet === selected ? '3px solid #FFFFFF' : 'none'};
	font-family: ${({ theme }) => theme.barlow};
	font-size: 14px;
	color: ${({ theme }) => theme.purple};
	line-height: 17px;
	letter-spacing: 2.3625px;
	cursor: pointer;

	&:hover {
		border-bottom: 3px solid ${({ theme }) => theme.grey};
	}

	@media (min-width: 768px) {
		height: 19px;
		font-size: 16px;
		line-height: 19px;
		letter-spacing: 2.700000047683716px;
	}

	@media (min-width: 1224px) {
	}
`;

export const Heading = styled.h2`
	height: 64px;
	width: 100%;
	font-family: ${({ theme }) => theme.bellefair};
	font-size: 56px;
	font-weight: 400;
	line-height: 64.18px;
	text-align: center;
	margin: 20px 0 0 0;
	color: ${({ theme }) => theme.white};

	@media (min-width: 768px) {
		height: 92px;
		width: 266px;
		font-size: 80px;
		line-height: 92px;
		letter-spacing: 0px;
		margin: 32px 0 0 0;
	}

	@media (min-width: 1224px) {
		margin: 37px 0 14px 0;
		font-size: 100px;
		line-height: 115px;
		letter-spacing: 0px;
		text-align: left;
	}
`;

export const BodyText = styled.p`
	width: 257px;
	margin: 1px 0 0 0;
	font-family: ${({ theme }) => theme.barlow};
	font-style: normal;
	font-weight: 400;
	font-size: 15px;
	line-height: 25px;
	text-align: center;
	color: ${({ theme }) => theme.purple};

	@media (min-width: 768px) {
		height: 84px;
		width: 573px;
		font-size: 19px;
		line-height: 28px;
		letter-spacing: 0px;
		word-spacing: 2px;
	}

	@media (min-width: 1224px) {
		height: 128px;
		width: 444px;
		font-size: 19px;
		line-height: 32px;
		letter-spacing: 1px;
		text-align: left;
	}
`;

export const Hr = styled.hr`
	height: 1px;
	width: 327px;
	border-radius: 0px;
	color: ${({ theme }) => theme.hrBlack};

	@media (min-width: 768px) {
		display: none;
	}

	@media (min-width: 1224px) {
	}
`;

export const StatContainer = styled.div`
	@media (min-width: 768px) {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: end;
		height: 90px;
		width: 573px;
		margin-top: 49px;
		border-top: 1px solid ${({ theme }) => theme.hrBlack};
	}

	@media (min-width: 1224px) {
		justify-content: flex-start;
		margin-top: 54px;
		padding-top: 28px;
	}
`;

interface StatTextTypes {
	marginTop?: string;
}

export const StatText = styled.p<StatTextTypes>`
	font-family: ${({ theme }) => theme.barlow};
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 17px;
	letter-spacing: 2.362499952316284px;
	text-align: center;
	text-transform: uppercase;
	color: ${({ theme }) => theme.purple};
	margin-top: ${({ marginTop }) => marginTop};

	@media (min-width: 768px) {
		margin-top: 0;
	}

	@media (min-width: 1224px) {
		text-align: left;
		margin-right: 160px;
	}
`;

export const Stat = styled.p`
	font-family: ${({ theme }) => theme.bellefair};
	font-size: 28px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px;
	letter-spacing: 0px;
	text-align: center;
	color: ${({ theme }) => theme.white};
	margin: 0;

	@media (min-width: 768px) {
	}

	@media (min-width: 1224px) {
		text-align: left;
	}
`;
