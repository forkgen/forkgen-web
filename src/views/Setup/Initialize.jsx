'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Initialize extends React.Component {
  render() {
    return (
      <div className="media project-container">
        <div className="media-body">
          <form>
              <div className="form-group">
                <label for="cloneFromGit">Workspace location</label>
                <input type="text" className="form-control" placeholder="E.g. C:\Workspace"/>
              </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Initialize;
