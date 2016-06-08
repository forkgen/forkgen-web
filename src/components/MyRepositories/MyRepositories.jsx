'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './MyRepositories.less';
import { Link } from 'react-router';
import { Panel } from 'react-bootstrap';

class Clone extends React.Component {
  render() {
    return (
      <Panel header="My Repositories" className="myrepositories-component">
        <form>
          <div className="form-group my-repository-filter">
            <input type="text" className="form-control" placeholder="E.g. Filter My Repository" />
          </div>
          <div className="form-group my-repository-list">
            <p className="bg-info">
              No repository found
            </p>
            <div className="list-group">
              <Link to="open/protocore/master/dashboard" className="list-group-item">
                <div className="media">
                  <div className="media-left">
                    <i className="fa fa-3x fa-github"></i>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">Protocore</h4>
                    <p className="list-group-item-text">C:\Projects\Protocore</p>
                  </div>
                </div>
              </Link>
              <Link to="protocore/open" className="list-group-item">
                <div className="media">
                  <div className="media-left">
                    <i className="fa fa-3x fa-bitbucket"></i>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">Protocore</h4>
                    <p className="list-group-item-text">C:\Projects\Protocore</p>
                  </div>
                </div>
              </Link>
              <Link to="protocore/open" className="list-group-item">
                <div className="media">
                  <div className="media-left">
                    <i className="fa fa-3x fa-gitlab"></i>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">Protocore</h4>
                    <p className="list-group-item-text">C:\Projects\Protocore</p>
                  </div>
                </div>
              </Link>
              <Link to="protocore/open" className="list-group-item">
                <div className="media">
                  <div className="media-left">
                    <i className="fa fa-3x fa-git"></i>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">Protocore</h4>
                    <p className="list-group-item-text">C:\Projects\Protocore</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </form>
      </Panel>
    );
  }
}

export default Clone;
