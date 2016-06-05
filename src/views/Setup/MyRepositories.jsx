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
            <ul className="list-group">
              <li className="list-group-item"><Link to="protocore/open">Protocore</Link></li>
              <li className="list-group-item"><Link to="protocore/open">Protocore</Link></li>
              <li className="list-group-item"><Link to="protocore/open">Protocore</Link></li>
              <li className="list-group-item"><Link to="protocore/open">Protocore</Link></li>
              <li className="list-group-item"><Link to="protocore/open">Protocore</Link></li>
              <li className="list-group-item"><Link to="protocore/open">Protocore</Link></li>
              <li className="list-group-item"><Link to="protocore/open">Protocore</Link></li>
              <li className="list-group-item"><Link to="protocore/open">Protocore</Link></li>
              <li className="list-group-item"><Link to="protocore/open">Protocore</Link></li>
              <li className="list-group-item"><Link to="protocore/open">Protocore</Link></li>
              <li className="list-group-item"><Link to="protocore/open">Protocore</Link></li>
              <li className="list-group-item"><Link to="protocore/open">Protocore</Link></li>
              <li className="list-group-item"><Link to="protocore/open">Protocore</Link></li>
              <li className="list-group-item"><Link to="protocore/open">Protocore</Link></li>
              <li className="list-group-item"><Link to="protocore/open">Protocore</Link></li>
              <li className="list-group-item"><Link to="protocore/open">Protocore</Link></li>
              <li className="list-group-item"><Link to="protocore/open">Protocore</Link></li>
              <li className="list-group-item"><Link to="protocore/open">Protocore</Link></li>
            </ul>
          </div>
        </form>
      </Panel>
    );
  }
}

export default Clone;
