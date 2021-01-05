import React, { lazy } from "react";
import avatar from "../../../public/imgs/sample.JPEG";

const OverviewSection = lazy(() => import("./OverviewSection.component"));

export default class ProfileSection extends React.Component {
  render() {
    const name = "Hoa Pham";
    const major = "Information Technology";
    const overview =
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, provident voluptatibus! Eligendi dolore ratione porro facilis, itaque quos ducimus vitae?";

    return (
      <section className="profile-section">
        <OverviewSection
          avatar={avatar}
          name={name}
          major={major}
          overview={overview}
        />
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
      </section>
    );
  }
}
