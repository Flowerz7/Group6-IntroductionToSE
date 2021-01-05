import React, { lazy } from "react";
import "../../css/style.css";

const MentorCard = lazy(() => import("./MentorCard.component"));
const MainNavbar = lazy(() => import("./Navbar.component"));
import { SideBar, FeatureItem } from "./SideBar.component.jsx";

export default function HomePage() {
  return (
    <>
      <MainNavbar />
      <div className="container">
        <SideBar>
          <FeatureItem
            url="/request-management"
            featureName="Requests management"
          />
          <FeatureItem
            url="/host-management"
            featureName="Hosting management"
          />
          <FeatureItem
            url="/join-management"
            featureName="Joining management"
          />
        </SideBar>
        <section>
          <MentorCard />
          <MentorCard />
          <MentorCard />
        </section>
      </div>
    </>
  );
}
