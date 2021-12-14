import type { NextPage } from 'next';

import styled from 'styled-components';

const Introduction = styled.div`
	color: ${({ theme }) => theme.purple};
	font-family: ${({ theme }) => theme.bellefair};
	font-size: 150px;
`;

const Home: NextPage = () => {
	return (
		<>
			<main>
				<Introduction>Earth</Introduction>
			</main>
		</>
	);
};

export default Home;
