import type { NextPage } from 'next';

import Navbar from '../components/Navbar/Navbar';
import {
	Body,
	Container,
	TextContainer,
	SubHeading,
	Heading,
	BodyText,
	Oval,
} from '../components/Home/Home.styled';

const Home: NextPage = () => {
	return (
		<>
			<Body>
				<Navbar />
				<main>
					<Container>
						<TextContainer>
							<SubHeading>SO, YOU WANT TO TRAVEL TO</SubHeading>
							<Heading>SPACE</Heading>
							<BodyText>
								Let&apos;s face it; if you want to go to space, you might as
								well genuinely go to outer space and not hover kind of on the
								edge of it. Well sit back, and relax because we&apos;ll give you
								a truly out of this world experience!
							</BodyText>
						</TextContainer>
						<Oval>EXPLORE</Oval>
					</Container>
				</main>
			</Body>
		</>
	);
};

export default Home;
