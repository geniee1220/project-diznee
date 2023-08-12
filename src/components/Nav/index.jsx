import { useEffect, useState } from 'react';
import Logo from '../Logo';
import * as S from './Nav.styles';

function Nav() {
  //   const [isShow, setIsShow] = useState(false);

  //   useEffect(() => {
  //     window.addEventListener('scroll', () => {
  //       if (window.scrollY > 50) {
  //         setIsShow(true);
  //       } else {
  //         setIsShow(false);
  //       }
  //     });
  //     return () => {
  //       window.removeEventListener('scroll', () => {});
  //     };
  //   }, []);

  return (
    <S.NavWrapper>
      <Logo />
    </S.NavWrapper>
  );
}

export default Nav;
