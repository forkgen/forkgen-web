'use strict';

import React from 'react';
import { Link } from 'react-router';

import './RepositoriesList.less';

class RepositoriesList extends React.Component {
  render() {
    return (
      <div className="my-repositories-list">
        <div className="col-md-6 profile">
          <div className="profile-blog blog-border">
            <div className="media">
              <div className="media-left">
                <i className="fa fa-github fa-4x"></i>
              </div>
              <div className="media-body">
                <h4 className="media-heading lead">Protocore</h4>
                <p>Protocore is an open source walking application skeleton for a typical unstructured JavaScript/jQuery web apps.</p>
              </div>
            </div>
            <hr />
            <ul className="list-inline share-list">
              <li><Link to="repository/:repository/dashboard" className="btn btn-success btn-sm">Open</Link></li>
              <li><Link to="repository/:repository/dashboard" className="btn btn-danger btn-sm">Delete</Link></li>
            </ul>
          </div>
        </div>

        <div className="col-md-6 profile">
          <div className="profile-blog blog-border">
            <div className="media">
              <div className="media-left">
                <i className="fa fa-bitbucket fa-4x"></i>
              </div>
              <div className="media-body">
                <h4 className="media-heading lead">Protocore</h4>
                <p>Protocore is an open source walking application skeleton for a typical unstructured JavaScript/jQuery web apps.</p>
              </div>
            </div>
            <hr />
            <ul className="list-inline share-list">
              <li><Link to="repository/:repository/dashboard" className="btn btn-success btn-sm">Open</Link></li>
              <li><Link to="repository/:repository/dashboard" className="btn btn-danger btn-sm">Delete</Link></li>
            </ul>
          </div>
        </div>

        <div className="col-md-6 profile">
          <div className="profile-blog blog-border">
            <div className="media">
              <div className="media-left">
                <i className="fa fa-gitlab fa-4x"></i>
              </div>
              <div className="media-body">
                <h4 className="media-heading lead">Protocore</h4>
                <p>Protocore is an open source walking application skeleton for a typical unstructured JavaScript/jQuery web apps.</p>
              </div>
            </div>
            <hr />
            <ul className="list-inline share-list">
              <li><Link to="repository/:repository/dashboard" className="btn btn-success btn-sm">Open</Link></li>
              <li><Link to="repository/:repository/dashboard" className="btn btn-danger btn-sm">Delete</Link></li>
            </ul>
          </div>
        </div>

      </div>
    );
  }
};

export default RepositoriesList;
