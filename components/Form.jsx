import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        <section className="input">
          <label htmlFor="form-name-input">
            Nome
            <br />
            <input
              name="cardName"
              type="text"
              id="form-name-input"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
        </section>

        <section className="textarea">
          <label htmlFor="form-description-textarea">
            Descrição
            <br />
            <textarea
              name="cardDescription"
              id="form-description-textarea"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </section>

        <section className="input">
          <label htmlFor="form-attr1-input">
            Atributo 1
            <br />
            <input
              name="cardAttr1"
              type="number"
              id="form-attr1-input"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
              min={ 0 }
              max={ 90 }
            />
          </label>
        </section>

        <section className="input">
          <label htmlFor="form-attr2-input">
            Atributo 2
            <br />
            <input
              name="cardAttr2"
              type="number"
              id="form-attr2-input"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
              min={ 0 }
              max={ 90 }
            />
          </label>
        </section>

        <section className="input">
          <label htmlFor="form-attr3-input">
            Atributo 3
            <br />
            <input
              name="cardAttr3"
              type="number"
              id="form-attr3-input"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
              min={ 0 }
              max={ 90 }
            />
          </label>
        </section>

        <section className="input">
          <label htmlFor="form-image-input">
            Imagem
            <br />
            <input
              name="cardImage"
              type="text"
              id="form-image-input"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
        </section>

        <section className="select">
          <label htmlFor="form-rarity-select">
            Raridade
            <br />
            <select
              name="cardRare"
              id="form-rarity-select"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
        </section>

        <section className="checkbox">
          <label htmlFor="form-trunfo-checkbox">
            Super Trunfo:
            <br />
            {hasTrunfo ? (<span>Você já tem um Super Trunfo em seu baralho</span>)
              : (
                <input
                  type="checkbox"
                  name="cardTrunfo"
                  id="form-trunfo-checkbox"
                  data-testid="trunfo-input"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
              )}
          </label>
        </section>

        <section className="button">
          <button
            type="button"
            id="form-save-button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </section>

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
  hasTrunfo: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object])
    .isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
