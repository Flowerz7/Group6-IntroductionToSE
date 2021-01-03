import React, { lazy } from "react";
import { Link } from "react-router-dom";
import "../../css/home.css";

const MentorCard = lazy(() => import("./MentorCard.component"));

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <aside>
          <ul>
            <li>
              <Link to="/profile">Profile management</Link>
            </li>
            <li>
              <Link to="/host-management">Hosting management</Link>
            </li>
            <li>
              <Link to="/join-management">Joining managemet</Link>
            </li>
          </ul>
        </aside>
        <section>
          <MentorCard />
          <MentorCard />
          <MentorCard />
        </section>
      </div>
    );
  }
}
