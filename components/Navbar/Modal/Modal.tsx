import React from 'react';
import Link from 'next/link';

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
	return (
		<animated.div style={styles} onClick={onClose}>
			<ModalContainer>
				<ModalMain>
					<ModalLinkContainer>
						<CloseContainer>
							<CloseIcon />
						</CloseContainer>
						<Link href='/'>
							<ModalLink>
								<Span>00</Span> HOME
							</ModalLink>
						</Link>
						<Link href='/destination'>
							<ModalLink>
								<Span>01</Span> DESTINATION
							</ModalLink>
						</Link>
						<Link href='/crew'>
							<ModalLink>
								<Span>02</Span> CREW
							</ModalLink>
						</Link>
						<Link href='/technology'>
							<ModalLink>
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
