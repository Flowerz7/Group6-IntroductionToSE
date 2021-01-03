import React, { lazy } from "react";
import { Link } from "react-router-dom";
import "../../css/style.css";

const MentorManagementCard = lazy(() =>
  import("./MentorManagementCard.component")
);

export default class JoinManagement extends React.Component {
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
          <MentorManagementCard />
          <MentorManagementCard />
          <MentorManagementCard />
        </section>
      </div>
    );
  }
}
