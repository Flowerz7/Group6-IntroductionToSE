import React, { lazy } from "react";
import { Link } from "react-router-dom";
import "../../css/style.css";

const ProfileSection = lazy(() => import("./ProfileSection.component"));
const SideBar = lazy(() => import("./SideBar.component"));

export default class ProfilePage extends React.Component {
  render() {
    const features = [
      { url: "/profile", featureName: "Profile management" },
      { url: "/host-management", featureName: "Hosting management" },
      { url: "/join-management", featureName: "Joining management" },
    ];

    const featureList = features.map((feature) => (
      <li>
        <Link to={feature.url}>{feature.featureName}</Link>
      </li>
    ));
    return (
      <div className="container">
        <SideBar features={featureList} />
        <section>
          <ProfileSection />
        </section>
      </div>
    );
  }
}
