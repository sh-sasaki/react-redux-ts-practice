import * as React from "react";
import { Route, Switch } from "react-router-dom";
import NotFoundComponent from "./components/notFoundComponent";
import { ROUTES } from "./constants";
import FormPracticeContainer from "./containers/formPracticeContainer";
import HeaderDrawerContainer from "./containers/headerDrawerContainer";
import RegisteredContainer from "./containers/registeredContainer";
import TopContainer from "./containers/topContainer";

class App extends React.Component {
  public render() {
    return (
      <HeaderDrawerContainer>
        <Switch>
          <Route exact={true} path={ROUTES.ROOT} component={TopContainer} />
          <Route
            exact={true}
            path={ROUTES.REGISTER}
            component={FormPracticeContainer}
          />
          <Route
            exact={true}
            path={ROUTES.REGISTERED}
            component={RegisteredContainer}
          />
          <Route component={NotFoundComponent} />
        </Switch>
      </HeaderDrawerContainer>
    );
  }
}

export default App;
