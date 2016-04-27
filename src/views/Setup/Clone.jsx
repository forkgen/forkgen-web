'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Clone extends React.Component {
  render() {
    return (
      <div className="media project-container">
        <div className="media-body">
          <div className="media project-container">
            <form>
              <div className="media-body">
                <p class="form-group">
                  <label for="createRepository">Clone from Github / Gitlab / BitBucket remote repository:</label>
                  <input type="text" className="form-control" placeholder="E.g. https://github.com/hegdeashwin/forkgen.git" />
                </p>
                <p class="form-group">
                  <label for="createRepository">Specify repository location:</label>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="E.g. C:\Workspace" />
                    <span className="input-group-btn">
                      <button className="btn btn-success" type="button" title="Clone from Github remote repository">Clone</button>
                    </span>
                  </div>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Clone;
