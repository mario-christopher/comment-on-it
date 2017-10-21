import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`;

export const Progress = styled.div`
	display: inline-block;
	animation: ${rotate360} 1s linear infinite;
	padding: 5px;
	margin: 5px;
	font-size: 1.2rem;
`;