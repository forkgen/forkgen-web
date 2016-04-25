'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AlertBox from '../../components/Alert/AlertBox.jsx';

require('./RecentSetup.less');

class RecentSetup extends React.Component {
  render() {
    return (
      <div className="media recent-setup-container">
        <div className="media-body">
          <AlertBox type="info" canClose="false">
            <span className="lead"><i className="fa fa-github fa-lg"></i> Protocore</span>
            <button type="button" className="btn pull-right btn-sm btn-danger">Remove</button>
            <button type="button" className="btn pull-right btn-sm btn-success">Open</button>
          </AlertBox>
          <AlertBox type="info" canClose="false">
            <span className="lead"><i className="fa fa-bitbucket fa-lg"></i> Nebula</span>
              <button type="button" className="btn pull-right btn-sm btn-danger">Remove</button>
              <button type="button" className="btn pull-right btn-sm btn-success">Open</button>
          </AlertBox>
          <AlertBox type="info" canClose="false">
            <span className="lead"><i className="fa fa-bitbucket fa-lg"></i> Nebula</span>
              <button type="button" className="btn pull-right btn-sm btn-danger">Remove</button>
              <button type="button" className="btn pull-right btn-sm btn-success">Open</button>
          </AlertBox>
          <AlertBox type="info" canClose="false">
            <span className="lead"><i className="fa fa-bitbucket fa-lg"></i> Nebula</span>
              <button type="button" className="btn pull-right btn-sm btn-danger">Remove</button>
              <button type="button" className="btn pull-right btn-sm btn-success">Open</button>
          </AlertBox>
          <AlertBox type="info" canClose="false">
            <span className="lead"><i className="fa fa-bitbucket fa-lg"></i> Nebula</span>
              <button type="button" className="btn pull-right btn-sm btn-danger">Remove</button>
              <button type="button" className="btn pull-right btn-sm btn-success">Open</button>
          </AlertBox>
        </div>
      </div>
    );
  }
}

export default RecentSetup;
