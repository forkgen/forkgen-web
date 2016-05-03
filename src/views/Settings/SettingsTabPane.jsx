'use strict';

import React from 'react';
import { Link } from 'react-router';

class Settings extends React.Component {
  render() {
    return (
      <div className="settings-container">
        <div className="row">
          <div className="col-md-3">
            <div className="list-group">
              <Link className="list-group-item active" to="settings">Profile</Link>
              <Link className="list-group-item" to="settings/collaboration">Collaboration</Link>
              <Link className="list-group-item" to="settings/notifications">Notifications</Link>
              <Link className="list-group-item" to="settings/sshkey">SSH Key</Link>
              <Link className="list-group-item" to="settings/security">Security</Link>
            </div>
          </div>
          <div className="col-md-9">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Panel title</h3>
              </div>
              <div className="panel-body">
                Panel content
              </div>
              <div className="panel-footer">Panel footer</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Settings;
