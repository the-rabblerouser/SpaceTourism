import styled from 'styled-components';

interface GlobalStyleTypes {
	margin?: string;
	height?: string;
	width?: string;
}

// ******* Headings *******

export const Heading1 = styled.h1<GlobalStyleTypes>`
	font-family: ${({ theme }) => theme.bellefair};
	font-size: 150px;
	color: ${({ theme }) => theme.white};
`;

export const Heading2 = styled.h2<GlobalStyleTypes>`
	font-family: ${({ theme }) => theme.bellefair};
	font-size: 80px;

	margin: ${({ margin }) => margin};
	color: ${({ theme }) => theme.white};
`;

export const Heading3 = styled.h3<GlobalStyleTypes>`
	font-family: ${({ theme }) => theme.bellefair};
	font-size: 56px;
	color: ${({ theme }) => theme.white};
`;

export const Heading4 = styled.h4<GlobalStyleTypes>`
	font-family: ${({ theme }) => theme.bellefair};
	font-size: 32px;
	color: ${({ theme }) => theme.white};
`;

export const Heading5 = styled.h5<GlobalStyleTypes>`
	font-family: ${({ theme }) => theme.barlow};
	font-size: 28px;
	letter-spacing: 4.72px;
	color: ${({ theme }) => theme.white};
`;

// ******* SubHeadings *******

export const SubHeading1 = styled.h6<GlobalStyleTypes>`
	font-family: ${({ theme }) => theme.bellefair};
	font-size: 26px;
	color: ${({ theme }) => theme.white};
`;

export const SubHeading2 = styled.h6<GlobalStyleTypes>`
	font-family: ${({ theme }) => theme.barlow};
	width: ${({ width }) => width};
	font-size: 16px;
	margin: ${({ margin }) => margin};
	color: ${({ theme }) => theme.purple};
	letter-spacing: 2.36px;
`;

// ******* Body Text *******

export const BodyText = styled.p<GlobalStyleTypes>`
	height: ${({ height }) => height};
	width: ${({ width }) => width};
	margin: ${({ margin }) => margin};
	font-family: ${({ theme }) => theme.barlow};
	font-size: 18px;
	line-height: 32px;
	word-spacing: 1px;
	text-align: center;
	color: ${({ theme }) => theme.purple};
`;
