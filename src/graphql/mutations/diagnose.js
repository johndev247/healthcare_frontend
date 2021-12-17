import {gql} from "graphql-tag";

const DIAGNOSE = gql`
  mutation diagnose($symptom: String) {
    diagnose(symptom: $symptom) {
      id
      userFullName
      status
      illness
      createdAt
    }
  }
`;
export default DIAGNOSE;
