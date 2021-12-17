import React, {useEffect, useRef, useState} from "react";
import {Cards, ColumnDiv} from "../../Styles/gloabalStyle";
import {
  LoginBox,
  LoginBtn,
  LoginImage,
  LoginInput,
  LoginInputBg,
  LoginSection,
  LoginTitle,
} from "./login.style";
import {useHistory} from "react-router";
import loginImage from "../../assets/Login.svg";
import {useMutation} from "@apollo/client";
import LOGIN from "../../graphql/mutations/login";
import {user} from "../../index";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const history = useHistory();
  const handleChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const handleChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const [login, {loading}] = useMutation(LOGIN, {
    onError: (err) => {
      console.log(err);
      setError("Invalid Login Details");
    },
    onCompleted: ({login}) => {
      console.log(login);
      localStorage.setItem("user", JSON.stringify(login));
      localStorage.setItem("AUTH_TOKEN", login.token);
      user(login);

      history.push("/dashboard");
    },
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      email !== null &&
      password !== null &&
      email !== "" &&
      password !== ""
    ) {
      login({
        variables: {
          email,
          password,
        },
      });
    } else {
      setError("Please Fill Your Details");
    }
  };

  return (
    <LoginSection>
      <Cards>
        <LoginBox>
          <LoginImage src={loginImage} />
          <LoginInputBg>
            <ColumnDiv>
              <LoginTitle>Email</LoginTitle>
              <LoginInput
                onFocus={() => setError(null)}
                type="email"
                onChange={handleChangeEmail}
              />
            </ColumnDiv>
            <ColumnDiv>
              <LoginTitle>Password</LoginTitle>
              <LoginInput
                onFocus={() => setError(null)}
                type="password"
                value={password}
                onChange={handleChangePassword}
              />
            </ColumnDiv>
          </LoginInputBg>
          <LoginBtn onClick={(e) => handleLogin(e)}>Login</LoginBtn>
          {error !== null && (
            <h4
              style={{
                color: "red",
                padding: 0,
                marginBottom: "4em",
                textAlign: "center",
              }}
            >
              {error}
            </h4>
          )}
        </LoginBox>
      </Cards>
    </LoginSection>
  );
};

export default Login;
