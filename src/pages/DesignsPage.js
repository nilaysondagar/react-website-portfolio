import React, { Component } from 'react';
import classnames from 'classnames';

import FadingBox, { FadingBoxClassNames } from '../components/common/FadingBox';
import SlidingUpCard from '../components/cards/SlidingUpCard';
import { DESIGNS } from '../constants/designs';

export class DesignsPage extends Component {
  
  state = {
    isVisible: false
  }

  /**
   * Lifecycle method that sets the visibility
   * of the component to ensure the animation 
   * runs after the component has mounted.
   */
  componentDidMount() {
    this.setState({ isVisible: true });
  }

  render() {
    const { isVisible } = this.state;
    const animationClassNames = classnames({
      [FadingBoxClassNames.VISIBLE]: isVisible,
      [FadingBoxClassNames.HIDDEN]: !isVisible
    });

    return (
      <FadingBox className="page-container" pose={animationClassNames}>
        <div className="designs">
          <h1 className="page-title">Designs</h1>
          <div className="designs__cards">
            {DESIGNS.map(design => (
              <SlidingUpCard key={design.title} className="designs-card" pose={animationClassNames}>
                <img className="designs-card__image" src={design.image} alt="design preview" />
                <div className="designs-card__content">
                  <h3 className="designs-card__content__title">{design.title}</h3>
                  <h4 className="designs-card__content__text">{design.description}</h4>
                  <a 
                    className="designs-card__content__link-button" 
                    href={design.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {design.linkText}
                  </a>
                </div>
              </SlidingUpCard>
            ))}
          </div>
        </div>
      </FadingBox>
    );
  }
}

export default DesignsPage;
