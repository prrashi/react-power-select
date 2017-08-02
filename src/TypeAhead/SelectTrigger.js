import React, { Component } from 'react';
import { renderComponent } from '../utils';
import AutoResizeInput from '../AutoResizeInput';

export default class SelectTrigger extends Component {
  state = {};

  componentWillMount() {
    let value = this.getValueFromSelectedOption(this.props);
    this.setState({ value });
  }

  componentWillReceiveProps(nextProps) {
    let value = nextProps.searchTerm !== null
      ? nextProps.searchTerm
      : this.getValueFromSelectedOption(nextProps);
    this.setState({
      value,
    });
  }

  getValueFromSelectedOption(props = this.props) {
    let { selectedOption, selectedOptionLabelPath, optionLabelPath } = props;
    let value = '';
    selectedOptionLabelPath = selectedOptionLabelPath || optionLabelPath;
    if (selectedOption) {
      if (typeof selectedOption === 'string') {
        value = selectedOption;
      } else if (selectedOptionLabelPath) {
        value = selectedOption[selectedOptionLabelPath];
      }
    }
    return value;
  }

  handleInputChange = event => {
    this.setState({
      value: event.target.value,
    });
    this.props.handleOnChange(event);
  };

  render() {
    let {
      select,
      placeholder,
      disabled,
      onClick,
      handleOnChange,
      handleKeyDown,
      handleOnFocus,
      handleOnBlur,
      triggerLHSComponent,
      triggerRHSComponent,
    } = this.props;
    return (
      <div className="PowerSelect__Trigger" onClick={onClick}>
        {triggerLHSComponent &&
          <div className="PowerSelect__Trigger__LHS">
            {renderComponent(triggerLHSComponent, { select })}
          </div>}

        <div className="PowerSelect__TriggerInputContainer">
          <AutoResizeInput
            className="PowerSelect__TriggerInput"
            autoComplete="off"
            spellCheck="false"
            placeholder={placeholder}
            value={this.state.value}
            disabled={disabled}
            onChange={this.handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
          />
        </div>

        {triggerRHSComponent &&
          <div className="PowerSelect__Trigger__RHS">
            {renderComponent(triggerRHSComponent, { select })}
          </div>}
        <span className="PowerSelect__TriggerStatus" />
      </div>
    );
  }
}
