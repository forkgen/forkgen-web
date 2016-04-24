'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class OpenExist extends React.Component {
  render() {
    return (
      <div className="media project-container">
        <div className="media-body">
          <form>
            <label for="createRepository">Specify repository location</label>
            <p className="input-group">
              <input type="text" className="form-control" placeholder="E.g. C:\Workspace" />
              <span className="input-group-btn">
                <button className="btn btn-success" type="button">Open</button>
              </span>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default OpenExist;
