'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

/**
 * AlertBox class will return Bootstrap alert DOM structure.
 */
class AlertBox extends React.Component {
  constructor(props) {
    super(props);

    this.closeAlertBox = this.closeAlertBox.bind(this);
  };

  closeAlertBox(e) {
    ReactDOM.findDOMNode(e.target).parentNode.parentNode.style.display = 'none';
  };

  render() {
    let alertClassNames = {
      'alert-box': true,
      'alert': true,
      'alert-dismissible': true,
      'fade': true,
      'in': true
    };

    /**
     * Set alert property type and provide these classnames to `classNames` method.
     */
    alertClassNames['alert-' + this.props.type] = true;
    alertClassNames = classNames(alertClassNames);

    let closeButton = '';
    if(this.props.canClose === 'true') {
      closeButton = <button type="button" className="close" onClick={this.closeAlertBox}><i className="fa fa-times"></i></button>;
    }

    return (
      <div className={alertClassNames}>
        {closeButton}
        {this.props.children}
      </div>
    );
  }

};

export default AlertBox;
