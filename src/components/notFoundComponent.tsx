import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { RegisteredActions } from "../containers/registeredContainer";

const notFoundComponent: React.SFC = () => {
  return (
    <div style={{ marginLeft: "15px" }}>
      <p>Not Found</p>
    </div>
  );
};

export default notFoundComponent;
