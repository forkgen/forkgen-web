'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Panel } from 'react-bootstrap';

class Clone extends React.Component {
  render() {
    return (
      <Panel header="Clone an existing repository" className="clone-component">
        <form>
          <div className="form-group">
            <label for="createRepository">Specify Github / Gitlab / BitBucket remote repository URL:</label>
            <input type="text" className="form-control" placeholder="E.g. https://github.com/hegdeashwin/forkgen.git" />
          </div>
          <div className="form-group">
            <label for="createRepository">Specify repository location:</label>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="E.g. C:\Workspace" />
              <span className="input-group-btn">
                <button className="btn btn-success" type="button" title="Clone from Github remote repository">Clone</button>
              </span>
            </div>
          </div>
        </form>
      </Panel>
    );
  }
}

export default Clone;
