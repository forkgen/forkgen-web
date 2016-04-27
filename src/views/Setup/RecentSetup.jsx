'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AlertBox from '../../components/Alert/AlertBox.jsx';

require('./RecentSetup.less');

class RecentSetup extends React.Component {
  render() {
    return (
      <div className="media recent-setup-container">
        <div className="media-body">
          <AlertBox type="info" canClose="false">
            <div className="media">
              <div className="media-left remote-repo-logo text-center">
                <i className="fa fa-github fa-4x"></i>
              </div>
              <div className="media-body">
                <h4 className="media-heading" title="http://github.com/hegdeashwin/protocore">github.com/hegdeashwin/protocore</h4>
                <button type="button" className="btn btn-success" title="Open"><i className="fa fa-folder-open-o fa-lg"></i> Open</button>
                <button type="button" className="btn btn-danger" title="Delete"><i className="fa fa-trash-o fa-lg"></i> Delete</button>
              </div>
            </div>
          </AlertBox>
          <AlertBox type="info" canClose="false">
            <div className="media">
              <div className="media-left remote-repo-logo text-center">
                <i className="fa fa-bitbucket fa-4x"></i>
              </div>
              <div className="media-body">
                <h4 className="media-heading" title="http://bitbucket.com/hegdeashwin/protocore">bitbucket.com/hegdeashwin/protocore</h4>
                <button type="button" className="btn btn-success" title="Open"><i className="fa fa-folder-open-o fa-lg"></i> Open</button>
                <button type="button" className="btn btn-danger" title="Delete"><i className="fa fa-trash-o fa-lg"></i> Delete</button>
              </div>
            </div>
          </AlertBox>
          <AlertBox type="info" canClose="false">
            <div className="media">
              <div className="media-left remote-repo-logo text-center">
                <i className="fa fa-gitlab fa-4x"></i>
              </div>
              <div className="media-body">
                <h4 className="media-heading" title="http://gitlab.com/hegdeashwin/protocore">gitlab.com/hegdeashwin/protocore</h4>
                <button type="button" className="btn btn-success" title="Open"><i className="fa fa-folder-open-o fa-lg"></i> Open</button>
                <button type="button" className="btn btn-danger" title="Delete"><i className="fa fa-trash-o fa-lg"></i> Delete</button>
              </div>
            </div>
          </AlertBox>
        </div>
      </div>
    );
  }
}

export default RecentSetup;
