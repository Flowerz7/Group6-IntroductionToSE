import React, { lazy } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../css/style.css";
import { useAuth } from "../../contexts/AuthContext";
import "regenerator-runtime";

const SideBar = lazy(() => import("./SideBar.component"));
const MenteeManagementCard = lazy(() =>
  import("./MenteeManagementCard.component")
);
import {
  Navbar,
  NavbarLogo,
  NavbarItem,
  NavbarItemGroup,
  DropdownMenu,
  DropdownOption,
} from "./Navbar.component";

export default function HostManagementPage() {
  const history = useHistory();
  const { currentUser, logout } = useAuth();

  async function handleLogOut() {
    try {
      await logout();
      history.push("/login");
    } catch {}
  }

  const features = [
    { url: "", featureName: "Appointment" },
    { url: "", featureName: "Workshop" },
  ];

  const featureList = features.map((feature, index) => (
    <li key={index}>
      <Link to={feature.url}>{feature.featureName}</Link>
    </li>
  ));

  return (
    <>
      <Navbar>
        <NavbarLogo logo="Gap" />
        <NavbarItemGroup>
          <NavbarItem featureName="mentors" />
          <NavbarItem featureName="workshops" />
          <NavbarItem featureName="categories" />
        </NavbarItemGroup>
        <NavbarItemGroup>
          <NavbarItem featureName="notifications" />
          <NavbarItem featureName="account">
            <DropdownMenu>
              <DropdownOption optionName={currentUser.email} />
              <DropdownOption
                optionName="logout"
                handleOnClick={handleLogOut}
              />
            </DropdownMenu>
          </NavbarItem>
        </NavbarItemGroup>
      </Navbar>
      <div className="container">
        <SideBar features={featureList} />
        <section>
          <MenteeManagementCard />
          <MenteeManagementCard />
          <MenteeManagementCard />
        </section>
      </div>
    </>
  );
}
