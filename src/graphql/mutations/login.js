import {gql} from "graphql-tag";

const LOGIN = gql`
  mutation login($email: String, $password: String) {
    login(email: $email, password: $password) {
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
export default LOGIN;
