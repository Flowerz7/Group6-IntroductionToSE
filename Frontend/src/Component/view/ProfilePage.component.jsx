import React, { lazy, useEffect, useState } from "react";
import "../../css/style.css";
import axios from "axios";
import "regenerator-runtime";

const ProfileSection = lazy(() => import("./ProfileSection.component"));
const MainNavbar = lazy(() => import("./Navbar.component"));

export default function ProfilePage(props) {
  const [profile, setProfile] = useState({});
  const [reviews, setReviews] = useState([]);
  const id = props.match.params.id;

  useEffect(async () => {
    const givenProfile = await axios.get(
      `http://localhost:3000/profiles/${id}`
    );
    const giveReviews = await axios.get(`http://localhost:3000/reviews`);

    if (givenProfile.data !== null) {
      setProfile(givenProfile.data);
    }

    if (giveReviews.data !== null) {
      setReviews(giveReviews.data.filter((review) => review.mentorID === id));
    }
  }, []);

  return (
    <>
      <MainNavbar />
      <div className="container">
        <ProfileSection mentorID={id} info={profile} reviewInfo={reviews} />
      </div>
    </>
  );
}
