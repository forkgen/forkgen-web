'use strict';

import React from 'react';
import { Link } from 'react-router';

import './RepositoriesList.less';

class RepositoriesList extends React.Component {
  render() {
    return (
      <div className="my-repositories-list">
        <div className="media list">
          <div className="media-left remote-repo-logo text-center">
            <i className="fa fa-github fa-3x"></i>
          </div>
          <div className="media-body">
            <div className="col-md-6">
              <h4 className="media-heading">
                <Link to={`/dashboard/protocore`} href="#">Protocore</Link>
                <a target="_blank" href="//github.com/hegdeashwin/Protocore" title="Visit: github.com/hegdeashwin/Protocore"></a>
              </h4>
              <p>Github Repository: <a target="_blank" href="//github.com/hegdeashwin/Protocore">github.com/hegdeashwin/Protocore</a></p>
            </div>
            <div className="col-md-6">
              <p className="pull-right">
                <a href="#" className="btn btn-sm btn-success">Open</a>
                <a href="#" className="btn btn-sm btn-danger">Delete</a>
              </p>
            </div>
          </div>
        </div>
        <div className="media list">
          <div className="media-left remote-repo-logo text-center">
            <i className="fa fa-bitbucket fa-3x"></i>
          </div>
          <div className="media-body">
            <div className="col-md-6">
              <h4 className="media-heading">
                <a href="#">Protocore</a>
                <a target="_blank" href="//github.com/hegdeashwin/Protocore" title="Visit: github.com/hegdeashwin/Protocore"></a>
              </h4>
              <p>Github Repository: <a target="_blank" href="//github.com/hegdeashwin/Protocore">github.com/hegdeashwin/Protocore</a></p>
            </div>
            <div className="col-md-6">
              <p className="pull-right">
                <a href="#" className="btn btn-sm btn-success">Open</a>
                <a href="#" className="btn btn-sm btn-danger">Delete</a>
              </p>
            </div>
          </div>
        </div>
        <div className="media list">
          <div className="media-left remote-repo-logo text-center">
            <i className="fa fa-gitlab fa-3x"></i>
          </div>
          <div className="media-body">
            <div className="col-md-6">
              <h4 className="media-heading">
                <a href="#">Protocore</a>
                <a target="_blank" href="//github.com/hegdeashwin/Protocore" title="Visit: github.com/hegdeashwin/Protocore"></a>
              </h4>
              <p>Github Repository: <a target="_blank" href="//github.com/hegdeashwin/Protocore">github.com/hegdeashwin/Protocore</a></p>
            </div>
            <div className="col-md-6">
              <p className="pull-right">
                <a href="#" className="btn btn-sm btn-success">Open</a>
                <a href="#" className="btn btn-sm btn-danger">Delete</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default RepositoriesList;
