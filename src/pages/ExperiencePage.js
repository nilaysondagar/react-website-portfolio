import React, { Component } from 'react';
import classnames from 'classnames';

import FadingBox, { FadingBoxClassNames } from '../components/common/FadingBox';
import SlidingUpCard from '../components/cards/SlidingUpCard';
import { EXPERIENCES } from '../constants/experiences';

/**
 * Class that displays a list of prior experience 
 * cards.
 */
export class ExperiencePage extends Component {

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
        <div className="experience">
          <h1 className="page-title">Experiences</h1>
          <div className="experience__cards">
            {EXPERIENCES.map(experience => (
              <SlidingUpCard key={experience.title} className="experience-card" pose={animationClassNames}>
                <img className="experience-card__image" src={experience.image} alt="experience icon" />
                <div className="experience-card__content">
                  <h3 className="experience-card__content__title">{experience.title}</h3>
                  <div className="experience-card__content__subtitle">
                    <h4 className="experience-card__content__subtitle__text">{experience.location}</h4>
                    <h4 className="experience-card__content__subtitle__text">{experience.date}</h4>
                  </div>
                  <ul>
                    {experience.points.map(point => (
                      <li key={point} className="experience-card__content__text">{point}</li>
                    ))}
                  </ul>
                </div>
              </SlidingUpCard>
            ))}
          </div>
        </div>
      </FadingBox>
    );
  }
}

export default ExperiencePage;
