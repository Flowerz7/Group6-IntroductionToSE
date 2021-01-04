import React from "react";

export default class SideBar extends React.Component {
  render() {
    const { features } = this.props;

    return (
      <aside>
        <ul>{features}</ul>
      </aside>
    );
  }
}
