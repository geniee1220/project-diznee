import styled from 'styled-components';

export const NavWrapper = styled.nav`
  /* position: fixed; */
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  /* background-color: ${(props) => (props.isShow ? '#090b13' : 'transparent')};
   */
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
`;
