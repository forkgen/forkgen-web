'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

require('./Initialize.less');

class Initialize extends React.Component {
  render() {
    return (
      <div className="media project-container">
        <div className="media-body">
          <form>
            <div className="checkbox bg-info" title="Check in-case you want to create a bare repository (Git repository without a working directory)">
              <label>
                <input type="checkbox" /> Create bare repository.
              </label>
            </div>
            <div className="checkbox bg-info" title="Check in-case you want to add .gitignore in the root of the repository">
              <label>
                <input type="checkbox" /> Add .ignore file on repository root.
              </label>
            </div>
            <div className="form-group">
              <select>
                <option>Actionscript</option>
                <option>Ada</option>
                <option>Agda</option>
                <option>Android</option>
                <option>AppEngine</option>
                <option>AppceleratorTitanium</option>
                <option>ArchLinuxPackages</option>
                <option>Autotools</option>
                <option>Bancha</option>
                <option>C</option>
                <option>C</option>
                <option>CFWheels</option>
                <option>CMake</option>
                <option>CUDA</option>
                <option>CakePHP</option>
                <option>ChefCookbook</option>
                <option>Clojure</option>
                <option>CodeIgniter</option>
                <option>CommonLisp</option>
                <option>Composer</option>
                <option>Concrete5</option>
                <option>Coq</option>
                <option>CraftCMS</option>
                <option>D</option>
                <option>DM</option>
                <option>Dart</option>
                <option>Delphi</option>
                <option>Drupal</option>
                <option>EPiServer</option>
                <option>Eagle</option>
                <option>Elisp</option>
                <option>Elixir</option>
                <option>Elm</option>
                <option>Erlang</option>
                <option>ExpressionEngine</option>
                <option>ExtJS</option>
                <option>ExtJs</option>
                <option>Fancy</option>
                <option>Finale</option>
                <option>ForceDotCom</option>
                <option>Fortran</option>
                <option>FuelPHP</option>
                <option>GWT</option>
                <option>GitBook</option>
                <option>Go</option>
                <option>Gradle</option>
                <option>Grails</option>
                <option>Haskell</option>
                <option>IGORPro</option>
                <option>Idris</option>
                <option>Java</option>
                <option>Jboss</option>
                <option>Jekyll</option>
                <option>Joomla</option>
                <option>Jython</option>
                <option>KiCAD</option>
                <option>Kohana</option>
                <option>LabVIEW</option>
                <option>Laravel</option>
                <option>Leiningen</option>
                <option>LemonStand</option>
                <option>Lilypond</option>
                <option>Lithium</option>
                <option>Lua</option>
                <option>Magento</option>
                <option>Maven</option>
                <option>Mercury</option>
                <option>MetaProgrammingSystem</option>
                <option>Meteor</option>
                <option>Nim</option>
                <option>Node</option>
                <option>OCaml</option>
                <option>Objective</option>
                <option>Opa</option>
                <option>OracleForms</option>
                <option>Packer</option>
                <option>Perl</option>
                <option>Phalcon</option>
                <option>PlayFramework</option>
                <option>Plone</option>
                <option>Prestashop</option>
                <option>Processing</option>
                <option>Python</option>
                <option>Qooxdoo</option>
                <option>Qt</option>
                <option>R</option>
                <option>ROS</option>
                <option>Rails</option>
                <option>RhodesRhomobile</option>
                <option>Ruby</option>
                <option>Rust</option>
                <option>SCons</option>
                <option>Sass</option>
                <option>Scala</option>
                <option>Scrivener</option>
                <option>Sdcc</option>
                <option>SeamGen</option>
                <option>SketchUp</option>
                <option>SugarCRM</option>
                <option>Swift</option>
                <option>Symfony</option>
                <option>SymphonyCMS</option>
                <option>Target3001</option>
                <option>Tasm</option>
                <option>TeX</option>
                <option>Textpattern</option>
                <option>TurboGears2</option>
                <option>Typo3</option>
                <option>Umbraco</option>
                <option>Unity</option>
                <option>UnrealEngine</option>
                <option>VVVV</option>
                <option>VisualStudio</option>
                <option>Waf</option>
                <option>WordPress</option>
                <option>Xojo</option>
                <option>Yeoman</option>
                <option>Yii</option>
                <option>ZendFramework</option>
                <option>Zephir</option>
                <option>gcov</option>
                <option>nanoc</option>
                <option>opencart</option>
                <option>stella</option>
                <option>Erlang</option>
                <option>ExpressionEngine</option>
                <option>ExtJS</option>
                <option>ExtJs</option>
                <option>Fancy</option>
                <option>Finale</option>
                <option>ForceDotCom</option>
                <option>Fortran</option>
                <option>FuelPHP</option>
                <option>GWT</option>
                <option>GitBook</option>
                <option>Go</option>
                <option>Gradle</option>
                <option>Grails</option>
                <option>Haskell</option>
                <option>IGORPro</option>
                <option>Idris</option>
                <option>Java</option>
                <option>Jboss</option>
                <option>Jekyll</option>
                <option>Joomla</option>
                <option>Jython</option>
                <option>KiCAD</option>
                <option>Kohana</option>
                <option>LabVIEW</option>
                <option>Laravel</option>
                <option>Leiningen</option>
                <option>LemonStand</option>
                <option>Lilypond</option>
                <option>Lithium</option>
                <option>Lua</option>
                <option>Magento</option>
                <option>Maven</option>
                <option>Mercury</option>
                <option>MetaProgrammingSystem</option>
                <option>Meteor</option>
                <option>Nim</option>
                <option>Node</option>
                <option>OCaml</option>
                <option>Objective</option>
                <option>Opa</option>
                <option>OracleForms</option>
                <option>Packer</option>
                <option>Perl</option>
                <option>Phalcon</option>
                <option>PlayFramework</option>
                <option>Plone</option>
                <option>Prestashop</option>
                <option>Processing</option>
                <option>Python</option>
                <option>Qooxdoo</option>
                <option>Qt</option>
                <option>R</option>
                <option>ROS</option>
                <option>Rails</option>
                <option>RhodesRhomobile</option>
                <option>Ruby</option>
                <option>Rust</option>
                <option>SCons</option>
                <option>Sass</option>
                <option>Scala</option>
                <option>Scrivener</option>
                <option>Sdcc</option>
                <option>SeamGen</option>
                <option>SketchUp</option>
                <option>SugarCRM</option>
                <option>Swift</option>
                <option>Symfony</option>
                <option>SymphonyCMS</option>
                <option>Target3001</option>
                <option>Tasm</option>
                <option>TeX</option>
                <option>Textpattern</option>
                <option>TurboGears2</option>
                <option>Typo3</option>
                <option>Umbraco</option>
                <option>Unity</option>
                <option>UnrealEngine</option>
                <option>VVVV</option>
                <option>VisualStudio</option>
                <option>Waf</option>
                <option>WordPress</option>
                <option>Xojo</option>
                <option>Yeoman</option>
                <option>Yii</option>
                <option>ZendFramework</option>
                <option>Zephir</option>
                <option>gcov</option>
                <option>nanoc</option>
                <option>opencart</option>
                <option>stella</option>
              </select>
            </div>
            <div className="checkbox bg-info" title="Check in-case you want to add license file in the root of the repository">
              <label>
                <input type="checkbox" /> Add a license file on repository root.
              </label>
            </div>
            <div className="form-group">
              <select>
                <option>Apache License 2.0</option>
                <option>GNU General Public License v3.0</option>
                <option>MIT License</option>
                <option>Artistic License 2.0</option>
                <option>BSD 2-clause "Simplified" License</option>
                <option>BSD 3-clause "New" or "Revised" License</option>
                <option>Creative Commons Zero v1.0 Universal</option>
                <option>Eclipse Public License 1.0</option>
                <option>GNU Affero General Public License v3.0</option>
                <option>GNU General Public License v2.0</option>
                <option>GNU Lesser General Public License v2.1</option>
                <option>GNU Lesser General Public License v3.0</option>
                <option>ISC License</option>
                <option>Mozilla Public License 2.0</option>
                <option>The Unlicense</option>
              </select>
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
        </div>
      </div>
    );
  }
}

export default Initialize;
