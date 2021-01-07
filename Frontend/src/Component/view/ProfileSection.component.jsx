import React, { lazy, useState } from "react";
const OverviewSection = lazy(() => import("./OverviewSection.component"));
import { useAuth } from "../../contexts/AuthContext";
import { ModalForm } from "./ModalForm.component";
import axios from "axios";

export default function ProfileSection(props) {
  const { currentUser } = useAuth();
  const email = currentUser.email;
  const [modalShow, setModalShow] = useState(false);

  function handleBooking(message) {
    // Call axios to get userID from given EMAIL:
    const sampleUserID = "1010101";

    // Call axios add a appointment request card for the mentor:
    const newNoti = {
      mentorID: props.mentorID,
      menteeID: sampleUserID,
      type: 0,
      content: message,
      isDone: 0,
    };

    console.log(`Noti: ${JSON.stringify(newNoti)}`);
  }

  function handleAddFriend() {
    // Call axios add a make friend request card for the mentor:
  }

  return (
    <section className="profile-section">
      <OverviewSection
        avatar={props.info.avatarUrl}
        name={props.info.name}
        major={props.info.major}
        overview={props.info.overview}
      />
      <div className="description">
        <strong>Description: </strong>
        {props.info.description}
      </div>
      <ModalForm
        handleBooking={handleBooking}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className="btn-group">
        <button onClick={() => setModalShow(true)} className="btn-secondary2">
          Booking
        </button>
        <button onClick={() => setModalShow(true)} className="btn-primary2">
          Add friend
        </button>
      </div>
    </section>
  );
}
