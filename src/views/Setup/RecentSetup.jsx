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
          <AlertBox type="info" canClose="true">
            <a className="lead" href="https://github.com/Protocore-UI/Protocore" target="_blank"><i className="fa fa-github fa-lg"></i> Protocore</a>
            <h5>Protocore is an open source walking application skeleton ...</h5>
            <button type="button" className="btn btn-sm btn-success">Open</button>
          </AlertBox>
          <AlertBox type="info" canClose="true">
            <a className="lead" href="https://github.com/Nebula-UI/Nebula" target="_blank">Nebula</a>
            <h5>Nebula is an open source walking application skeleton ...</h5>
            <button type="button" className="btn btn-sm btn-success">Open</button>
          </AlertBox>
          <AlertBox type="info" canClose="true">
            <a className="lead" href="https://github.com/Nebula-UI/Nebula" target="_blank">Nebula</a>
            <h5>Nebula is an open source walking application skeleton ...</h5>
            <button type="button" className="btn btn-sm btn-success">Open</button>
          </AlertBox>
          <AlertBox type="info" canClose="true">
            <a className="lead" href="https://github.com/Nebula-UI/Nebula" target="_blank">Nebula</a>
            <h5>Nebula is an open source walking application skeleton ...</h5>
            <button type="button" className="btn btn-sm btn-success">Open</button>
          </AlertBox>
          <AlertBox type="info" canClose="true">
            <a className="lead" href="https://github.com/Nebula-UI/Nebula" target="_blank">Nebula</a>
            <h5>Nebula is an open source walking application skeleton ...</h5>
            <button type="button" className="btn btn-sm btn-success">Open</button>
          </AlertBox>
        </div>
      </div>
    );
  }
}

export default RecentSetup;
