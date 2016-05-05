'use strict';

import React from 'react';
import { Link } from 'react-router';
import SettingsSidebar from './SettingsSidebar.jsx';

class Settings extends React.Component {
  render() {
    return (
      <div className="settings-container">
        <div className="row">
          <div className="col-md-3">
            <SettingsSidebar />
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
