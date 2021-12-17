import styled from "styled-components";
import {Cards} from "../../Styles/gloabalStyle";
export const DoctorsSection = styled.div`
  display: flex;
  flex-flow: row;
  padding: 100px 3em 2em 3em;
  height: 500px;
  justify-content: space-evenly;
  flex-wrap: wrap;
  overflow: scroll;
  margin: 0 auto;
`;

export const UserCard = styled(Cards)`
  flex: 0 1 250px;
  display: flex;
  flex-flow: column;
  margin-bottom: 1em;
  align-self: center;
  @media only screen and (max-width: 600px) {
    display: flex;
    flex: 0 0 200px;
  }
  @media only screen and (max-width: 500px) {
    display: flex;
    flex: 0 0 70%;
  }
`;

export const UserImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  align-self: center;
`;

export const UserName = styled.h3`
  color: #449b62;
  align-self: center;
`;

export const Quote = styled.blockquote`
  padding: 0;
  margin: 0;
  align-self: center;
`;

export const AppointmentButton = styled.div`
  height: 30px;
  background-color: #083076;
  margin-top: 10px;
  color: #fff;
  padding: 1px 3px;
  text-align: center;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
