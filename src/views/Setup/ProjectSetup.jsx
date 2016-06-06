'use strict';

import React from 'react';
import Initialize from '../../components/Initialize/Initialize.jsx';
import Clone from '../../components/Clone/Clone.jsx';
import OpenExist from '../../components/Open/OpenExist.jsx';
import MyRepositories from '../../components/MyRepositories/MyRepositories.jsx';

class ProjectSetup extends React.Component {
  render() {
    return (
      <div className="project-setup-container">
        <div className="row">
          <div className="col-md-6">
            <Initialize/>
            <Clone/>
          </div>
          <div className="col-md-6">
            <OpenExist/>
            <MyRepositories/>
          </div>
        </div>
      </div>
    );
  }
};

export default ProjectSetup;
