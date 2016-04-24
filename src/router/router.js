import React from 'react';

import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

import App from '../App.js';

import ProjectSetupTabPane from '../views/Setup/ProjectSetupTabPane.jsx';
import ErrorPage from '../views/ErrorPage/PageNotFound.jsx';

const Routes = (
  <Router history={appHistory}>
    <Route path = "/" component = {App}>
      <IndexRoute component = {ProjectSetupTabPane} />
      <Route path = "setup" component = {ProjectSetupTabPane} />
    </Route>
    <Route path="*" component={ErrorPage}/>
  </Router>
);

export default Routes;
