import React, { lazy } from "react";
import avatar from "../../../public/imgs/sample.JPEG";

const OverviewSection = lazy(() => import("./OverviewSection.component"));

export default function MentorCard(props) {
  return (
    <div className="mentor-card">
      <OverviewSection
        avatar={props.info.avatarUrl}
        name={props.info.name}
        major={props.info.major}
        overview={props.info.overview}
      />
      <div className="btn-group">
        <button className="btn-primary2">Detail</button>
      </div>
    </div>
  );
}
