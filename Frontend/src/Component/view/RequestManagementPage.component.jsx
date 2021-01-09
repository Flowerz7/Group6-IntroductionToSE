import React, { lazy, useState, useEffect } from "react";
import "../../css/style.css";
import axios from "axios";
import "regenerator-runtime";

const RequestManagementCard = lazy(() =>
  import("./RequestManagementCard.component")
);

const MainNavbar = lazy(() => import("./Navbar.component"));
const EmptyPage = lazy(() => import("./EmptyPage.component"));
const MainSection = lazy(() => import("./MainSection.component"));
import { SideBar, FeatureItem } from "./SideBar.component";

export default function RequestManagementPage(props) {
  const [requirements, setRequirements] = useState([]);
  const [type, setType] = useState("appointment");
  const currentUserID = props.match.params.id;

  useEffect(async () => {
    const result = await axios.get("http://localhost:3000/requirements/");
    const data = result.data.filter(
      (requirement) =>
        requirement.type === type && requirement.mentorID === currentUserID
    );
    setRequirements(data);
  }, [type]);

  function handleOnChangeType(type) {
    setType(type);
  }

  return (
    <>
      <MainNavbar />
      <div className="container">
        <SideBar>
          <FeatureItem
            handleOnClick={() => handleOnChangeType("appointment")}
            url="#"
            featureName="Appointment requirements"
          />
          <FeatureItem
            handleOnClick={() => handleOnChangeType("workshop")}
            url="#"
            featureName="Workshop requirements"
          />
          <FeatureItem
            handleOnClick={() => handleOnChangeType("friend")}
            url="#"
            featureName="Make friend requirements"
          />
        </SideBar>
        <MainSection>
          {requirements.length > 0 ? (
            requirements.map((requirement, index) => (
              <RequestManagementCard
                requirementInfo={requirement}
                key={index}
              />
            ))
          ) : (
            <EmptyPage>You do not have any requirements now.</EmptyPage>
          )}
        </MainSection>
      </div>
    </>
  );
}
