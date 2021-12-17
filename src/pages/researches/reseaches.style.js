import styled from "styled-components";

export const ResearchSection = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  padding: 100px 3em 2em 3em;
  height: 80vh;
  @media screen and (max-width: 768px) {
    flex-flow: column;
    padding: 100px 3em 1em 3em;
  }
`;

export const ResearchTextBg = styled.div`
  width: 48vw;
  height: 300px;
  background-color: #fff;
  margin-right: 1vw;
  border-radius: 10px;
  box-shadow: 1px 1px 24px -3px #00000022;
  @media screen and (max-width: 768px) {
    width: 80vw;
    margin-bottom: 2em;
  }
`;

export const ResearchText = styled.blockquote`
  overflow: scroll;
  height: 230px;
`;

export const ResearchImage = styled.img`
  width: 48vw;
  height: 300px;
  margin-left: 1vw;
  @media screen and (max-width: 768px) {
    width: 80vw;
  }
`;
