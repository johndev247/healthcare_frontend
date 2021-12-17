import {gql} from "graphql-tag";

const ADD_DIAGNOSIS = gql`
  mutation addDiagnosis(
    $userFullName: String
    $status: String
    $illness: String
  ) {
    addDiagnosis(
      userFullName: $userFullName
      status: $status
      illness: $illness
    ) {
      userFullName
      status
      illness
      createdAt
    }
  }
`;
export default ADD_DIAGNOSIS;
