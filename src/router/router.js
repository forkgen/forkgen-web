import React from 'react';

import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

import App from '../App.js';

import Setup from '../views/Setup/ProjectSetup.jsx';
import Settings from '../views/Settings/Settings.jsx';
import ErrorPage from '../views/ErrorPage/PageNotFound.jsx';
import Dashboard from '../views/Repository/Dashboard/Dashboard.jsx';
import Commits from '../views/Repository/Commits/Commits.jsx';

const Routes = (
  <Router history={appHistory}>
    <Route path = "/" component = {App}>
      <IndexRoute component = {Setup} />
      <Route path = "setup" component = {Setup} />
      <Route path = "settings" component = {Settings} />
      <Route path = "dashboard/:repository" component = {Dashboard} />
      <Route path = "commits/:repository" component = {Commits} />
    </Route>
    <Route path="*" component={ErrorPage}/>
  </Router>
);

export default Routes;
