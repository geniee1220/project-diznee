import Logo from '../Logo';

import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

import * as S from './Nav.styles';

function Nav() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (pathname === '/') navigate('/main');
      } else {
        navigate('/');
      }
    });
  }, []);

  // 쿼리스트링을 검색창에 표시
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <S.NavWrapper>
      <Logo />

      {pathname === '/' ? (
        <S.LoginButton onClick={handleAuth}>Login</S.LoginButton>
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
