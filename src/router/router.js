import React from 'react';

import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

import App from '../App.js';

import ProjectSetupTabPane from '../views/Setup/ProjectSetupTabPane.jsx';
import MyRepositories from '../views/MyRepositories/MyRepositoriesTabPane.jsx';
import ErrorPage from '../views/ErrorPage/PageNotFound.jsx';

const Routes = (
  <Router history={appHistory}>
    <Route path = "/" component = {App}>
      <IndexRoute component = {ProjectSetupTabPane} />
      <Route path = "setup" component = {ProjectSetupTabPane} />
      <Route path = "repositories" component = {MyRepositories} />
    </Route>
    <Route path="*" component={ErrorPage}/>
  </Router>
);

export default Routes;
