import React, { lazy } from "react";
import { Link } from "react-router-dom";
import "../../css/style.css";

const SideBar = lazy(() => import("./SideBar.component"));
const MentorManagementCard = lazy(() =>
  import("./MentorManagementCard.component")
);

export default class JoinManagementPage extends React.Component {
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
          <MentorManagementCard />
          <MentorManagementCard />
          <MentorManagementCard />
        </section>
      </div>
    );
  }
}
