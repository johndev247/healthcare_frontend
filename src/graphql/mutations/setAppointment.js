import {gql} from "graphql-tag";

const SET_APPOINTMENT = gql`
  mutation setAppointment(
    $userFullName: String
    $illness: String
    $date: String
    $time: String
    $userId: String
  ) {
    setAppointment(
      userFullName: $userFullName
      illness: $illness
      date: $date
      time: $time
      userId: $userId
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
export default SET_APPOINTMENT;
