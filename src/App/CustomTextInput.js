import React from 'react';

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.logValue = this.logValue.bind(this);
  }

  logValue() {
    console.log(this.textInput.value);
  }

  render() {
    // Use the `ref` callback to store a reference to the text input DOM
    // element in an instance field (for example, this.textInput).
    return (
      <div>
        <input
          type="text"
          ref={(input) => { this.textInput = input; }} />
        <input
          type="button"
          value="Log the text input"
          onClick={this.logValue}
        />
      </div>
    );
  }
}

export default CustomTextInput;
