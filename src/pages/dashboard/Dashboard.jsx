import {useQuery, useMutation} from "@apollo/client";
import React, {useEffect, useState} from "react";
import {
  DashboardBg,
  DashboardButton,
  DashboardSection,
  DiagResultsSection,
  InputBox,
  Results,
} from "./dashbord.style";
import GET_USER from "../../graphql/queries/getUser";
import ClipLoader from "react-spinners/ClipLoader";
import {ColumnDiv, RowDiv} from "../../Styles/gloabalStyle";
import {LoginBtn} from "../login/login.style";
import DIAGNOSE from "../../graphql/mutations/diagnose";
import ADD_DIAGNOSIS from "../../graphql/mutations/addDiagnosis";
import GET_DIAGNOSIS from "../../graphql/queries/getDiagnosis";
import {Quote, UserCard, UserName} from "../doctors/doctors.style";

const Dashboard = () => {
  const [user, setuser] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [result, setResult] = useState(null);
  const [symptom, setSymptom] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    if (data) {
      setFirstName(data.firstName);
      setLastName(data.lastName);
    }
  }, []);

  const {data, loading} = useQuery(GET_USER, {
    onError: (err) => console.log(err),
    pollInterval: 500,
  });

  const [addDiagnosis, {loading: adding}] = useMutation(ADD_DIAGNOSIS, {
    onError: (err) => console.log(err),
    onCompleted: (data) => {
      console.log(data);
    },
  });

  const [diagnose, {loading: diagnosing}] = useMutation(DIAGNOSE, {
    onError: (err) => console.log(err),
    onCompleted: (data) => {
      setResult(data.diagnose);
      console.log(data);
      addDiagnosis({
        variables: {
          userFullName: firstName + " " + lastName,
          status: data.diagnose.status,
          illness: data.diagnose.illness,
        },
      });
    },
  });

  const handleDiadnose = (e) => {
    e.preventDefault();
    diagnose({
      variables: {
        symptom,
      },
    });
  };

  const {data: diagData, loading: gettingDiag} = useQuery(GET_DIAGNOSIS, {
    onError: (err) => console.log(err),
    onCompleted: (data) => console.log(data),
  });

  if (loading || gettingDiag) {
    return <ClipLoader loading={loading} size={150} />;
  }

  return (
    <DashboardSection>
      <DashboardBg>
        {data.getUser.userType == "doctor" ? (
          <ColumnDiv style={{marginRight: 20}}>
            <DashboardButton>
              <p style={{fontSize: 17}}>Update Profile</p>
            </DashboardButton>
            <DashboardButton>
              <p style={{fontSize: 17}}>Appointments</p>
            </DashboardButton>
            <DashboardButton
              style={{backgroundColor: "#083076", color: "#Fff"}}
            >
              <p style={{fontSize: 17}}>Diagnoses</p>
            </DashboardButton>
          </ColumnDiv>
        ) : (
          <DashboardButton>
            <p style={{fontSize: 17}}>Self Diagnosing</p>
          </DashboardButton>
        )}
        <h3>
          Welcome {data.getUser.userType == "doctor" && <>Dr.</>}
          {firstName + " " + lastName}
        </h3>
        {data.getUser.userType !== "doctor" && (
          <>
            <ColumnDiv style={{marginRight: 20}}>
              <h2 style={{textAlign: "center"}}>Enter Symptoms</h2>
              <InputBox
                value={symptom}
                onChange={(e) => setSymptom(e.target.value)}
              />
              <LoginBtn
                onClick={(e) => handleDiadnose(e)}
                style={{
                  alignSelf: "center",
                }}
              >
                Diagnose
              </LoginBtn>
            </ColumnDiv>
            <Results>
              <h2 style={{textAlign: "center", margin: 0, padding: 0}}>
                Result
              </h2>
              {result !== null && (
                <ColumnDiv>
                  <RowDiv>
                    <p>ID: </p>
                    <p> {result.id}</p>
                  </RowDiv>
                  <RowDiv>
                    <p style={{textAlign: "center", margin: 0, padding: 0}}>
                      Status:{" "}
                    </p>
                    <p style={{textAlign: "center", margin: 0, padding: 0}}>
                      {" "}
                      {result.status}
                    </p>
                  </RowDiv>
                  <RowDiv>
                    <p>Illness:</p>
                    <p> {result.illness}</p>
                  </RowDiv>
                </ColumnDiv>
              )}
            </Results>
          </>
        )}
        {data.getUser.userType == "doctor" && (
          <DiagResultsSection>
            {diagData.getDiagnosis.map((doc, i) => (
              <>
                <UserCard key={i}>
                  <RowDiv>
                    <Quote>ID: </Quote>
                    <UserName>{doc.id}</UserName>
                  </RowDiv>
                  <RowDiv>
                    <Quote>Patient:</Quote>
                    <UserName>{doc.userFullName}</UserName>
                  </RowDiv>
                  <RowDiv>
                    <Quote>Status: </Quote>
                    <Quote>{doc.status}</Quote>
                  </RowDiv>
                  <RowDiv>
                    <Quote>Illness: </Quote>
                    <Quote>{doc.illness}</Quote>
                  </RowDiv>
                  <RowDiv>
                    <Quote>Date: </Quote>
                    <Quote>
                      {new Date(doc.createdAt).toLocaleDateString()}
                    </Quote>
                  </RowDiv>
                </UserCard>
              </>
            ))}
          </DiagResultsSection>
        )}
      </DashboardBg>
    </DashboardSection>
  );
};

export default Dashboard;
