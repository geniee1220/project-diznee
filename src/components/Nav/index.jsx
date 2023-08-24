import Logo from '../Logo';

import { useEffect, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import * as S from './Nav.styles';

function Nav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState('');

  // 쿼리스트링을 검색창에 표시
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  return (
    <S.NavWrapper>
      <Logo />

      {pathname === '/' ? (
        <S.LoginButton>Login</S.LoginButton>
      ) : (
        <S.Input
          type="text"
          className="nav__input"
          spellCheck="false"
          placeholder="검색"
          value={searchValue}
          onChange={handleSearch}
        />
      )}
    </S.NavWrapper>
  );
}

export default Nav;
