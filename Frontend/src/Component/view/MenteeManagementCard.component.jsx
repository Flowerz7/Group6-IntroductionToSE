import React, { lazy, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "regenerator-runtime";

const OverviewSection = lazy(() => import("./OverviewSection.component"));

export default function MenteeManagementCard(props) {
  const menteeID = props.appointmentInfo.menteeID;
  const id = props.appointmentInfo._id;
  const [menteeInfo, setMenteeInfo] = useState({});
  const history = useHistory();

  async function handleDone() {
    const newAppointment = {
      mentorID: props.appointmentInfo.mentorID,
      menteeID: props.appointmentInfo.menteeID,
      status: "done",
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
      `http://localhost:3000/profiles/${menteeID}`
    );
    setMenteeInfo(result.data);
  }, []);

  return (
    <div className="mentor-card">
      <OverviewSection
        avatar={menteeInfo.imageUrl}
        name={menteeInfo.name}
        major={menteeInfo.major}
        overview={menteeInfo.overview}
      />
      <div className="btn-group">
        <button onClick={handleDone} className="btn-secondary2">
          Done
        </button>
        <button onClick={handleCancel} className="btn-primary2">
          Cancel
        </button>
      </div>
    </div>
  );
}
