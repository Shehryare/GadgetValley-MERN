import React from "react";
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/layout'
import Home from "./components/Home";
import RegisterLogin from "./components/register_login";
import Register from "./components/register_login/register";
import UserDashboard from "./components/User";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/user/dashboard" exact component={UserDashboard} />
        <Route path="/register" exact component={Register} />
        <Route path="/register_login" exact component={RegisterLogin} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  );
}

export default Routes;
