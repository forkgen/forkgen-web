'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Initialize extends React.Component {
  render() {
    return (
      <div className="media project-container">
        <div className="media-body">
          <form>
            <div className="checkbox">
              <label>
                <input type="checkbox" /> Check incase you want to create bare repository.
              </label>
            </div>
            <label for="createRepository">Specify repository location:</label>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="E.g. C:\Workspace" />
              <span className="input-group-btn">
                <button className="btn btn-success" type="button" title="Create new respository"><i className="fa fa-plus-square-o fa-lg"></i> Create</button>
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Initialize;
