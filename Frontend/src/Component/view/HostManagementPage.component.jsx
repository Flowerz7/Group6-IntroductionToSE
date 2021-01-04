import React, { lazy } from "react";
import { Link } from "react-router-dom";
import "../../css/style.css";

const SideBar = lazy(() => import("./SideBar.component"));
const MenteeManagementCard = lazy(() =>
  import("./MenteeManagementCard.component")
);

export default class HostManagementPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const features = [
      { url: "", featureName: "Appointment" },
      { url: "", featureName: "Workshop" },
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
          <MenteeManagementCard />
          <MenteeManagementCard />
          <MenteeManagementCard />
        </section>
      </div>
    );
  }
}
