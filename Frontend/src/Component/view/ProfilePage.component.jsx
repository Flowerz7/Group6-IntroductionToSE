import React, { lazy } from "react";
import "../../css/style.css";

const ProfileSection = lazy(() => import("./ProfileSection.component"));
const MainNavbar = lazy(() => import("./Navbar.component"));
import { SideBar, FeatureItem } from "./SideBar.component";

export default function ProfilePage() {
  return (
    <>
      <MainNavbar />
      <div className="container">
        <SideBar>
          <FeatureItem url="#" featureName="Update my profile" />
        </SideBar>
        <ProfileSection />
      </div>
    </>
  );
}
