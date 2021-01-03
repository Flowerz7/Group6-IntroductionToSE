import React from "react";
import "../../css/navbar.css";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="nav-container">
        <nav>
          <span>Gặp</span>
          <ul>
            <li>
              <a href="">mentors</a>
            </li>
            <li>
              <a href="">workshops</a>
            </li>
            <li>
              <a href="">categories</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">notifications</a>
            </li>
            <li>
              <Link to="/login">account</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
