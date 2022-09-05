import React, { Component } from 'react';
import Input from './Input';

class Form extends Component {
  render() {
    return (
      <form>
        <Input name="name" type="text" dataTestId="name-input" />
        <label htmlFor="description">
          <textarea id="description" data-testid="description-input" />
        </label>
        <Input name="attr1" type="number" dataTestId="attr1-input" />
        <Input name="attr2" type="number" dataTestId="attr2-input" />
        <Input name="attr3" type="number" dataTestId="attr3-input" />
        <Input name="image" type="text" dataTestId="image-input" />
        <label htmlFor="rare">
          <select data-testid="rare-input" id="rare">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <Input name="trunfo" type="checkbox" dataTestId="trunfo-input" />
        <button type="button" data-testid="save-button">
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
