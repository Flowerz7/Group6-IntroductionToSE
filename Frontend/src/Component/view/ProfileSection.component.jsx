import React, { lazy, useState } from "react";
const OverviewSection = lazy(() => import("./OverviewSection.component"));
import { ModalForm } from "./ModalForm.component";
import { useAuth } from "../../contexts/AuthContext";
import "regenerator-runtime";

export default function ProfileSection(props) {
  const [modalShow, setModalShow] = useState(false);
  const { currentID } = useAuth();

  const requirementInfo = {
    mentorID: props.info._id,
    menteeID: currentID,
  };

  return (
    <section className="profile-section">
      <OverviewSection
        avatar={props.info.imageUrl}
        name={props.info.name}
        major={props.info.major}
        overview={props.info.overview}
      />
      <div className="description">
        <strong>Description: </strong>
        {props.info.description}
      </div>
      <ModalForm
        requirement={requirementInfo}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      {currentID !== props.info._id ? (
        <div className="btn-group">
          <button onClick={() => setModalShow(true)} className="btn-secondary2">
            Booking
          </button>
          <button onClick={() => setModalShow(true)} className="btn-primary2">
            Add friend
          </button>
        </div>
      ) : (
        <div className="btn-group">
          <button className="btn-secondary2">Update profile</button>
        </div>
      )}
    </section>
  );
}
