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
                <span className="label label-primary">Bare Repository</span>
                <p>
                  <span className="label label-primary">Location: C:\Projects\Protocore</span>
                </p>
              </div>
            </div>
            <hr />
            <form className="form-inline">
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> <span className="">Open in new browser tab.</span>
                </label>
              </div>
              <ul className="list-inline share-list pull-right">
                <li><Link to="repository/:repository/dashboard" className="btn btn-success btn-sm">Open</Link></li>
                <li><Link to="repository/:repository/dashboard" className="btn btn-danger btn-sm">Delete</Link></li>
              </ul>
            </form>
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
                <span className="label label-primary">Bare Repository</span>
                <p>
                  <span className="label label-primary">Location: C:\Projects\Protocore</span>
                </p>
              </div>
            </div>
            <hr />
            <form className="form-inline">
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> <span className="">Open in new browser tab.</span>
                </label>
              </div>
              <ul className="list-inline share-list pull-right">
                <li><Link to="repository/:repository/dashboard" className="btn btn-success btn-sm">Open</Link></li>
                <li><Link to="repository/:repository/dashboard" className="btn btn-danger btn-sm">Delete</Link></li>
              </ul>
            </form>
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
                <span className="label label-primary">Bare Repository</span>
                <p>
                  <span className="label label-primary">Location: C:\Projects\Protocore</span>
                </p>
              </div>
            </div>
            <hr />
            <form className="form-inline">
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> <span className="">Open in new browser tab.</span>
                </label>
              </div>
              <ul className="list-inline share-list pull-right">
                <li><Link to="repository/:repository/dashboard" className="btn btn-success btn-sm">Open</Link></li>
                <li><Link to="repository/:repository/dashboard" className="btn btn-danger btn-sm">Delete</Link></li>
              </ul>
            </form>
          </div>
        </div>

      </div>
    );
  }
};

export default RepositoriesList;
