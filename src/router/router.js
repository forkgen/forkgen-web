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
import RepoSettings from '../views/Repository/Settings/Settings.jsx';
import Profile from '../views/Settings/Profile.jsx';
import Notifications from '../views/Settings/Notifications.jsx';
import SSHkey from '../views/Settings/SSHkey.jsx';

const Routes = (
  <Router history={appHistory}>
    <Route path = "/" component = {App}>
      <IndexRoute component = {Setup} />
      <Route path = "setup" component = {Setup} />
      <Route path = "settings" component = {Settings}>
        <Route path = "profile" component = {Profile} />
        <Route path = "notifications" component = {Notifications} />
        <Route path = "sshkey" component = {SSHkey} />
      </Route>
      <Route path = "open/:repository/:branch">
        <Route path = "dashboard" component = {Dashboard} />
        <Route path = "commits" component = {Commits} />
        <Route path = "settings" component = {RepoSettings} />
      </Route>
    </Route>
    <Route path="*" component={ErrorPage}/>
  </Router>
);

export default Routes;
