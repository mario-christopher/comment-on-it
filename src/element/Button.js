import styled from 'styled-components';

export const Button = styled.button`
	background: ${props => props.primary ? 'palevioletred' : 'white'};
	color: ${props => props.primary ? 'white' : 'palevioletred'};
	padding: 0.5em;
  margin: 0.5em;
	border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;