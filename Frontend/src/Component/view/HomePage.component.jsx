import React, { lazy, useState, useEffect } from "react";
import axios from "axios";
import "../../css/style.css";
import "regenerator-runtime";
import { useAuth } from "../../contexts/AuthContext";

const MentorCard = lazy(() => import("./MentorCard.component"));
const MainSection = lazy(() => import("./MainSection.component"));
const EmptyPage = lazy(() => import("./EmptyPage.component"));
const MainNavbar = lazy(() => import("./Navbar.component"));
import { SideBar, FeatureItem } from "./SideBar.component.jsx";

export default function HomePage() {
  const [mentorInfo, setMentorInfo] = useState([]);
  const [currentMajor, setCurrentMajor] = useState("All");
  const { currentUser, currentID } = useAuth();

  function handleChangeMajor(major) {
    setCurrentMajor(major);
  }

  useEffect(async () => {
    // Call API to get data from database:
    const result = await axios.get("http://localhost:3000/profiles/");
    const data = result.data.filter(
      (mentor) => mentor.email !== currentUser.email
    );

    // Filter mentor info base on currentMajor:
    if (currentMajor === "All") {
      setMentorInfo(data);
    } else {
      setMentorInfo(data.filter((mentor) => mentor.major === currentMajor));
    }
  }, [currentMajor]);

  return (
    <>
      <MainNavbar
        currentMajor={currentMajor}
        handleChangeMajor={handleChangeMajor}
      />
      <div className="container">
        <SideBar>
          <FeatureItem
            url={`/request-management/${currentID}`}
            featureName="Requests management"
          />
          <FeatureItem
            url={`/host-management/${currentID}`}
            featureName="Hosting management"
          />
          <FeatureItem
            url={`/join-management/${currentID}`}
            featureName="Joining management"
          />
        </SideBar>
        <MainSection>
          {mentorInfo.length > 0 ? (
            mentorInfo.map((info, index) => (
              <MentorCard key={index} info={info} />
            ))
          ) : (
            <EmptyPage>Do not have any mentors.</EmptyPage>
          )}
        </MainSection>
      </div>
    </>
  );
}
