import React, { lazy, useState, useEffect } from "react";
import "../../css/style.css";
import axios from "axios";
import "regenerator-runtime";

const MainNavbar = lazy(() => import("./Navbar.component"));
const MainSection = lazy(() => import("./MainSection.component"));
const EmptyPage = lazy(() => import("./EmptyPage.component"));
const MenteeManagementCard = lazy(() =>
  import("./MenteeManagementCard.component")
);
import { SideBar, FeatureItem } from "./SideBar.component";

export default function HostManagementPage(props) {
  const [appointments, setAppointments] = useState([]);
  const currentID = props.match.params.id;

  useEffect(async () => {
    const result = await axios.get("http://localhost:3000/appointments/");

    const data = result.data.filter(
      (appointment) =>
        appointment.mentorID === currentID && appointment.status === "process"
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
              <MenteeManagementCard appointmentInfo={appointment} key={index} />
            ))
          ) : (
            <EmptyPage>You do not host any appointments now.</EmptyPage>
          )}
        </MainSection>
      </div>
    </>
  );
}
