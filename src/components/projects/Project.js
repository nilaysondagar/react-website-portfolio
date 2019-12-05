import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ProjectRow from './ProjectRow';
import SlidingUpBox, { SlidingUpBoxClassNames } from '../common/SlidingUpBox';
import freshworksLogo from '../../assets/images/logos/freshworksLogo.png';

export class Project extends Component {

  static propTypes = {
    project: PropTypes.shape({
      projectTitle: PropTypes.string.isRequired,
      projectSubtitle: PropTypes.string.isRequired,
      projectContent: PropTypes.array.isRequired,
      isLargeImage: PropTypes.bool.isRequired,
      isFreshworks: PropTypes.bool.isRequired
    }).isRequired
  }


  state = {
    isVisible: false
  }

  /**
   * Lifecycle method that sets the visibility
   * of the component to ensure the animation 
   * runs after the component has mounted. It
   * also scrolls the page to the top, to 
   * prevent the animation from finishing in 
   * the middle of the page.
   */
  componentDidMount() {
    this.setState({ isVisible: true });
    window.scrollTo(0, 0);
  }

  render() {
    const { 
      projectTitle, projectSubtitle, projectContent, 
      isLargeImage, isFreshworks 
    } = this.props.project;
    const { isVisible } = this.state;
    const animationClassNames = classnames({
      [SlidingUpBoxClassNames.VISIBLE]: isVisible,
      [SlidingUpBoxClassNames.HIDDEN]: !isVisible
    });

    return (
      <SlidingUpBox className="project" pose={animationClassNames}>
        <header className="project__header">
          <h1>{projectTitle}</h1>
          <p className="project__header__subtitle">
            {projectSubtitle}
          </p>
        </header>
        {projectContent.map((rows, key) => (
          <ProjectRow key={key} rows={rows} isLargeImage={isLargeImage} />
        ))}
        {isFreshworks &&
          <div className="project__left-footer">
            <h2 className="project__left-footer__title">
              Developed at FreshWorks Studio
              <img
                className="project__left-footer__image"
                src={freshworksLogo}
                alt="freshworks"
              />
            </h2>
          </div>
        }
      </SlidingUpBox>
    );
  }
}

export default Project;