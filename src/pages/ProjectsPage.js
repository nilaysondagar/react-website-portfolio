import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import FadingBox, { FadingBoxClassNames } from '../components/common/FadingBox';
import SlidingUpCard from '../components/cards/SlidingUpCard';
import { PROJECTS } from '../constants/projects';

/**
 * Class that displays projects that I've worked
 * on.
 */
export class ProjectsPage extends Component {

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
        <div className="projects">
          <h1 className="page-title">Projects</h1>
          <div className="projects__cards">
            {PROJECTS.map(project => (
              <SlidingUpCard key={project.title} className="project-card" pose={animationClassNames}>
                <img className="project-card__image" src={project.image} alt="project preview" />
                <div className="project-card__content">
                  <h3 className="project-card__content__title">{project.title}</h3>
                  <h4 className="project-card__content__subtitle__text">{project.tagline}</h4>
                  <hr className="project-card__content__divider" />
                  <h4 className="project-card__content__text">{project.description}</h4>
                  <Link className="project-card__content__link-button" to={project.link}>Read more</Link>
                </div>
              </SlidingUpCard>
            ))}
          </div>
        </div>
      </FadingBox>
    );
  }
}

export default ProjectsPage;
