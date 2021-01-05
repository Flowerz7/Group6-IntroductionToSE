import React, { lazy } from "react";
import "../../css/style.css";

const MenteeManagementCard = lazy(() =>
  import("./MenteeManagementCard.component")
);

const MainNavbar = lazy(() => import("./Navbar.component"));
import { SideBar, FeatureItem } from "./SideBar.component";

export default function HostManagementPage() {
  return (
    <>
      <MainNavbar />
      <div className="container">
        <SideBar>
          <FeatureItem url="#" featureName="Appointment" />
          <FeatureItem url="#" featureName="Workshops" />
        </SideBar>
        <section>
          <MenteeManagementCard />
          <MenteeManagementCard />
          <MenteeManagementCard />
        </section>
      </div>
    </>
  );
}
