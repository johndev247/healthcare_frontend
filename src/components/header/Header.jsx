import React from "react";
import {
  AppLogo,
  HeaderNav,
  HeaderSection,
  LoginButton,
  LoginRegister,
  MenuIcon,
  MenuIconClose,
  Nav,
  NavItems,
} from "./header.style";
import Logo from "../../assets/logo.png";
import {Link, useLocation} from "react-router-dom";
import {FaTimes, FaBars} from "react-icons/fa";
import {useQuery} from "@apollo/client";
import GET_USER from "../../graphql/queries/getUser";

const Header = ({show, setShow}) => {
  const {pathname} = useLocation();
  console.log(pathname);

  const {client, data, loading} = useQuery(GET_USER, {
    onError: (err) => console.log(err),
  });

  const handleLogout = () => {
    setShow(false);
    client.clearStore();
    localStorage.removeItem("AUTH_TOKEN");
  };

  return (
    <HeaderSection>
      <AppLogo src={Logo} />
      <HeaderNav show={show}>
        <Nav>
          {pathname !== "/dashboard" && pathname !== "/doctors" && (
            <>
              <Link
                onClick={() => setShow(false)}
                style={{textDecoration: "none"}}
                to="/"
              >
                <NavItems>Home</NavItems>
              </Link>
              <Link
                onClick={() => setShow(false)}
                style={{textDecoration: "none"}}
                to="/about"
              >
                <NavItems>About</NavItems>
              </Link>
              <Link
                onClick={() => setShow(false)}
                style={{textDecoration: "none"}}
                to="/researches"
              >
                <NavItems>Researches</NavItems>
              </Link>
            </>
          )}

          {pathname !== "/" &&
            pathname !== "/about" &&
            pathname !== "/researches" &&
            pathname !== "/login" &&
            pathname !== "/signup" && (
              <Link
                onClick={() => setShow(false)}
                style={{textDecoration: "none"}}
                to="/dashboard"
              >
                <NavItems>Dashboard</NavItems>
              </Link>
            )}

          {pathname !== "/" &&
            pathname !== "/about" &&
            pathname !== "/researches" &&
            pathname !== "/login" &&
            pathname !== "/signup" && (
              <Link
                onClick={() => setShow(false)}
                style={{textDecoration: "none"}}
                to="/doctors"
              >
                <NavItems>Doctors</NavItems>
              </Link>
            )}
        </Nav>
        <LoginRegister>
          {pathname !== "/signup" &&
            pathname !== "/dashboard" &&
            pathname !== "/doctors" && (
              <Link to="/signup">
                <LoginButton onClick={() => setShow(false)}>SignUp</LoginButton>
              </Link>
            )}
          {pathname !== "/login" &&
            pathname !== "/dashboard" &&
            pathname !== "/doctors" && (
              <Link to="/login">
                <LoginButton onClick={() => setShow(false)}>Login</LoginButton>
              </Link>
            )}

          {pathname !== "/" &&
            pathname !== "/about" &&
            pathname !== "/researches" &&
            pathname !== "/login" &&
            pathname !== "/signup" && (
              <Link to="/">
                <LoginButton onClick={() => setShow(false)}>Logout</LoginButton>
              </Link>
            )}
        </LoginRegister>
        <MenuIconClose onClick={() => handleLogout()}>
          {show && <FaTimes />}
        </MenuIconClose>
      </HeaderNav>
      <MenuIcon onClick={() => setShow(true)}>{!show && <FaBars />}</MenuIcon>
    </HeaderSection>
  );
};

export default Header;
