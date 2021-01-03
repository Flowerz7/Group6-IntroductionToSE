import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = lazy(() => import("./Component/view/Navbar.component"));
const Home = lazy(() => import("./Component/view/Home.component"));
const Profile = lazy(() => import("./Component/view/Profile.component"));
const HostManagement = lazy(() =>
  import("./Component/view/HostManagement.component")
);
const JoinManagement = lazy(() =>
  import("./Component/view/JoinManagement.component")
);

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading ... </div>}>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/host-management" component={HostManagement} />
      <Route path="/join-management" component={JoinManagement} />
    </Suspense>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
