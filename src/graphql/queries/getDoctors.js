import {gql} from "graphql-tag";

const GET_DOCTORS = gql`
  query getDoctors {
    getDoctors {
      id
      firstName
      lastName
      userType
      gender
      email
      profile {
        speciality
        yearOfExperience
        dob
      }
    }
  }
`;
export default GET_DOCTORS;
