import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './index.css';

class App extends Component {
state = {
  cardName: '',
  cardDescription: '',
  cardImage: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardRare: 'normal',
  cardTrunfo: false,
  isSaveButtonDisabled: true,
  hasTrunfo: false,
  deck: [],
};

enableButton = () => {
  const {
    cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
    cardRare,
  } = this.state;

  const atributeLimit = 90;
  const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
  const sumLimit = 210;

  const validateSum = sum > sumLimit;

  const validateAttrMinLimit = Number(cardAttr1) < 0
      || Number(cardAttr2) < 0
      || Number(cardAttr3) < 0;

  const validateAttrMaxLimit = Number(cardAttr1) > atributeLimit
      || Number(cardAttr2) > atributeLimit
      || Number(cardAttr3) > atributeLimit;

  const validateBlankFields = cardName.length === 0
      || cardDescription.length === 0
      || cardAttr1.length === 0
      || cardAttr2.length === 0
      || cardAttr3.length === 0
      || cardImage.length === 0
      || cardRare.length === 0;

  const validateRules = validateAttrMaxLimit
      || validateAttrMinLimit
      || validateSum
      || validateBlankFields;

  this.setState({ isSaveButtonDisabled: validateRules });
}

  onInputChange = ({ target }) => {
    const { name, type, value } = target;
    if (type === 'checkbox') {
      const { cardTrunfo } = this.state;
      this.setState({
        [name]: !cardTrunfo,
      });
    } else {
      this.setState({
        [name]: value,
      }, this.enableButton);
    }
  };

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    } = this.state;

    const card = {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    };

    const { deck } = this.state;
    deck.push(card);
    this.setState({ deck });

    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
  };

  renderTextIfHasTrunfoInDeck = () => {
    const { deck } = this.state;
    const hasTrunfo = deck.some((card) => card.cardTrunfo === true);
    if (hasTrunfo) {
      return (
        <p>Você já tem um Super Trunfo em seu baralho</p>
      );
    }
  }

  deleteCardFromDeck = (card) => {
    const { deck } = this.state;
    const newDeck = deck.filter((c) => c.cardName !== card.cardName);
    this.setState({
      deck: newDeck,
      hasTrunfo: (card.hasTrunfo),
    });
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      deck,
    } = this.state;

    return (
      <main>
        <h1>Tryunfo!</h1>
        <section className="form-container">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardImage={ cardImage }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ this.renderTextIfHasTrunfoInDeck() }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
        </section>

        <section className="template-container">
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardImage={ cardImage }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </section>
        <section className="deck-container">
          {
            deck.map((card, i) => (

              <section key={ i }>
                <Card { ...card } />
                <button
                  data-testid="delete-button"
                  type="button"
                  key={ i }
                  onClick={ () => this.deleteCardFromDeck(card) }
                  className="delete-button"
                >
                  Excluir
                </button>
              </section>
            ))

          }
        </section>

      </main>
    );
  }
}

export default App;
