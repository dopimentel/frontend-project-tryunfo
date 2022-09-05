import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { name, type, dataTestId } = this.props;
    return (
      <label htmlFor={ name }>
        <input type={ type } data-testid={ dataTestId } id={ name } />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
};
export default Input;
