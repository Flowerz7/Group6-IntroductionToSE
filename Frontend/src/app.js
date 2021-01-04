import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import ReactDOM from "react-dom";

const Navbar = lazy(() => import("./Component/view/Navbar.component"));
const LoginPage = lazy(() => import("./Component/view/LoginPage.component"));
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

const Main = withRouter(({ location }) => {
  return (
    <div>
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Navbar />
      )}
      <Route path="/login" component={LoginPage} />
      <Route exact path="/" component={HomePage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/host-management" component={HostManagementPage} />
      <Route path="/join-management" component={JoinManagementPage} />
    </div>
  );
});

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading ... </div>}>
      <Main />
    </Suspense>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
