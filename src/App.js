import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Input from './components/Input';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    cardList: [],
    nameFilter: '',
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(
      { [name]: value },
      () => {
        this.enableButtonSave();
      },
      () => {
        this.filterName();
      },
    );
  };

  enableButtonSave = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const attrs = [cardAttr1, cardAttr2, cardAttr3];
    const emptyFields = [
      !cardName.length,
      !cardDescription.length,
      !cardImage.length,
      !cardRare.length,
    ];
    const ninety = 90;
    const maxAttrsSum = 210;
    const attrsSum = attrs.reduce((acc, curr) => Number(acc) + Number(curr));

    const isOutRange = attrs.some((attr) => attr < 0 || attr > ninety);
    const biggerThanMax = attrsSum > maxAttrsSum;
    const isFilled = emptyFields.every((field) => field !== true);

    this.setState({ isSaveButtonDisabled: true });

    if (isFilled && !isOutRange && !biggerThanMax) {
      this.setState({ isSaveButtonDisabled: false });
    }
  };

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      cardList,
    } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }
    cardList.push(newCard);

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardList,
    }, () => { this.enableButtonSave(); });
  };

  onButtonDeleteClick = (event) => {
    const { cardList } = this.state;
    const { cardTrunfo } = cardList[event.target.id];
    if (cardTrunfo) {
      this.setState({ hasTrunfo: false });
    }
    cardList.splice(event.target.id, 1);
    this.setState(
      { cardList },
    );
  };

  filterName = () => {
    const { cardList, nameFilter } = this.state;
    if (nameFilter === '') {
      return cardList;
    }
    return cardList.filter((card) => card.cardName.includes(nameFilter));
  };

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
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Input
          name="nameFilter"
          type="text"
          dataTestId="name-filter"
          onInputChange={ this.onInputChange }
          // onChange={ this.onNameFilterChange }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          button={ false }
        />
        {this.filterName().map(({
          cardName: name,
          cardDescription: description,
          cardAttr1: attr1,
          cardAttr2: attr2,
          cardAttr3: attr3,
          cardImage: image,
          cardRare: rare,
          cardTrunfo: trunfo,
        }, index) => (<Card
          key={ name }
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          button
          onButtonDeleteClick={ this.onButtonDeleteClick }
          id={ index }
        />))}
      </div>
    );
  }
}

export default App;
