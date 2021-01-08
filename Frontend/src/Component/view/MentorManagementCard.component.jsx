import React, { lazy, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "regenerator-runtime";

const OverviewSection = lazy(() => import("./OverviewSection.component"));

export default function MentorManagementCard(props) {
  const mentorID = props.appointmentInfo.mentorID;
  const id = props.appointmentInfo._id;
  const [mentorInfo, setMentorInfo] = useState({});
  const history = useHistory();

  async function handleReview() {
    const newAppointment = {
      mentorID: props.appointmentInfo.mentorID,
      menteeID: props.appointmentInfo.menteeID,
      status: "reviewed",
    };

    await axios.put(`http://localhost:3000/appointments/${id}`, newAppointment);

    history.go(0);
  }

  function handleCancel() {
    axios.delete(`http://localhost:3000/appointments/${id}`).then((res) => {
      history.go(0);
    });
  }

  useEffect(async () => {
    const result = await axios.get(
      `http://localhost:3000/profiles/${mentorID}`
    );
    setMentorInfo(result.data);
  }, []);

  return (
    <div className="mentor-card">
      <OverviewSection
        avatar={mentorInfo.imageUrl}
        name={mentorInfo.name}
        major={mentorInfo.major}
        overview={mentorInfo.overview}
      />
      <div className="btn-group">
        {props.appointmentInfo.status === "done" && (
          <button onClick={handleReview} className="btn-secondary2">
            Review
          </button>
        )}
        <button onClick={handleCancel} className="btn-primary2">
          Cancel
        </button>
      </div>
    </div>
  );
}
