import styled from 'styled-components';
export const Title = styled.h1`
  color: ${props => (props.variant === 'danger' ? '#fd1532' : '#4cb4ee')};
  font-size: 1.3em;
  margin-top: 0.5em;
  text-align: center;
`;
