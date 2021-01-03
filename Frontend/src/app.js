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
const Home = lazy(() => import("./Component/view/Home.component"));
const Profile = lazy(() => import("./Component/view/Profile.component"));
const HostManagement = lazy(() =>
  import("./Component/view/HostManagement.component")
);
const JoinManagement = lazy(() =>
  import("./Component/view/JoinManagement.component")
);

const Main = withRouter(({ location }) => {
  return (
    <div>
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Navbar />
      )}
      <Route path="/login" component={LoginPage} />
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/host-management" component={HostManagement} />
      <Route path="/join-management" component={JoinManagement} />
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
