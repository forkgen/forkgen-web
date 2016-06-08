'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Table } from 'react-bootstrap';
import './Browse.less';

class Browse extends React.Component {
  render() {
    return (
      <Table responsive>
        <tbody>
          <tr>
            <td><i className="fa fa-folder"></i> <a href="#">src</a></td>
            <td><a href="#">Fixes Open repository route</a></td>
            <td className="text-right">2 months ago</td>
          </tr>
          <tr>
            <td><i className="fa fa-folder"></i> <a href="#">dist</a></td>
            <td><a href="#">Updates myProjects page</a></td>
            <td className="text-right">2 months ago</td>
          </tr>
          <tr>
            <td><i className="fa fa-folder"></i> <a href="#">server</a></td>
            <td><a href="#">Fixes jest errors</a></td>
            <td className="text-right">2 months ago</td>
          </tr>
          <tr>
            <td><i className="fa fa-file-text-o"></i> <a href="#">webpack.config.js</a></td>
            <td><a href="#">Update initial client stack on React ...</a></td>
            <td className="text-right">2 months ago</td>
          </tr>
        </tbody>
      </Table>
    );
  }
};

export default Browse;
