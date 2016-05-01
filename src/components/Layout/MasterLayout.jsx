'use strict';

import React from 'react';

import AlertBox from '../Alert/AlertBox.jsx';
import TabList from '../Tabs/TabList.jsx';

import Breadcrumb from '../Breadcrumb/Breadcrumb.jsx';
import TabPaneContainer from '../Tabs/TabPaneContainer.jsx';
import Footer from '../Footer/Footer.jsx';

class MasterLayout extends React.Component {
  constructor() {
    super();

    this.state = {
      "data": [{
        "to": "/setup",
        "id": "setup-tab",
        "name": "Project Setup",
        "defaultActive": true
      }, {
        "to": "/repositories",
        "id": "repositories-tab",
        "name": "Your Repositories",
        "count": 42
      }, {
        "to": "/dashboard",
        "id": "dashboard-tab",
        "name": "Dashboard",
        "count": 3
      }]
    };

  }
  render() {
    return (
      <div className="container">
        <Breadcrumb/>

        <AlertBox type="danger" canClose="true">
          <p className="lead">Oh snap! You got an error!</p>
          <p>The connection was unable to initiate or complete a request with the Elasticsearch server.</p>
        </AlertBox>

        <section className="super-tab-container">
          <div className="row">
            <div className="col-md-12 tab-area">
              <ul id="super-tab" className="nav nav-tabs super-tab-component">
                {this.state.data.map((link, i) => <TabList key = {i} tab = {link}/>)}
              </ul>
              <TabPaneContainer/>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    );
  }
};

export default MasterLayout;
