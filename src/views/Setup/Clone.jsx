'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Clone extends React.Component {
  render() {
    return (
      <div className="media project-container">
        <div className="media-body">
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
        </div>
      </div>
    );
  }
}

export default Clone;
