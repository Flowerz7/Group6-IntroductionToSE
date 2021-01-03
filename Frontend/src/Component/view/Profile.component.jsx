import React, { lazy } from "react";
import { Link } from "react-router-dom";
import "../../css/style.css";

const ProfileSection = lazy(() => import("./ProfileSection.component"));

export default class Profile extends React.Component {
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
          <ProfileSection />
        </section>
      </div>
    );
  }
}
