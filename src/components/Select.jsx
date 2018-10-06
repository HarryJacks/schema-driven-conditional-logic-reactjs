import React from 'react';
import { conditionalLogic } from '../utils/conditionalLogic';

export class Select extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    let component = <div key={"field-" + this.props.index}>
      <p>
        <label>{this.props.item.label}:</label>
        <select name={this.props.item.name} {...this.props.input}>
          <option>please choose...</option>
          {this.props.item.options.map((option, index) =>
            <option key={"option-" + index} value={option}>{option}</option>
          )}
        </select>
      </p>
    </div>

    return conditionalLogic(component, this.props);
  }
}