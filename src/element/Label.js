import styled from 'styled-components';

export const Label = styled.span`
    margin: 2px 4px;
    font-size: ${props => props.user ? '12px' : '14px'};
	color: ${props => props.user ? '#FF4949' : 'palevioletred'};
`;