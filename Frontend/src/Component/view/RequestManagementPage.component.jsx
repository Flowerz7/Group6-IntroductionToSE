import React, { lazy } from "react";
import "../../css/style.css";

const MenteeManagementCard = lazy(() =>
  import("./MenteeManagementCard.component")
);

const MainNavbar = lazy(() => import("./Navbar.component"));
import { SideBar, FeatureItem } from "./SideBar.component";

export default function RequestManagementPage() {
  return (
    <>
      <MainNavbar />
      <div className="container">
        <SideBar>
          <FeatureItem url="#" featureName="Appointment requirements" />
          <FeatureItem url="#" featureName="Workshop requirements" />
          <FeatureItem url="#" featureName="Make friend requirements" />
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
