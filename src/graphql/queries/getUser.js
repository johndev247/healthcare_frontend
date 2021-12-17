import {gql} from "graphql-tag";

const GET_USER = gql`
  query getUser {
    getUser {
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
        updatedAt
      }
      appointments {
        userFullName
        illness
        date
        time
        requestDate
      }
    }
  }
`;
export default GET_USER;
