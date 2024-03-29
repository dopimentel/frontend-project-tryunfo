import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <Input
          name="cardName"
          card={ cardName }
          type="text"
          dataTestId="name-input"
          onInputChange={ onInputChange }
        />
        <label htmlFor="description">
          <textarea
            name="cardDescription"
            value={ cardDescription }
            id="description"
            data-testid="description-input"
            onChange={ onInputChange }
          />
        </label>
        <Input
          name="cardAttr1"
          card={ cardAttr1 }
          type="number"
          dataTestId="attr1-input"
          onInputChange={ onInputChange }
        />
        <Input
          name="cardAttr2"
          card={ cardAttr2 }
          type="number"
          dataTestId="attr2-input"
          onInputChange={ onInputChange }
        />
        <Input
          name="cardAttr3"
          card={ cardAttr3 }
          type="number"
          dataTestId="attr3-input"
          onInputChange={ onInputChange }
        />
        <Input
          name="cardImage"
          card={ cardImage }
          type="text"
          dataTestId="image-input"
          onInputChange={ onInputChange }
        />
        <label htmlFor="rare">
          <select
            name="cardRare"
            data-testid="rare-input"
            id="rare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        {hasTrunfo ? (
          <p>Você já tem um Super Trunfo em seu baralho</p>
        ) : (
          <Input
            name="cardTrunfo"
            type="checkbox"
            checked={ cardTrunfo }
            dataTestId="trunfo-input"
            onInputChange={ onInputChange }
          />
        )}
        <button
          type="button"
          data-testid="save-button"
          onClick={ onSaveButtonClick }
          disabled={ !!isSaveButtonDisabled }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
export default Form;
