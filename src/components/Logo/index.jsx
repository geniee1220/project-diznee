import { useNavigate } from 'react-router-dom';
import * as S from './Logo.styles';

function Logo() {
  const navigate = useNavigate();

  return (
    <S.Logo onClick={() => navigate('/')}>
      <img src="/images/logo.svg" alt="Disney Plus Logo" />
    </S.Logo>
  );
}

export default Logo;
