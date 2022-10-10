import React from "react";
import { withRouter } from "react-router-dom";
import NavBar from "../appbar";

function SearchComponent() {
  return <div>My search bar</div>;
}

function MyComponent(props) {
  const path = props.location.pathname;
  return (
    <div>
      <NavBar>{path !== "/Shop" && <NavBar />}</NavBar>
    </div>
  );
}

export default withRouter(MyComponent);