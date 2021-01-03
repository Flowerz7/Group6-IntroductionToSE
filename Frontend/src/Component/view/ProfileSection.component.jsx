import React from "react";
import avatar from "../../../public/imgs/sample.JPEG";

export default class ProfileSection extends React.Component {
  render() {
    return (
      <div className="profile-section">
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
        <div className="description">
          <strong>Description: </strong>Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Iste magnam labore magni alias vero laboriosam a
          aspernatur est possimus corporis modi fuga libero voluptatum, nulla
          consequuntur cumque optio. Possimus alias eius expedita temporibus
          qui, aliquid ducimus quibusdam recusandae cum quo voluptatum doloribus
          quas placeat excepturi velit! Maxime cumque quaerat sequi.
        </div>
        <div className="btn-group">
          <button className="btn-secondary2">Booking</button>
          <button className="btn-primary2">Add friend</button>
        </div>
      </div>
    );
  }
}
