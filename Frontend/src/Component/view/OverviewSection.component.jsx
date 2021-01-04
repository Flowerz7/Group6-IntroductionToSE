import React from "react";

export default class OverviewSection extends React.Component {
  render() {
    const { avatar, name, major, overview } = this.props;

    return (
      <div className="overview-container">
        <div className="info-container">
          <img src={avatar} alt="" />
          <ul className="info">
            <li>
              <strong>{name}</strong>
            </li>
            <li>
              <strong>Major: </strong>
              {major}
            </li>
          </ul>
        </div>
        <div className="overview">
          <strong>Overview: </strong>
          {overview}
        </div>
      </div>
    );
  }
}
