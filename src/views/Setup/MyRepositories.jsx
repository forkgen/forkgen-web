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
            <div className="list-group">
              <Link to="protocore/open" className="list-group-item">
                <h4 className="list-group-item-heading">Protocore</h4>
                <p className="list-group-item-text">C:\Projects\Protocore</p>
              </Link>
              <Link to="protocore/open" className="list-group-item">
                <h4 className="list-group-item-heading">Protocore</h4>
                <p className="list-group-item-text">C:\Projects\Protocore</p>
              </Link>
              <Link to="protocore/open" className="list-group-item">
                <h4 className="list-group-item-heading">Protocore</h4>
                <p className="list-group-item-text">C:\Projects\Protocore</p>
              </Link>
              <Link to="protocore/open" className="list-group-item">
                <h4 className="list-group-item-heading">Protocore</h4>
                <p className="list-group-item-text">C:\Projects\Protocore</p>
              </Link>
              <Link to="protocore/open" className="list-group-item">
                <h4 className="list-group-item-heading">Protocore</h4>
                <p className="list-group-item-text">C:\Projects\Protocore</p>
              </Link>
              <Link to="protocore/open" className="list-group-item">
                <h4 className="list-group-item-heading">Protocore</h4>
                <p className="list-group-item-text">C:\Projects\Protocore</p>
              </Link>
              <Link to="protocore/open" className="list-group-item">
                <h4 className="list-group-item-heading">Protocore</h4>
                <p className="list-group-item-text">C:\Projects\Protocore</p>
              </Link>
              <Link to="protocore/open" className="list-group-item">
                <h4 className="list-group-item-heading">Protocore</h4>
                <p className="list-group-item-text">C:\Projects\Protocore</p>
              </Link>
              <Link to="protocore/open" className="list-group-item">
                <h4 className="list-group-item-heading">Protocore</h4>
                <p className="list-group-item-text">C:\Projects\Protocore</p>
              </Link>
              <Link to="protocore/open" className="list-group-item">
                <h4 className="list-group-item-heading">Protocore</h4>
                <p className="list-group-item-text">C:\Projects\Protocore</p>
              </Link>
            </div>
          </div>
        </form>
      </Panel>
    );
  }
}

export default Clone;
