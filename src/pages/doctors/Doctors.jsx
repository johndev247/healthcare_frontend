import {useQuery} from "@apollo/client";
import React from "react";
import {
  AppointmentButton,
  DoctorsSection,
  Quote,
  UserCard,
  UserImage,
  UserName,
} from "./doctors.style";
import ClipLoader from "react-spinners/ClipLoader";
import GET_DOCTORS from "../../graphql/queries/getDoctors";
import Avatar from "../../assets/avatar.svg";
const Doctors = () => {
  const {data, loading} = useQuery(GET_DOCTORS, {
    onError: (err) => console.log(err),
    onCompleted: () => console.log(data),
    pollInterval: 500,
  });

  if (loading) {
    return <ClipLoader loading={loading} size={150} />;
  }

  return (
    <DoctorsSection>
      {data.getDoctors.map((doc, i) => (
        <UserCard key={i}>
          <UserImage src={Avatar} />
          <UserName>Dr. {doc.firstName + " " + doc.lastName}</UserName>
          <Quote>{doc.gender}</Quote>
          <AppointmentButton>Get Appointment</AppointmentButton>
        </UserCard>
      ))}
    </DoctorsSection>
  );
};

export default Doctors;
