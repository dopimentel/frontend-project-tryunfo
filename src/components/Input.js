import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { name, card, type, dataTestId, onInputChange, checked } = this.props;
    return (
      <label htmlFor={ name }>
        <input
          name={ name }
          type={ type }
          data-testid={ dataTestId }
          id={ name }
          value={ card }
          onChange={ onInputChange }
          checked={ checked }
        />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  card: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
export default Input;
