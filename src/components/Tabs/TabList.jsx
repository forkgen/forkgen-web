'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

require('./Tabs.less');

import StyleClassUtils from '../../utils/styleclass.js';

class TabList extends React.Component {
  constructor(props) {
    super(props);

    this.styleClass = new StyleClassUtils();

    this.detectTabPane = this.detectTabPane.bind(this);
    this.handleTabPaneLoad = this.handleTabPaneLoad.bind(this);
  };

  handleTabPaneLoad() {
    let SelectedTabPaneLink = this.detectTabPane();
    let SelectedTabPaneContent = this.detectTabPane(false);

    let tablink = document.getElementById('super-tab');
    let tabContent = document.getElementById('super-tab-content');
    let i = 0;

    var self = this;

    for(; i < tablink.children.length ; i++ ){
      self.styleClass.removeClass(tablink.children[i], 'active');
    }

    this.styleClass.addClass(ReactDOM.findDOMNode(SelectedTabPaneLink).parentNode, 'active');

    for(i = 0; i < tabContent.children.length ; i++ ){
      self.styleClass.removeClass(tabContent.children[i], 'in');
      self.styleClass.removeClass(tabContent.children[i], 'active');
    }

    this.styleClass.addClass(ReactDOM.findDOMNode(SelectedTabPaneContent), 'in');
    this.styleClass.addClass(ReactDOM.findDOMNode(SelectedTabPaneContent), 'active');

  };

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', this.handleTabPaneLoad);
    window.addEventListener('hashchange', this.handleTabPaneLoad);
  };

  componentWillUnmount() {
    document.removeEventListener('DOMContentLoaded', this.handleTabPaneLoad);
    window.removeEventListener('hashchange', this.handleTabPaneLoad);
  };

  detectTabPane(isTabLink = true, URLHash = window.location.hash) {
    if(URLHash.indexOf('repositories') !== -1) {
      return (isTabLink) ? document.getElementById('repositories-tab') : document.getElementById('repositories');
    } else if(URLHash.indexOf('dashboard') !== -1) {
      return (isTabLink) ? document.getElementById('dashboard-tab') : document.getElementById('dashboard');
    } else {
      return (isTabLink) ? document.getElementById('setup-tab') : document.getElementById('setup');
    }
  };

  render() {
    return (
      <li className="active">
        <Link to={this.props.tab.to} id={this.props.tab.id} data-toggle="tab">{this.props.tab.name}</Link>
      </li>
    );
  }
};

export default TabList;
