import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  button {
    position: absolute;
    width: 40px;
    height: 40px;
    top: -30px;
    background-color: #000;
    right: 0;
    z-index: 1;
  }
`;

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  max-height: calc(100% - 250px);
  z-index: -1;
  opacity: 0.65;
  border: none;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
