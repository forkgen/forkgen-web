'use strict';

import React from 'react';
import { Link } from 'react-router';

class Settings extends React.Component {
  render() {
    return (
      <div className="list-group">
        <Link className="list-group-item active" to="settings">Profile</Link>
        <Link className="list-group-item" to="settings/collaboration">Collaboration</Link>
        <Link className="list-group-item" to="settings/notifications">Notifications</Link>
        <Link className="list-group-item" to="settings/sshkey">SSH Key</Link>
        <Link className="list-group-item" to="settings/security">Security</Link>
      </div>
    );
  }
};

export default Settings;
