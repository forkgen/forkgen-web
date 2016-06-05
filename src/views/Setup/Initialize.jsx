'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import 'react-widgets/lib/less/react-widgets.less';
import './Initialize.less';

import DropdownList from 'react-widgets/lib/DropdownList';
import { Panel } from 'react-bootstrap';


class Initialize extends React.Component {
  render() {
    let ignoreList = ['Actionscript', 'Ada', 'Agda', 'Android', 'AppEngine', 'AppceleratorTitanium', 'ArchLinuxPackages',
        'Autotools', 'Bancha', 'C', 'C', 'CFWheels', 'CMake', 'CUDA', 'CakePHP',
        'ChefCookbook', 'Clojure', 'CodeIgniter', 'CommonLisp', 'Composer', 'Concrete5', 'Coq', 'CraftCMS', 'D',
        'DM', 'Dart', 'Delphi', 'Drupal', 'EPiServer', 'Eagle', 'Elisp', 'Elixir', 'Elm', 'Erlang', 'ExpressionEngine',
        'ExtJS', 'ExtJs', 'Fancy', 'Finale', 'ForceDotCom', 'Fortran', 'FuelPHP', 'GWT', 'GitBook', 'Go', 'Gradle', 'Grails',
        'Haskell', 'IGORPro', 'Idris', 'Java', 'Jboss', 'Jekyll', 'Joomla', 'Jython', 'KiCAD', 'Kohana', 'LabVIEW', 'Laravel',
        'Leiningen', 'LemonStand', 'Lilypond', 'Lithium', 'Lua', 'Magento', 'Maven', 'Mercury', 'MetaProgrammingSystem', 'Meteor',
        'Nim', 'Node', 'OCaml', 'Objective', 'Opa', 'OracleForms', 'Packer', 'Perl', 'Phalcon', 'PlayFramework', 'Plone',
        'Prestashop', 'Processing', 'Python', 'Qooxdoo', 'Qt', 'R', 'ROS', 'Rails', 'RhodesRhomobile', 'Ruby', 'Rust', 'SCons',
        'Sass', 'Scala', 'Scrivener', 'Sdcc', 'SeamGen', 'SketchUp', 'SugarCRM', 'Swift', 'Symfony', 'SymphonyCMS', 'Target3001',
        'Tasm', 'TeX', 'Textpattern', 'TurboGears2', 'Typo3', 'Umbraco', 'Unity', 'UnrealEngine', 'VVVV', 'VisualStudio', 'Waf',
        'WordPress', 'Xojo', 'Yeoman', 'Yii', 'ZendFramework', 'Zephir', 'gcov', 'nanoc', 'opencart', 'stella'];

    let license = ['Apache License 2.0', 'GNU General Public License v3.0',
    'MIT License', 'Artistic License 2.0', 'BSD 2-clause "Simplified" License',
    'BSD 3-clause "New" or "Revised" License', 'Creative Commons Zero v1.0 Universal',
    'Eclipse Public License 1.0', 'GNU Affero General Public License v3.0',
    'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1',
    'GNU Lesser General Public License v3.0', 'ISC License',
    'Mozilla Public License 2.0', 'The Unlicense'];

    return (
      <Panel header="Create a new respository" className="initialize-component">
        <form>
          <div className="checkbox bg-info" title="Check in-case you want to create a bare repository (Git repository without a working directory)">
            <label>
              <input type="checkbox" /> Create a bare repository.
            </label>
          </div>
          <div className="checkbox bg-info" title="Check in-case you want to add .gitignore in the root of the repository">
            <label>
              <input type="checkbox" /> Add .ignore file on repository root.
            </label>
          </div>
          <div className="form-group">
            <DropdownList defaultValue={'Node'} data={ignoreList} caseSensitive={false} filter='contains'/>
          </div>
          <div className="checkbox bg-info" title="Check in-case you want to add license file in the root of the repository">
            <label>
              <input type="checkbox" /> Add a license file on repository root.
            </label>
          </div>
          <div className="form-group">
            <DropdownList defaultValue={'MIT License'} data={license} caseSensitive={false} filter='contains'/>
          </div>
          <div className="checkbox bg-info" title="Check in-case you want to add README.md file in the root of the repository">
            <label>
              <input type="checkbox" /> Initialize this repository with a README.md
            </label>
          </div>
          <div className="form-group">
            <label for="createRepository">Specify repository location:</label>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="E.g. C:\Workspace" />
              <span className="input-group-btn">
                <button className="btn btn-success" type="button" title="Create new respository">Create</button>
              </span>
            </div>
          </div>
        </form>
      </Panel>
    );
  }
}

export default Initialize;
