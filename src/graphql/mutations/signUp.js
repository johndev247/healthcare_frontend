import {gql} from "graphql-tag";

const SIGN_UP = gql`
  mutation signUp(
    $firstName: String
    $lastName: String
    $userType: String
    $gender: String
    $email: String
    $password: String
  ) {
    signUp(
      firstName: $firstName
      lastName: $lastName
      userType: $userType
      gender: $gender
      email: $email
      password: $password
    ) {
      id
      token
      firstName
      lastName
      userType
      gender
      email
      createdAt
    }
  }
`;
export default SIGN_UP;
