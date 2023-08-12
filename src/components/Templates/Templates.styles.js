import styled from 'styled-components';

export const Container = styled.main`
  position: relative;
  display: block;
  min-height: calc(100vh - 250px);

  overflow-x: hidden;

  &:after {
    background: url('/images/home-background.png') center center / cover
      no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export const Contents = styled.div`
  padding: 0 calc(3.5vw + 5px);
`;
