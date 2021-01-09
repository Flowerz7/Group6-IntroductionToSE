import React, { lazy, useEffect, useState } from "react";
import "../../css/style.css";
import axios from "axios";
import "regenerator-runtime";

const MentorManagementCard = lazy(() =>
  import("./MentorManagementCard.component")
);

const MainSection = lazy(() => import("./MainSection.component"));
const EmptyPage = lazy(() => import("./EmptyPage.component"));
const MainNavbar = lazy(() => import("./Navbar.component"));
import { SideBar, FeatureItem } from "./SideBar.component";

export default function JoinManagementPage(props) {
  const [appointments, setAppointments] = useState([]);
  const currentID = props.match.params.id;

  useEffect(async () => {
    const result = await axios.get("http://localhost:3000/appointments/");

    const data = result.data.filter(
      (appointment) =>
        appointment.menteeID === currentID && appointment.status !== "reviewed"
    );

    setAppointments(data);
  }, []);

  return (
    <>
      <MainNavbar />
      <div className="container">
        <SideBar>
          <FeatureItem url="#" featureName="Appointment" />
          <FeatureItem url="#" featureName="Workshops" />
        </SideBar>
        <MainSection>
          {appointments.length > 0 ? (
            appointments.map((appointment, index) => (
              <MentorManagementCard appointmentInfo={appointment} key={index} />
            ))
          ) : (
            <EmptyPage>You do not join any appointments now.</EmptyPage>
          )}
        </MainSection>
      </div>
    </>
  );
}
