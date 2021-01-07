import React, { lazy } from "react";
import { useHistory } from "react-router-dom";

const OverviewSection = lazy(() => import("./OverviewSection.component"));

export default function MentorCard(props) {
  const history = useHistory();

  function handleViewProfile() {
    const userID = props.info.userID;

    history.push(`/profile/${userID}`);
  }

  return (
    <div className="mentor-card">
      <OverviewSection
        avatar={props.info.avatarUrl}
        name={props.info.name}
        major={props.info.major}
        overview={props.info.overview}
      />
      <div className="btn-group">
        <button onClick={handleViewProfile} className="btn-primary2">
          Detail
        </button>
      </div>
    </div>
  );
}
