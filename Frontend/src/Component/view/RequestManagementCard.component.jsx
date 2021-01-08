import React, { lazy, useState, useEffect } from "react";
import axios from "axios";
import "regenerator-runtime";
import { useAuth } from "../../contexts/AuthContext";

const OverviewSection = lazy(() => import("./OverviewSection.component"));

export default function RequestManagementCard(props) {
  const menteeID = props.requirementInfo.menteeID;
  const id = props.requirementInfo._id;
  const [menteeInfo, setMenteeInfo] = useState({});
  const { currentUser, currentName } = useAuth();

  async function handleAccept() {
    // Send email to each other:
    const mentorEmail = currentUser.email;
    const menteeEmail = menteeInfo.email;
    const contentForMentor = `This is the email address of your mentee name ${menteeInfo.name}: ${menteeEmail}`;
    const contentForMentee = `This is the email address of your mentor name ${currentName}: ${mentorEmail}`;

    const sendToMentee = {
      content: contentForMentee,
      mailAddress: menteeEmail,
    };

    const sendToMentor = {
      content: contentForMentor,
      mailAddress: mentorEmail,
    };

    await axios.post("http://localhost:3000/mails/send", sendToMentor);
    await axios.post("http://localhost:3000/mails/send", sendToMentee);

    // Create a new appointment:
    switch (props.requirementInfo.type) {
      case "appointment":
        const appointment = {
          mentorID: props.requirementInfo.mentorID,
          menteeID: props.requirementInfo.menteeID,
          status: "process",
        };

        await axios.post("http://localhost:3000/appointments/add", appointment);
        break;
      case "workshop":
        break;
      case "friend":
        break;
    }

    handleDeny();
  }

  function handleDeny() {
    axios.delete(`http://localhost:3000/requirements/${id}`).then((res) => {
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
      <div className="description">
        <strong>Message: </strong>
        {props.requirementInfo.message}
      </div>
      <div className="btn-group">
        <button onClick={handleAccept} className="btn-secondary2">
          Accept
        </button>
        <button onClick={handleDeny} className="btn-primary2">
          Deny
        </button>
      </div>
    </div>
  );
}
