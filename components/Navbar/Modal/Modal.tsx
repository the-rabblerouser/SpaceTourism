import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { animated } from 'react-spring';

import {
	ModalContainer,
	ModalMain,
	ModalLinkContainer,
	CloseContainer,
	ModalLink,
	Span,
} from './Modal.styled';
import { CloseIcon } from '../../../lib/icons/CloseIcon';

interface ModalTypes {
	styles: object;
	onClose: () => void;
}

const Modal = ({ styles, onClose }: ModalTypes) => {
	const router = useRouter();

	return (
		<animated.div style={styles} onClick={onClose}>
			<ModalContainer>
				<ModalMain>
					<ModalLinkContainer>
						<CloseContainer>
							<CloseIcon />
						</CloseContainer>
						<Link href='/' passHref>
							<ModalLink pathname={router.pathname}>
								<Span>00</Span> HOME
							</ModalLink>
						</Link>
						<Link href='/destination' passHref>
							<ModalLink pathname={router.pathname}>
								<Span>01</Span> DESTINATION
							</ModalLink>
						</Link>
						<Link href='/crew' passHref>
							<ModalLink pathname={router.pathname}>
								<Span>02</Span> CREW
							</ModalLink>
						</Link>
						<Link href='/technology' passHref>
							<ModalLink pathname={router.pathname}>
								<Span>03</Span> TECHNOLOGY
							</ModalLink>
						</Link>
					</ModalLinkContainer>
				</ModalMain>
			</ModalContainer>
		</animated.div>
	);
};

export default Modal;
