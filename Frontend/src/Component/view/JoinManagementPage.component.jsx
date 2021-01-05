import React, { lazy } from "react";
import "../../css/style.css";

const MentorManagementCard = lazy(() =>
  import("./MentorManagementCard.component")
);
const MainNavbar = lazy(() => import("./Navbar.component"));
import { SideBar, FeatureItem } from "./SideBar.component";

export default function JoinManagementPage() {
  return (
    <>
      <MainNavbar />
      <div className="container">
        <SideBar>
          <FeatureItem url="#" featureName="Appointment" />
          <FeatureItem url="#" featureName="Workshops" />
        </SideBar>
        <section>
          <MentorManagementCard />
          <MentorManagementCard />
          <MentorManagementCard />
        </section>
      </div>
    </>
  );
}
