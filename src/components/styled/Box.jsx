import styled from 'styled-components';
export const Box = styled.div`
  border-radius: 10px;
  border: 2px solid #4cb4ee;
  left: 50%;
  min-height: 30vh;
  padding: 0.5em;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90%;

  @media (min-width: 400px) {
    width: 80%;
  }

  @media (min-width: 600px) {
    width: 60%;
  }

  @media (min-width: 800px) {
    width: 50%;
  }

  @media (min-width: 1100px) {
    width: 40%;
  }
`;
