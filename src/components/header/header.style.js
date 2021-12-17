import styled from "styled-components";

export const HeaderSection = styled.header`
  background-color: #152878;
  width: 100vw;
  height: 100px;
  display: flex;
  flex-flow: row;
  align-items: flex-end;
  justify-content: space-between;
  position: fixed;
  z-index: 3;
`;

export const AppLogo = styled.img`
  height: 100px;
  width: 45%;
  @media screen and (max-width: 768px) {
    width: 80vw;
  }
`;

export const HeaderNav = styled.nav`
  height: 50px;
  display: flex;
  flex-flow: row;
  justify-content: center;
  @media screen and (max-width: 768px) {
    position: absolute;
    background: #fff;
    display: flex;
    flex-flow: column;
    width: 50vw;
    right: ${({show}) => (show ? "0" : "-50vw")};
    top: 0;
    height: 100vh;
    justify-content: flex-start;
    transition: 0.3s ease-in-out;
  }
`;

export const MenuIcon = styled.div`
  position: absolute;
  color: #fff;
  right: 10px;
  top: 10px;
  font-size: 50px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MenuIconClose = styled.div`
  position: absolute;
  color: #152878;
  right: 10px;
  top: 10px;
  font-size: 50px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Nav = styled.ul`
  display: flex;
  position: relative;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-flow: column;
    width: 50vw;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px;
    height: 300px;
    margin-top: 5em;
  }
`;

export const NavItems = styled.li`
  list-style: none;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  margin: 0 10px;
  padding: 5px 10px;
  border-radius: 20px;
  cursor: pointer;
  background-color: #1c3d75;
  &:hover {
    background-color: #94b8ff22;
  }
  @media screen and (max-width: 768px) {
    margin: 10px 0;
    padding: 5px 10px;
    width: 40vw;
    text-align: center;
    background-color: #152878;
  }
`;

export const MidSecImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const LoginRegister = styled.div`
  position: absolute;
  padding: 5px;
  cursor: pointer;
  top: 5px;
  right: 10px;
  height: 30px;
  border-radius: 5px;
  background-color: #ffffff44;
  @media screen and (max-width: 768px) {
    position: absolute;
    top: 300px;
    height: 30px;
  }
`;

export const LoginButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #15287888;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-left: 5px;
  outline: none;
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    width: 100px;
    height: 30px;
    background-color: green;
    color: #fff;
    border: none;
    margin-bottom: 5px;
    outline: none;
    border-radius: 5px;
  }
`;
