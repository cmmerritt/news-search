import React from 'react';
import PropTypes from 'prop-types';

// image url = urlToImage
// grab everything from json.articles.[key] e.g. json.articles.title
// unique id: use url?

const Article = ({ title, description, author, url, image }) => (
  <figure>
    <img src={image} alt={title} />
    <figcaption>
      <p>{title}</p>
      <p>{description}</p>
      <p>{author}</p>
      <p>{url}</p>
    </figcaption>
  </figure>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  author: PropTypes.string,
  url: PropTypes.string.isRequired,
  image: PropTypes.string
};

export default Article;
