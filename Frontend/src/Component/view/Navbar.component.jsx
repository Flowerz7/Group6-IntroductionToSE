import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../css/navbar.css";
import { useAuth } from "../../contexts/AuthContext";
import "regenerator-runtime";

export function NavbarItemGroup(props) {
  return <ul>{props.children}</ul>;
}

export function NavbarLogo(props) {
  return <span>{props.logo}</span>;
}

export function NavbarItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <a href={props.link} onClick={() => setOpen(!open)}>
        {props.featureName}
      </a>

      {open && props.children}
    </li>
  );
}

export function DropdownMenu(props) {
  return <div className="menu-dropdown">{props.children}</div>;
}

export function DropdownOption(props) {
  return (
    <div className="menu-option">
      <Link to={props.link || "#"} onClick={props.handleOnClick}>
        {props.optionName}
      </Link>
    </div>
  );
}

export function Navbar(props) {
  return (
    <div className="nav-container">
      <nav>{props.children}</nav>
    </div>
  );
}

export default function MainNavbar(props) {
  const { currentUser, logout } = useAuth();
  const [currentMajor, setCurrentMajor] = useState(props.currentMajor);
  const history = useHistory();

  async function handleLogOut() {
    try {
      await logout();
      history.push("/login");
    } catch {}
  }

  function handleOnClickMajor(newMajor) {
    if (newMajor === currentMajor) {
      return;
    }

    setCurrentMajor(newMajor);
    props.handleChangeMajor(newMajor);
  }

  return (
    <Navbar>
      <NavbarLogo logo="Gap" />
      <NavbarItemGroup>
        <NavbarItem link="/" featureName="mentors" />
        <NavbarItem link="/" featureName="workshops" />
        <NavbarItem link="#" featureName="categories">
          <DropdownMenu>
            <DropdownOption
              optionName="All"
              handleOnClick={() => handleOnClickMajor("All")}
            />
            <DropdownOption
              optionName="Information Technology"
              handleOnClick={() => handleOnClickMajor("Information Technology")}
            />
            <DropdownOption
              optionName="Art and design"
              handleOnClick={() => handleOnClickMajor("Art and design")}
            />
          </DropdownMenu>
        </NavbarItem>
      </NavbarItemGroup>
      <NavbarItemGroup>
        <NavbarItem featureName="notifications" />
        <NavbarItem featureName="account">
          <DropdownMenu>
            <DropdownOption link="/profile" optionName={currentUser.email} />
            <DropdownOption optionName="logout" handleOnClick={handleLogOut} />
          </DropdownMenu>
        </NavbarItem>
      </NavbarItemGroup>
    </Navbar>
  );
}
