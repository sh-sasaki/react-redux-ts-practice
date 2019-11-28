import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { RegisteredActions } from "../containers/registeredContainer";

export interface OwnProps extends RouteComponentProps<{}>, React.Props<{}> {}

export type RegistedProps = OwnProps & RegisteredActions;

export const registeredComponent: React.SFC<RegistedProps> = (
  props: RegistedProps
) => {
  return (
    <div style={{ marginLeft: "15px" }}>
      <p>登録しました。</p>
    </div>
  );
};
