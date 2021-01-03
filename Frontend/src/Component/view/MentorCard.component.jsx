import React from "react";
import avatar from "../../../public/imgs/sample.JPEG";

export default class MentorCard extends React.Component {
  render() {
    return (
      <div className="mentor-card">
        <div className="info-container">
          <img src={avatar} alt="" />
          <ul className="info">
            <li>
              <strong>Hoa Pham</strong>
            </li>
            <li>
              <strong>Major: </strong>Information Technology
            </li>
          </ul>
        </div>
        <div className="overview">
          <strong>Overview: </strong> Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Debitis, provident voluptatibus! Eligendi dolore
          ratione porro facilis, itaque quos ducimus vitae?
        </div>
        <div className="btn-group">
          <button className="btn-primary2">Detail</button>
        </div>
      </div>
    );
  }
}
