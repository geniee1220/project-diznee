import React from 'react';
import * as S from './Templates.styles';
import Nav from '../Nav';

function MainTemplates({ children }) {
  return (
    <S.Container>
      <Nav />
      <S.Contents>{children}</S.Contents>
    </S.Container>
  );
}

export default MainTemplates;
