import styled from 'styled-components';

// ******* Headings *******

export const Heading1 = styled.h1`
	font-family: ${({ theme }) => theme.bellefair};
	font-size: 150px;
	color: ${({ theme }) => theme.white};
`;

export const Heading2 = styled.h2`
	font-family: ${({ theme }) => theme.bellefair};
	font-size: 100px;
	color: ${({ theme }) => theme.white};
`;

export const Heading3 = styled.h3`
	font-family: ${({ theme }) => theme.bellefair};
	font-size: 56px;
	color: ${({ theme }) => theme.white};
`;

export const Heading4 = styled.h4`
	font-family: ${({ theme }) => theme.bellefair};
	font-size: 32px;
	color: ${({ theme }) => theme.white};
`;

export const Heading5 = styled.h5`
	font-family: ${({ theme }) => theme.barlow};
	font-size: 28px;
	letter-spacing: 4.72px;
	color: ${({ theme }) => theme.white};
`;

// ******* SubHeadings *******

export const SubHeading1 = styled.h6`
	font-family: ${({ theme }) => theme.bellefair};
	font-size: 26px;
	color: ${({ theme }) => theme.white};
`;

export const SubHeading2 = styled.h6`
	font-family: ${({ theme }) => theme.barlow};
	font-size: 16px;
	color: ${({ theme }) => theme.white};
	letter-spacing: 2.36px;
`;

// ******* Body Text *******

export const BodyText = styled.p`
	font-family: ${({ theme }) => theme.barlow};
	font-size: 16px;
	letter-spacing: 2.36px;
	color: ${({ theme }) => theme.white};
`;
