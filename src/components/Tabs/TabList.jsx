'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Link } from 'react-router';

require('./Tabs.less');

import StyleClassUtils from '../../utils/styleclass.js';

class TabList extends React.Component {
  constructor(props) {
    super(props);

    this.styleClass = new StyleClassUtils();
    this.handleTabPaneLoad = this.handleTabPaneLoad.bind(this);
    this.switchTabs = this.switchTabs.bind(this);
  };

  switchTabs(e, defaultTabAsPerURL) {
    let target = (defaultTabAsPerURL) ? e : e.target;
    let targetedTabLink = target.attributes.getNamedItem('id').value;
    let tablink = document.getElementById('super-tab');
    let tabContent = document.getElementById('super-tab-content');
    let i = 0;
    let self = this;

    for(; i < tablink.children.length ; i++ ){
      self.styleClass.removeClass(tablink.children[i], 'active');
    }

    this.styleClass.addClass(ReactDOM.findDOMNode(target).parentNode, 'active');

    let targetedTabContent = targetedTabLink.split('-');
    targetedTabContent = document.getElementById(targetedTabContent[0]);

    for(i = 0; i < tabContent.children.length ; i++ ){
      self.styleClass.removeClass(tabContent.children[i], 'in');
      self.styleClass.removeClass(tabContent.children[i], 'active');
    }

    this.styleClass.addClass(ReactDOM.findDOMNode(targetedTabContent), 'in');
    this.styleClass.addClass(ReactDOM.findDOMNode(targetedTabContent), 'active');

  };

  handleTabPaneLoad() {
    let URLHash = window.location.hash.substr(2);
    URLHash += '-tab';
    this.switchTabs(document.getElementById(URLHash), true);
  };

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', this.handleTabPaneLoad);
  };

  componentWillUnmount() {
    document.removeEventListener('DOMContentLoaded', this.handleTabPaneLoad);
  };

  render() {
    let defaultActiveTab = {
      'active': this.props.tab.defaultActive
    };
    defaultActiveTab = classNames(defaultActiveTab);

    let countOnTab = {
      'badge': this.props.tab.count,
      'badge-primary': this.props.tab.count
    };
    countOnTab = classNames(countOnTab);

    return (
      <li className={defaultActiveTab}>
        <Link to={this.props.tab.to} id={this.props.tab.id} data-toggle="tab" onClick={this.switchTabs}>
          {this.props.tab.name} <span className={countOnTab}>{this.props.tab.count}</span>
        </Link>
      </li>
    );
  }
};

export default TabList;
