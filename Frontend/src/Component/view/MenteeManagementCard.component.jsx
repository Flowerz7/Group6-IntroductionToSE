import React, { lazy } from "react";
import avatar from "../../../public/imgs/sample.JPEG";

const OverviewSection = lazy(() => import("./OverviewSection.component"));

export default class MenteeManagementCard extends React.Component {
  render() {
    const name = "Hoa Pham";
    const major = "Information Technology";
    const overview =
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, provident voluptatibus! Eligendi dolore ratione porro facilis, itaque quos ducimus vitae?";

    return (
      <div className="mentor-card">
        <OverviewSection
          avatar={avatar}
          name={name}
          major={major}
          overview={overview}
        />
        <div className="btn-group">
          <button className="btn-secondary2">Done</button>
          <button className="btn-primary2">Cancel</button>
        </div>
      </div>
    );
  }
}
