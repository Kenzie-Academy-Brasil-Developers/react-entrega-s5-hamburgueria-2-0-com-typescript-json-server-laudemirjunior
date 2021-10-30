import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import Register from "../pages/register";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
}
