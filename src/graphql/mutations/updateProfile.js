import {gql} from "graphql-tag";

const UPDATE_PROFILE = gql`
  mutation updateProfile(
    $speciality: String
    $yearOfExperience: String
    $dob: String
  ) {
    updateProfile(
      speciality: $speciality
      yearOfExperience: $yearOfExperience
      dob: $dob
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
export default UPDATE_PROFILE;
