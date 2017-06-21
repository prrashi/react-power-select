import React, { Component } from 'react';
import { TypeAhead } from 'src';

export default class PlainArrayDemo extends Component {
  state = {
    selectedFramework: 'React',
  };

  frameworks = [
    'React',
    'Ember',
    'Angular',
    'Vue',
    'Preact',
    'Meteor',
    'Backbone',
    'Knockout',
    'SproutCore',
    'Spine',
  ];

  handleChange = ({ option }) => {
    this.setState({ selectedFramework: option });
  };

  render() {
    return (
      <div>
        <div className="demo">
          <h3>Plain Array</h3>
          <TypeAhead
            options={this.frameworks}
            selected={this.state.selectedFramework}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}