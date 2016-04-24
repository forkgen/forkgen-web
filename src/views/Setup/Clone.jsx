'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Clone extends React.Component {
  render() {
    return (
      <div className="media project-container">
        <div className="media-body">
          <div className="media project-container">
            <div className="media-left">
              <a href="#">
                <i className="fa fa-github fa-4x"></i>
              </a>
            </div>
            <div className="media-body">
              <form>
                  <div className="form-group">
                    <label for="cloneFromGithub">Clone from Github</label>
                    <input type="text" className="form-control" placeholder="E.g. hegdeashwin/alphonso.git"/>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Clone;
