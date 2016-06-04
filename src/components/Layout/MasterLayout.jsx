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
        "to": "/settings",
        "id": "settings-tab",
        "name": "Account Settings"
      }]
    };

  }
  render() {
    return (
      <div className="container">
        <AlertBox type="danger">
          <h4>Oh snap! You got an error!</h4>
          <p>Change this and that and try again. Duis mollis, est non commodo luctus</p>
        </AlertBox>

        <Breadcrumb/>

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
