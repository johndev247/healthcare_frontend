import React, {useState} from "react";
import {Cards, ColumnDiv, RowDiv} from "../../Styles/gloabalStyle";
import {
  LoginBox,
  LoginBtn,
  LoginImage,
  LoginInput,
  LoginInputBg,
  LoginSection,
  LoginTitle,
} from "../login/login.style";
import loginImage from "../../assets/Login.svg";
import {useMutation} from "@apollo/client";
import SIGN_UP from "../../graphql/mutations/signUp";
import {useHistory} from "react-router-dom";
import {user} from "../..";

const SignUp = () => {
  const [error, setError] = useState(null);
  const [value, setValue] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [genderValue, setGenderValue] = useState("");

  const history = useHistory();
  const setType = (args) => {
    setValue(args);
  };
  const setGender = (args) => {
    setGenderValue(args);
  };

  const [signUp, {loading}] = useMutation(SIGN_UP, {
    onError: (err) => console.log(err),
    onCompleted: ({signUp}) => {
      console.log(signUp);
      localStorage.setItem("AUTH_TOKEN", signUp.token);
      localStorage.setItem("user", JSON.stringify(signUp));
      user(signUp);

      history.push("/dashboard");
    },
  });

  const handlesignUp = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setError("Password Must Match");
    } else if (
      email.trim() !== "" &&
      fName.trim() !== "" &&
      lName.trim() !== "" &&
      genderValue.trim() !== "" &&
      value.trim() !== "" &&
      password.trim() !== "" &&
      password2.trim() !== ""
    ) {
      signUp({
        variables: {
          firstName: fName,
          lastName: lName,
          userType: value,
          email,
          gender: genderValue,
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
            <form>
              <ColumnDiv>
                <LoginTitle>First Name</LoginTitle>
                <LoginInput
                  type="text"
                  value={fName}
                  onChange={(e) => setFName(e.target.value)}
                />
              </ColumnDiv>
              <ColumnDiv>
                <LoginTitle>Last Name</LoginTitle>
                <LoginInput
                  type="text"
                  value={lName}
                  onChange={(e) => setLName(e.target.value)}
                />
              </ColumnDiv>
              <ColumnDiv>
                <LoginTitle>Gender</LoginTitle>
                <RowDiv>
                  <label>Male</label>
                  <LoginInput
                    style={{width: 15, height: 15}}
                    type="radio"
                    value="male"
                    onChange={() => setGender("male")}
                    checked={genderValue === "male"}
                  />
                  <label>Female</label>
                  <LoginInput
                    style={{width: 15, height: 15}}
                    type="radio"
                    value="female"
                    onChange={() => setGender("female")}
                    checked={genderValue === "female"}
                  />
                </RowDiv>
              </ColumnDiv>
              <hr />
              <ColumnDiv style={{marginTop: 10, marginBottom: 10}}>
                <LoginTitle>SignUp Type</LoginTitle>
                <RowDiv>
                  <label>Doctor</label>
                  <LoginInput
                    style={{width: 15, height: 15}}
                    type="radio"
                    value="doctor"
                    onChange={() => setType("doctor")}
                    checked={value === "doctor"}
                  />
                  <label>Patient</label>
                  <LoginInput
                    style={{width: 15, height: 15}}
                    type="radio"
                    value="patient"
                    onChange={() => setType("patient")}
                    checked={value === "patient"}
                  />
                </RowDiv>
              </ColumnDiv>
              <hr />
              <ColumnDiv>
                <LoginTitle>Email</LoginTitle>
                <LoginInput
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </ColumnDiv>
              <ColumnDiv>
                <LoginTitle>Password</LoginTitle>
                <LoginInput
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </ColumnDiv>
              <ColumnDiv>
                <LoginTitle>Confirm Password</LoginTitle>
                <LoginInput
                  type="password"
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                />
              </ColumnDiv>
            </form>
          </LoginInputBg>
          <LoginBtn onClick={(e) => handlesignUp(e)}>Sign Up</LoginBtn>
          {error !== null && (
            <h4
              style={{
                color: "red",
                padding: 0,
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

export default SignUp;
