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

import { useDispatch, useSelector } from 'react-redux';
import { setUser, removeUser } from '../../store/userSlice';

import * as S from './Nav.styles';

function Nav() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);

  const initialUser = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : {};

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (pathname === '/') navigate('/main');
      } else {
        // navigate('/');
      }
    });
  }, [auth, navigate, pathname]);

  // 쿼리스트링을 검색창에 표시
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(
          setUser({
            id: result.user.uid,
            email: result.user.email,
            name: result.user.displayName,
            photo: result.user.photoURL,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        localStorage.removeItem('user');
        navigate('/');
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
        <>
          <S.Input
            type="text"
            className="nav__input"
            spellCheck="false"
            placeholder="검색"
            value={searchValue}
            onChange={handleSearch}
          />
          <S.SignOutButton onClick={() => signOut(auth)}>
            <S.UserImg src={userData.photoUrl} alt={userData.displayName} />
            <S.DropDown>
              <span onClick={handleLogout}>로그아웃</span>
            </S.DropDown>
          </S.SignOutButton>
        </>
      )}
    </S.NavWrapper>
  );
}

export default Nav;
