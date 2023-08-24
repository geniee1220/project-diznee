import React from 'react';
import * as S from './Templates.styles';
import Nav from '../Nav';
import { Outlet } from 'react-router-dom';

function MainTemplates() {
  return (
    <S.Container>
      <Nav />
      <Outlet />
    </S.Container>
  );
}

export default MainTemplates;
