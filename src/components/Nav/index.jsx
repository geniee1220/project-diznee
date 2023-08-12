import { useEffect, useState } from 'react';
import Logo from '../Logo';
import * as S from './Nav.styles';

function Nav() {
  return (
    <S.NavWrapper>
      <Logo />
    </S.NavWrapper>
  );
}

export default Nav;
