import {gql} from "graphql-tag";

const GET_DIAGNOSIS = gql`
  query getDiagnosis {
    getDiagnosis {
      id
      userFullName
      status
      illness
      createdAt
    }
  }
`;
export default GET_DIAGNOSIS;
