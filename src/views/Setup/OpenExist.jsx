'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Panel } from 'react-bootstrap';

class OpenExist extends React.Component {
  render() {
    return (
      <Panel header="Open an existing respository">
        <div className="media project-container">
          <div className="media-body">
            <form>
              <div className="form-group">
                <label for="createRepository">Specify repository location:</label>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="E.g. C:\Workspace" />
                  <span className="input-group-btn">
                    <button className="btn btn-success" type="button" title="Open existing respository">Open</button>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Panel>
    );
  }
}

export default OpenExist;
