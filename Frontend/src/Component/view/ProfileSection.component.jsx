import React, { lazy } from "react";
const OverviewSection = lazy(() => import("./OverviewSection.component"));

export default function ProfileSection(props) {
  function handleBooking() {
    // Call axios add a appointment request card for the mentor:

    const newBookingRequest = {};
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
      <div className="btn-group">
        <button onClick={handleBooking} className="btn-secondary2">
          Booking
        </button>
        <button onClick={handleAddFriend} className="btn-primary2">
          Add friend
        </button>
      </div>
    </section>
  );
}
