import React from "react";
import { Link } from "react-router-dom";

export function SideBar(props) {
  return (
    <aside>
      <ul>{props.children}</ul>
    </aside>
  );
}

export function FeatureItem(props) {
  return (
    <li>
      <Link onClick={props.handleOnClick} to={props.url}>
        {props.featureName}
      </Link>
    </li>
  );
}
