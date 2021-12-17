import styled from "styled-components";
export const DashboardSection = styled.div`
  display: flex;
  flex-flow: row;
  padding: 100px 3em 2em 3em;
  height: 80vh;
`;

export const DashboardBg = styled.div`
  width: 90vw;
  border: 1px solid #00000022;
  padding: 10px;
  display: flex;
  flex-flow: row;
  margin: 0 auto;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    flex-flow: column;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const DashboardButton = styled.div`
  width: 150px;
  height: 30px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 10px;
  color: #083076;
  cursor: pointer;
`;

export const InputBox = styled.input`
  width: 200px;
  border: 0.2px solid #00000033;
  outline: none;
  height: 30px;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 18px;
  color: #00000088;
`;

export const Results = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  min-width: 200px;
  margin-top: 10px;
  padding: 10px;
  border: 0.2px solid #00000033;
  /* justify-content: center; */
  @media screen and (min-width: 768px) {
    margin-left: 100px;
  }
`;
