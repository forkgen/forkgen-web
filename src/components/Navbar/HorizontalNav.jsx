'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { IndexLink, Link } from 'react-router';

import StyleClassUtils from '../../utils/styleclass.js';

class HorizontalMenu extends React.Component {
  constructor(props) {
    super(props);

    this.styleClass = new StyleClassUtils();

    this.openNavbarDropdown = this.openNavbarDropdown.bind(this);
    this.closeNavbarDropdown = this.closeNavbarDropdown.bind(this);
  };

  openNavbarDropdown(e) {
    e.stopPropagation();
    let navbarDropdown = document.querySelectorAll('.dropdown');
    let i = 0;
    var self = this;

    for(; i < navbarDropdown.length ; i++ ){
      self.styleClass.removeClass(navbarDropdown[i], 'open');
    }

    this.styleClass.addClass(ReactDOM.findDOMNode(e.target).parentNode.parentNode, 'open');
  };

  closeNavbarDropdown() {
    let navbarDropdown = document.querySelectorAll('.navbar-dropdown');
    let i = 0;
    var self = this;

    for(; i < navbarDropdown.length ; i++ ){
      self.styleClass.removeClass(navbarDropdown[i].parentElement, 'open');
    }
  };

  componentDidMount() {
    let navbarDropdown = document.querySelectorAll('.navbar-dropdown');
    let i = 0;
    var self = this;

    for(; i < navbarDropdown.length ; i++ ){
      navbarDropdown[i].addEventListener('click', self.openNavbarDropdown);
    }

    document.addEventListener('click', self.closeNavbarDropdown);
  };

  componentWillUnmount() {
    let navbarDropdown = document.querySelectorAll('.navbar-dropdown');
    let i = 0;
    var self = this;

    for(; i < navbarDropdown.length ; i++ ){
      navbarDropdown[i].removeEventListener('click', self.openNavbarDropdown);
    }
  };

  render() {
    return (
        <nav className="navbar navbar-default navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
                <i className="fa fa-bars fa-lg"></i>
              </button>
              <IndexLink to="/" className="navbar-brand" title="Elastic Hub v0.0.0 Alpha">Elastic Hub <sup><small>v0.0.0 Alpha</small></sup></IndexLink>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li title="Home"><IndexLink to="/"><i className="fa fa-lg fa-home"></i></IndexLink></li>
                <li className="dropdown">
                  <a className="dropdown-toggle navbar-dropdown" data-toggle="dropdown" title="Views"><i className="fa fa-eye fa-lg"></i> View<span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li title="Cluster"><IndexLink to="/">Cluster</IndexLink></li>
                    <li title="Nodes"><Link to="/nodes">Nodes</Link></li>
                    <li title="Indices"><Link to="/indices">Indices</Link></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a className="dropdown-toggle navbar-dropdown" data-toggle="dropdown" title="Tools"><i className="fa fa-wrench fa-lg"></i> Tools<span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li title="Queries"><Link to="/queries">Queries</Link></li>
                    <li title="REST Request"><Link to="/restapi">REST Request</Link></li>
                    <li className="divider"></li>
                    <li title="Settings"><Link to="/settings">Settings</Link></li>
                  </ul>
                </li>
              </ul>
              <form className="navbar-form navbar-left" role="search">
                <div className="form-group">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Enter cluster URL" defaultValue="localhost:9200" />
                    <span className="input-group-btn">
                      <button className="btn btn-primary" type="button" title="Connect">Connect</button>
                    </span>
                  </div>
                </div>
              </form>
              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <a className="dropdown-toggle navbar-dropdown" data-toggle="dropdown" title="More Information, Help etc.">
                    <i className="fa fa-lg fa-life-saver"></i> Help<span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li title="Documentation">
                      <a href="//github.com/hegdeashwin/elastic-hub/wiki" target="_blank">Documentation</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a className="dropdown-toggle navbar-dropdown" data-toggle="dropdown" title="Developers Connection"><i className="fa fa-connectdevelop fa-lg"></i> Developers<span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li title="Github Home Page">
                      <a href="//github.com/hegdeashwin/elastic-hub" target="_blank">Github Home Page</a>
                    </li>
                    <li className="divider"></li>
                    <li title="Release Page">
                      <a href="//github.com/hegdeashwin/elastic-hub/releases" target="_blank">Release Page</a>
                    </li>
                    <li title="Milestones">
                      <a href="//github.com/hegdeashwin/elastic-hub/milestones" target="_blank">Milestones</a>
                    </li>
                    <li className="divider"></li>
                    <li title="Report Issues">
                      <a href="//github.com/hegdeashwin/elastic-hub/issues" target="_blank">Report Issues</a>
                    </li>
                    <li title="Pull Requests">
                      <a href="//github.com/hegdeashwin/elastic-hub/pulls" target="_blank">Open Pull Requests</a>
                    </li>
                    <li className="divider"></li>
                    <li title="About Elastic Hub">
                      <a href="//github.com/hegdeashwin/elastic-hub" target="_blank">About Elastic Hub</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
};

export default HorizontalMenu;
