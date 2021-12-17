import styled from "styled-components";
export const LoginSection = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  padding: 100px 3em 2em 3em;
  height: 80vh;
`;

export const LoginBox = styled.div`
  width: 200px;
  max-width: 300px;
  height: 450px;
  display: flex;
  flex-flow: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 80vw;
  }
`;

export const LoginImage = styled.img`
  width: 100%;
  height: 20vh;
`;

export const LoginInputBg = styled.div`
  margin-top: 40px;
  overflow: scroll;
`;

export const LoginTitle = styled.h5`
  margin: 5px 0;
`;

export const LoginInput = styled.input`
  width: 90%;
  border: none;
  outline: none;
  height: 30px;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 18px;
  color: #00000088;
`;

export const LoginBtn = styled.button`
  width: 100px;
  height: 30px;
  background-color: #152878;
  color: #fff;
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  margin-top: 10px;
`;
