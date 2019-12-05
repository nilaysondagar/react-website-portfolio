import React, { Component, Fragment } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

export class ProjectRow extends Component {

  static propTypes = {
    rows: PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      images: PropTypes.array.isRequired,
      imageAlt: PropTypes.string.isRequired,
      link: PropTypes.string,
      linkText: PropTypes.string
    }).isRequired,
    isLargeImage: PropTypes.bool.isRequired
  }

  render() {
    const {rows, isLargeImage} = this.props;
    const { title, content, images, imageAlt, link, linkText } = rows;
    const imageContainerClassNames = classnames(
      'project__image-container',
      { 'no-image': !images.length }
    );
    const imageClassNames = classnames({
      'project__image-container__large-image': isLargeImage,
      'project__image-container__image': !isLargeImage
    });

    return (
      <Fragment>
        <div className="project__info">
          <h2>{title}</h2>
          <p>{content}</p>
          {link && 
            <a 
              className="project__info__link-button" 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {linkText}
            </a>
          }
        </div>
        <div className={imageContainerClassNames}>
          {images.map((image, key) => (
            <img
              key={`${imageAlt}-${key}`}
              className={key === 0
                ? imageClassNames
                : `${imageClassNames} ${imageClassNames}--second`
              }
              src={image}
              alt={imageAlt}
            />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default ProjectRow;
