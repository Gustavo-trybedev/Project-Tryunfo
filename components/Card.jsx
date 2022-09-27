import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
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
    } = this.props;
    return (
      <section className="card-container">
        <img
          className="card-image"
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        />
        <div className="card-content">
          <img className="logo" src="https://logosmarcas.net/wp-content/uploads/2021/02/Dragon-Ball-Logo.png" alt="logo" />
          <div className="card-header">
            <h3 data-testid="name-card">{ cardName }</h3>
            <p data-testid="description-card">{ cardDescription }</p>

          </div>
          <div className="card-stats">
            <p data-testid="rare-card">{ cardRare }</p>
            <ul>
              <li data-testid="attr1-card">
                KI _ _ _ _ _ _ _ _ _ _ _ _ _ _
                { cardAttr1 }
              </li>
              <li data-testid="attr2-card">
                Técnicas _ _ _ _ _ _ _ _ _ _
                { cardAttr2 }
              </li>
              <li data-testid="attr3-card">
                Velocidade _ _ _ _ _ _ _ _ _
                { cardAttr3 }
              </li>
            </ul>
            { cardTrunfo === true && (
              <span data-testid="trunfo-card">
                Super Trunfo
              </span>)}
          </div>
        </div>
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  cardAttr2: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  cardAttr3: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
