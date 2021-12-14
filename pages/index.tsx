import type { NextPage } from 'next';

import {
	Heading1,
	SubHeading2,
} from '../components/GlobalThemeComponents.styled';

const Home: NextPage = () => {
	return (
		<>
			<main>
				<Heading1>Earth</Heading1>
				<SubHeading2>EUROPA</SubHeading2>
			</main>
		</>
	);
};

export default Home;
