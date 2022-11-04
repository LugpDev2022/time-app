import styled from 'styled-components';

export const BigNumber = styled.span`
  color: ${props => (props.variant === 'danger' ? '#fd1532' : '#4cb4ee')};
  font-size: 5em;
  font-weight: bold;
`;
