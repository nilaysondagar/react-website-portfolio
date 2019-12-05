import React, { Component } from 'react';
import classnames from 'classnames';

import FadingBox, { FadingBoxClassNames } from '../components/common/FadingBox';
import GrowingCircle, { GrowingCircleClassNames } from '../components/common/GrowingCircle';
import GrowingCircleSmall from '../components/common/GrowingCircleSmall';
import profileImage from '../assets/images/profileImage.jpeg';
import { EXT_LINKS } from '../constants/extLinks';

/**
 * Class that displays the home page with
 * information about me.
 */
export class HomePage extends Component {

  state = {
    isVisible: false,
    isImageVisible: false
  }

  /**
   * Lifecycle method that sets the visibility
   * of the component to ensure the animation 
   * runs after the component has mounted.
   */
  componentDidMount() {
    this.setState({ isVisible: true, isImageVisible: true });
  }

  render() {
    const { isVisible, isImageVisible } = this.state;
    const boxClassNames = classnames({
      [FadingBoxClassNames.VISIBLE]: isVisible,
      [FadingBoxClassNames.HIDDEN]: !isVisible
    });
    const imageClassNames = classnames({
      [GrowingCircleClassNames.VISIBLE]: isImageVisible,
      [GrowingCircleClassNames.HIDDEN]: !isImageVisible
    });

    return (
      <FadingBox className="page-container" pose={boxClassNames}>
        <div className="home">
          <h1 className="page-title">About me</h1>
          <GrowingCircle
            pose={imageClassNames}
            src={profileImage}
            className="home__image"
            alt="profile"
          />
          <p className="home__text">
            Hey there! I'm a third year software engineering student at the University of Victoria
            with a passion for web development, design, and learning! I've been programming for over
            6 years (starting way back in grade 9), and I'm always on the hunt for something new to
            work on. I've played around with a variety of languages, from C++ to PHP to Python to
            JavaScript, which is what I mostly use now. When I'm not studying or programming, you can
            find me binging something on Netflix, out on photoshoots, or running down scenic trails!
          </p>
          <div className="home__ext-links">
            {EXT_LINKS.map(extLink => (
              <a 
                key={extLink.alt}  
                href={extLink.link} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <GrowingCircleSmall
                  pose={imageClassNames}
                  src={extLink.src}
                  className="home__ext-links__image"
                  alt={extLink.alt}
                />
              </a>
            ))}
          </div>
        </div>
      </FadingBox>
    );
  }
}

export default HomePage;