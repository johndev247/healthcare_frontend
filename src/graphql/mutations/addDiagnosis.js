import {gql} from "graphql-tag";

const ADD_DIAGNOSIS = gql`
  mutation addDiagnosisResult(
    $userFullName: String
    $status: String
    $illness: String
  ) {
    addDiagnosisResult(
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
