import React, { lazy } from "react";
import { Link } from "react-router-dom";
import "../../css/style.css";

const MenteeManagementCard = lazy(() =>
  import("./MenteeManagementCard.component")
);

export default class HostManagement extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <aside>
          <ul>
            <li>
              <Link to="">Appointment</Link>
            </li>
            <li>
              <Link to="">Workshop</Link>
            </li>
          </ul>
        </aside>
        <section>
          <MenteeManagementCard />
          <MenteeManagementCard />
          <MenteeManagementCard />
        </section>
      </div>
    );
  }
}
