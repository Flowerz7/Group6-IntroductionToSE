import React, { lazy } from "react";
import { Link } from "react-router-dom";
import "../../css/style.css";

const SideBar = lazy(() => import("./SideBar.component"));
const MentorCard = lazy(() => import("./MentorCard.component"));

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

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
          <MentorCard />
          <MentorCard />
          <MentorCard />
        </section>
      </div>
    );
  }
}
