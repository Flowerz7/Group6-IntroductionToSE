import React, { lazy, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "regenerator-runtime";

const OverviewSection = lazy(() => import("./OverviewSection.component"));
import { ModalReview } from "./ModalForm.component";

export default function MentorManagementCard(props) {
  const mentorID = props.appointmentInfo.mentorID;
  const id = props.appointmentInfo._id;
  const [mentorInfo, setMentorInfo] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const history = useHistory();

  async function handleReview(rating, comment) {
    const newReview = {
      mentorID: props.appointmentInfo.mentorID,
      menteeID: props.appointmentInfo.menteeID,
      rating,
      comment,
    };

    await axios.post("http://localhost:3000/reviews/add", newReview);

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
      <ModalReview
        id={mentorID}
        show={modalShow}
        onHide={() => setModalShow(false)}
        review={handleReview}
      />
      <div className="btn-group">
        {props.appointmentInfo.status === "done" && (
          <button onClick={() => setModalShow(true)} className="btn-secondary2">
            Review
          </button>
        )}
        {props.appointmentInfo.status !== "done" && (
          <button onClick={handleCancel} className="btn-primary2">
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}
