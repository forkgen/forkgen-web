'use strict';

import React from 'react';
import AlertBox from '../Alert/AlertBox.jsx';
import Breadcrumb from '../Breadcrumb/Breadcrumb.jsx';
import Footer from '../Footer/Footer.jsx';
import Setup from '../../views/Setup/ProjectSetup.jsx';

class MasterLayout extends React.Component {
  render() {
    return (
      <div className="container">
        <AlertBox type="danger">
          <h4>Oh snap! You got an error!</h4>
          <p>Change this and that and try again. Duis mollis, est non commodo luctus</p>
        </AlertBox>

        <Breadcrumb/>

        <section className="sub-container">
          <div className="row">
            <div className="col-md-12">
              <Setup/>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    );
  }
};

export default MasterLayout;
