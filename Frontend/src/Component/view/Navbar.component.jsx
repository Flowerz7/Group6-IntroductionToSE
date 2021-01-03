import React from "react";
import "../../css/navbar.css";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

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
              <a href="">account</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
