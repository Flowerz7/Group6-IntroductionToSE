import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { AuthProvider } from "./contexts/AuthContext.js";

const PrivateRoute = lazy(() =>
  import("./Component/view/PrivateRoute.component")
);
const LoginPage = lazy(() => import("./Component/view/LoginPage.component"));
const SignupPage = lazy(() => import("./Component/view/SignupPage.component"));
const HomePage = lazy(() => import("./Component/view/HomePage.component"));
const ProfilePage = lazy(() =>
  import("./Component/view/ProfilePage.component")
);
const HostManagementPage = lazy(() =>
  import("./Component/view/HostManagementPage.component")
);
const JoinManagementPage = lazy(() =>
  import("./Component/view/JoinManagementPage.component")
);
const RequestManagementPage = lazy(() =>
  import("./Component/view/RequestManagementPage.component")
);
const UpdateProfilePage = lazy(() =>
  import("./Component/view/UpdateProfilePage.component")
);

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading ... </div>}>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={HomePage} />
          <PrivateRoute path="/profiles/:id" component={ProfilePage} />
          <PrivateRoute
            path="/host-management/:id"
            component={HostManagementPage}
          />
          <PrivateRoute
            path="/join-management/:id"
            component={JoinManagementPage}
          />
          <PrivateRoute
            path="/request-management/:id"
            component={RequestManagementPage}
          />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/create-profile/:email" component={UpdateProfilePage} />
        </Switch>
      </AuthProvider>
    </Suspense>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
