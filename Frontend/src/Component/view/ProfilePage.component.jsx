import React, { lazy, useEffect, useState } from "react";
import "../../css/style.css";
import axios from "axios";
import "regenerator-runtime";

const ProfileSection = lazy(() => import("./ProfileSection.component"));
const MainNavbar = lazy(() => import("./Navbar.component"));

export default function ProfilePage(props) {
  const [profile, setProfile] = useState({});
  const id = props.match.params.id;

  useEffect(async () => {
    const result = await axios.get(`http://localhost:3000/profiles/${id}`);

    if (result.data !== null) {
      setProfile(result.data);
    }
  }, []);

  return (
    <>
      <MainNavbar />
      <div className="container">
        <ProfileSection mentorID={id} info={profile} />
      </div>
    </>
  );
}
