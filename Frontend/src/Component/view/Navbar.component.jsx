import React, { useState } from "react";
import "../../css/navbar.css";

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
      <a href="#" onClick={() => setOpen(!open)}>
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
      <a href="#" onClick={props.handleOnClick}>
        {props.optionName}
      </a>
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
